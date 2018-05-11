import { Component, OnInit } from '@angular/core';
import { DataService } from '../../../services/data.service';
import { FormBuilder, FormControl } from '@angular/forms';
import { InternalService } from '../../../services/internal.service';
import { AuthService } from '../../../services/auth.service';
import { Router } from '@angular/router';
import { Dimension } from '../../../models/dimension';
import { Observable } from 'rxjs';
import { Thought } from '../../../models/thought';
import { User } from '../../../models/user';
import { startWith ,  map } from 'rxjs/operators';

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
  newDimension: Dimension;
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

     this.newDimension = {
      label: this.newLabel,
      dimtype: "Tag",
      val: "Something went wrong"
      }

    //Create Value, depending on Input
    if (this.addDate) { this.newDimension.val = this.newDate.toString(); this.newDimension.dimtype = "Date"; };
    if (this.addNumber) { this.newDimension.val = this.newNumber, this.newDimension.dimtype = "Date"; };
    if (this.addTag) { this.newDimension.val = this.newTag, this.newDimension.dimtype = "Date"; };
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
  }


  ngOnInit() {
  this.internalService.selectedThoughtObs.subscribe(res => this.selectedThought = res);


  }
} 