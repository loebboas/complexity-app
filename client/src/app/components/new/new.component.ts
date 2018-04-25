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
  showDiary = false;
  showPlans = false;
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

  addToDiary() {
    this.showDiary = !this.showDiary;
    const dimension = new Dimension;
    dimension.dim = this.memoriesId;
    const date = Date.now;
    dimension.val = date.toString();
    this.dimensions.push(dimension);
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

  onNewSubmit() {
    this.newContexts = [];  // Reset Context
    this.dataService.getSingleThought(this.selectedThought._id).subscribe(data => { // Get Context of selected Thought
      this.newContexts = data.thought.contexts;                                     //Save Context of selected Thought
      this.newContexts.unshift(this.selectedThought._id);                           //Add Selected Thought as Context
      this.contextContent = data.thought.contents;

      const newThought = {  // create New Thought
        label: this.newThought.value,
        level: this.selectedThought.level,
        color: "FFFFFF",
        clicks: 0,
        showAs: "grid",
        user: this.userId,
        contexts: this.newContexts,
        contents: this.newContents,
        dimensions: this.dimensions,
        texture: "",
        form: "circle",
        privacy: "private"
      };


      this.dataService.newThought(newThought).subscribe(data => {
        this.saveId = data.newId;


        this.contextContent.push(this.saveId);

        const editThought = {
          _id: this.selectedThought._id,
          editContents: this.contextContent
        };

        this.dataService.editThought(editThought).subscribe(data => {
          this.internalService.changeThought(this.selectedThought._id);
          this.newContexts = [];
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
