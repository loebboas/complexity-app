import { Component, OnInit } from '@angular/core';
import { DataService } from '../../../services/data.service';
import { FormBuilder, FormControl } from '@angular/forms';
import { InternalService } from '../../../services/internal.service';
import { AuthService } from '../../../services/auth.service';
import { Router } from '@angular/router';
import { Dimension } from '../../../models/dimension';
import { Observable } from 'rxjs/Observable';
import { Thought } from '../../../models/thought';
import { User } from '../../../models/user';
import { startWith } from 'rxjs/operators/startWith';
import { map } from 'rxjs/operators/map';

@Component({
  selector: 'app-dimension',
  templateUrl: './dimension.component.html',
  styleUrls: ['./dimension.component.css']
})
export class DimensionComponent implements OnInit {
  newDate;
  saveId: any;
  thoughts: Thought[];
  selectedThought: Thought;
  context: Thought;
  contexts: Thought[];
  lastInput: String;
  dimensions: Dimension[];
  userDimensions: Dimension[];
  newContexts: String[] = [];
  newContents: String[] = [];
  contextContent: String[] = [];
  //Autocomplete
  thoughtCtrl: FormControl;
  newThought: FormControl;
  filteredThoughts: Observable<Thought[]>;
  user: User;
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
  private: any[];
  selectedDimension: Dimension;
  addNumber = false;
  addDate = false;
  newDimension;
  newNumber;

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


  onDimensionSubmit() {
    //Create New Dimension
    this.newDimension = new Dimension;
    this.newDimension.app = this.selectedDimension.app;
    this.newDimension.starter = this.selectedDimension.starter;
    this.newDimension.label = this.selectedDimension.label;
    this.newDimension.dimtype = this.selectedDimension.dimtype;
    //Create Value, depending on Input
    if (this.selectedDimension.dimtype == "Date") { this.newDimension.val = this.newDate.toString() };
    if (this.selectedDimension.dimtype == "Number") { this.newDimension.val = this.newNumber };
    //Update Selected Thought with new Dimensions
    this.selectedThought.dimensions.unshift(this.newDimension);
    const editThought = {
      _id: this.selectedThought._id,
      editDimensions: this.selectedThought.dimensions
    };
    this.dataService.editThought(editThought).subscribe(data => {
      //Update Dimension-Content with new Link
      this.dataService.getSingleThought(this.selectedDimension.starter).subscribe(data => {
        this.contextContent = data.thought.contents;
        this.contextContent.push(this.selectedThought._id);
        const editDimThought = {
          _id: data.thought._id,
          editContents: this.contextContent
        };

        this.dataService.editThought(editDimThought).subscribe(data => {
          this.internalService.changeThought(this.selectedThought._id);
            this.internalService.changeTool("none");
        });
      });
    });
  }
  selectDimensionThought(thought) {
    this.selectedDimension = new Dimension;
    this.selectedDimension.app = thought.contexts[0]._id;
    this.selectedDimension.starter = thought._id;
    this.selectedDimension.label = thought.label;
    this.selectedDimension.dimtype = "Name";

  }

  changeType(label: String) {
    if (label == "Number") { this.addNumber = true; this.addDate = false; };
    if (label == "Date") { this.addDate = true; this.addNumber = false; };
    this.selectedDimension.dimtype = label;
  }


  ngOnInit() {

    //GET USER Data
    this.authService.getProfile().subscribe(profile => {
      this.user = profile.user;
    });

    this.internalService.loadThoughts();
    this.internalService.thoughtObs.subscribe(res => this.thoughts = res);
    this.internalService.selThoughtObs.subscribe(res => this.selectedThought = res);
    this.internalService.selContextObs.subscribe(res => this.context = res);
    this.internalService.selContextsObs.subscribe(res => this.contexts = res);

  }
} 