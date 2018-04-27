import { Component, OnInit } from '@angular/core';
import { Thought } from '../../../models/thought';
import { Dimension } from '../../../models/dimension';
import { FormControl, FormBuilder } from '@angular/forms';
import { Observable } from 'rxjs/Observable';
import { DataService } from '../../../services/data.service';
import { InternalService } from '../../../services/internal.service';
import { AuthService } from '../../../services/auth.service';
import { Router } from '@angular/router';
import { startWith } from 'rxjs/operators/startWith';
import { map } from 'rxjs/operators/map';

@Component({
  selector: 'app-link',
  templateUrl: './link.component.html',
  styleUrls: ['./link.component.css']
})
export class LinkComponent implements OnInit {
  thoughts: Thought[];
  selectedThought: Thought;
  context: Thought;
  contexts: Thought[];
  lastInput: String;
  dimensions: Dimension[];
  newContexts: String[] = [];
  newContents: String[] = [];
  contextContent: String[] = [];
  private: any[];
  username;
  userId;
  //Autocomplete
  thoughtCtrl: FormControl;
  newThought: FormControl;
  filteredThoughts: Observable<Thought[]>;
  constructor(private dataService: DataService,
    private formBuilder: FormBuilder,
    private internalService: InternalService,
    private authService: AuthService,
    private router: Router
  ) {
    //Autocomplete
    this.thoughtCtrl = new FormControl();
    this.newThought = new FormControl();
    this.filteredThoughts = this.thoughtCtrl.valueChanges
      .pipe(
        startWith(''),
        map(thought => thought ? this.filterThoughts(thought) : this.thoughts.slice())
      );

  }

  filterThoughts(label: string) {
    this.lastInput = label;
    return this.thoughts.filter(thought =>
      thought.label.toLowerCase().indexOf(label.toLowerCase()) === 0);
  }
  
  linkThought(thought) {
    //Get Thought to Update
    this.dataService.getSingleThought(this.selectedThought._id).subscribe(data => {
      this.contextContent = data.thought.contents;
      this.contextContent.push(thought._id);

      const editThought = {
        _id: this.selectedThought._id,
        editContents: this.contextContent
      };

      this.dataService.editThought(editThought).subscribe(data => {
        this.internalService.changeThought(this.selectedThought._id);
        this.newContexts = [];
      });
    });
  }

  ngOnInit() {

    //GET USER Data
    this.authService.getProfile().subscribe(profile => {
      this.username = profile.user.username; // Used when creating new blog posts and comments
      this.userId = profile.user._id;
      this.private = profile.user.private;
    });

    this.internalService.loadThoughts();
    this.internalService.thoughtObs.subscribe(res => this.thoughts = res);
    this.internalService.selThoughtObs.subscribe(res => this.selectedThought = res);
    this.internalService.selContextObs.subscribe(res => this.context = res);
    this.internalService.selContextsObs.subscribe(res => this.contexts = res);

  }
}
