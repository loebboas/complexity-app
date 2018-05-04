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
  addTag = false;
  newDimension;
  newNumber;
  newTag;
  newLabel;
  addDimension = false;

  constructor(private dataService: DataService,
    private formBuilder: FormBuilder,
    private internalService: InternalService,
    private authService: AuthService,
    private router: Router
  ) {
    //Autocomplete
    this.newThought = new FormControl();
  }


  onDimensionSubmit() {
    //Create New Dimension
    this.newDimension = new Dimension;
    this.newDimension.app = "something";
    this.newDimension.starter = "somethingElse";
    this.newDimension.label = this.newLabel;
    this.newDimension.dimtype = this.selectedDimension.dimtype;
    //Create Value, depending on Input
    if (this.selectedDimension.dimtype == "Date") { this.newDimension.val = this.newDate.toString() };
    if (this.selectedDimension.dimtype == "Number") { this.newDimension.val = this.newNumber };
    if (this.selectedDimension.dimtype == "Tag") { this.newDimension.val = this.newTag };
    //Update Selected Thought with new Dimensions
    this.selectedThought.dimensions.unshift(this.newDimension);
    const editThought = {
      _id: this.selectedThought._id,
      editDimensions: this.selectedThought.dimensions
    };
    this.dataService.editThought(editThought).subscribe(data => {
      //Update Dimension-Content with new Link
      this.internalService.changeThought(this.selectedThought._id);

    });
  }

  changeType(label: string) {
    if (label == "Number") { this.addNumber = true; this.addDate = false; this.addTag = false; };
    if (label == "Date") { this.addDate = true; this.addNumber = false; this.addTag = false; };
    if (label == "Tag") { this.addDate = false; this.addNumber = false; this.addTag = true; };
    this.selectedDimension.dimtype = label;
  }


  ngOnInit() {
this.selectedDimension = new Dimension;
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