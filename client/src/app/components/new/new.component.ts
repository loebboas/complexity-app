import { Component, OnInit, ViewEncapsulation, Input } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { FormControl, FormGroup, FormBuilder, Validators } from '@angular/forms';
import { DataService } from '../../services/data.service';
import { Location } from '@angular/common';
import { Router } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { startWith } from 'rxjs/operators/startWith';
import { map } from 'rxjs/operators/map';
import { Thought } from '../../models/thought';
import { InternalService } from '../../services/internal.service';
import { Dimension } from '../../models/dimension';


@Component({
  selector: 'app-new',
  templateUrl: './new.component.html',
  styleUrls: ['./new.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class NewComponent implements OnInit {
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
  saveId;
  messageClass;
  message;
  newCompApp;
  addDimensions = false;
  username;
  userId;
  unstructured;
  addDiary = false;
  addGoal = false;
  memoriesId;
  showCopyThought = false;
  showNewThought = true;
  showLinkThought = false;


  constructor(private dataService: DataService,
    private formBuilder: FormBuilder,
    private internalService: InternalService,
    private authService: AuthService,
    private router: Router
  ) {
    //Autocomplete
    this.thoughtCtrl = new FormControl();
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

  addToDiary() {
    const dimension = new Dimension;
    dimension.dim = this.memoriesId;
    const date = Date.now;
    dimension.val = date.toString();
    this.dimensions.push(dimension);
  }

  copyThought(thought) {
    //CREATE CONTEXT
    this.newContexts.unshift(this.selectedThought._id);                     // Add selected Thought as Context
    this.contexts.forEach(thought => this.newContexts.push(thought._id));   // Add Contexts of Selected Element
    this.newContexts.push(this.context._id);                                // Add Main Context

    //LEVEL

    thought.level = this.selectedThought.level;                             //Load Level of Selected Thought
    thought.level++;                                                        // Add a Level

    //Resave Thought with New Context
    const copyThought = {
      label: thought.label,
      level: thought.level,
      user: this.userId,
      contexts: this.newContexts,
      contents: thought.contents,
      dimensions: this.dimensions,
      showAs: "grid",
      privacy: "private"
    };

    this.dataService.newThought(copyThought).subscribe(data => {
      this.saveId = data.newId;


      this.dataService.getSingleThought(this.newContexts[0]).subscribe(data => {
        this.contextContent = data.thought.contents;
        this.contextContent.push(this.saveId);

        const editThought = {
          _id: this.newContexts[0],
          editContents: this.contextContent
        };

        this.dataService.editThought(editThought).subscribe(data => {
        });

        this.internalService.changeThought(this.newContexts[1]);
        this.router.navigate(['/viewer/', this.newContexts[0]]);
        this.internalService.changeThought(this.newContexts[0]);
      });
    });
  }


  onNewSubmit() {

    //CREATE CONTEXT
    this.newContexts.unshift(this.selectedThought._id);                     // Add selected Thought as Context
    this.contexts.forEach(thought => this.newContexts.push(thought._id));   // Add Contexts of Selected Element
    this.newContexts.push(this.context._id);                                // Add Main Context

    this.newContents = [];

    const newThought = {
      label: this.lastInput,
      level: this.selectedThought.level,
      user: this.userId,
      contexts: this.newContexts,
      contents: this.newContents,
      dimensions: this.dimensions,
      showAs: "card",
      privacy: "private"
    };


    this.dataService.newThought(newThought).subscribe(data => {
      this.saveId = data.newId;

      //Get Thought to Update
      this.dataService.getSingleThought(this.newContexts[0]).subscribe(data => {
        this.contextContent = data.thought.contents;
        this.contextContent.push(this.saveId);

        const editThought = {
          _id: this.newContexts[0],
          editContents: this.contextContent
        };

        this.dataService.editThought(editThought).subscribe(data => {
          if (!data.success) {
            this.messageClass = 'alert alert-danger';
            this.message = data.message;
          } else {
            this.messageClass = 'alert alert-success';
            this.message = data.message;
          };
          this.newContexts = [];

          this.internalService.changeThought(this.newContexts[1]);
          this.router.navigate(['/viewer/', this.newContexts[0]]);
          this.internalService.changeThought(this.newContexts[0]);
        });
      });
    });
  }




  ngOnInit() {

    //GET USER Data
    this.authService.getProfile().subscribe(profile => {
      this.username = profile.user.username; // Used when creating new blog posts and comments
      this.userId = profile.user._id;
      this.unstructured = profile.user.unstructured;
    });

    this.internalService.loadThoughts();
    this.internalService.thoughtObs.subscribe(res => this.thoughts = res);
    this.internalService.selThoughtObs.subscribe(res => this.selectedThought = res);
    this.internalService.selContextObs.subscribe(res => this.context = res);
    this.internalService.selContextsObs.subscribe(res => this.contexts = res);

  }
}
