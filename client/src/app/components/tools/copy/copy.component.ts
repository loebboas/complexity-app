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
  selector: 'app-copy',
  templateUrl: './copy.component.html',
  styleUrls: ['./copy.component.css']
})
export class CopyComponent implements OnInit {
  thoughts: Thought[];
  selectedThought: Thought;
  context: Thought;
  contexts: Thought[];
  lastInput: String;
  dimensions: Dimension[];
  newContexts: String[] = [];
  newContents: String[] = [];
  contextContent: String[] = [];
  //Autocomplete
  thoughtCtrl: FormControl;
  newThought: FormControl;
  filteredThoughts: Observable<Thought[]>;
  private: any[];
  username;
  userId;
  saveId;

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

  copyThought(thought) {

    this.newContexts = [];  // Reset Context
    this.dataService.getSingleThought(this.selectedThought._id).subscribe(data => { // Get Context of selected Thought
      this.newContexts = data.thought.contexts;                                     //Save Context of selected Thought
      this.newContexts.unshift(this.selectedThought._id);                           //Add Selected Thought as Context
      this.contextContent = data.thought.contents;

      //Resave Thought with New Context
      const copyThought = {
        label: thought.label,
        level: this.selectedThought.level,
        color: thought.color,
        clicks: 0,
        showAs: thought.showAs,
        user: this.userId,
        contexts: this.newContexts,
        contents: thought.contents,
        dimensions: this.dimensions,
        texture: "",
        form: "circle",
        privacy: "private"
      };

      this.dataService.newThought(copyThought).subscribe(data => {
        this.saveId = data.newId;


        this.contextContent.push(this.saveId);

        const editThought = {
          _id: this.selectedThought._id,
          editContents: this.contextContent
        };

        this.dataService.editThought(editThought).subscribe(data => {


          this.router.navigate(['/viewer/', this.selectedThought._id]);
          this.internalService.changeThought(this.selectedThought._id);
        });
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