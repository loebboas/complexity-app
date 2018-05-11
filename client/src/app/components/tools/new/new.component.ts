import { Component, OnInit, ViewEncapsulation, Input } from '@angular/core';

import { FormControl, FormGroup, FormBuilder, Validators } from '@angular/forms';

import { Location } from '@angular/common';
import { Router } from '@angular/router';

import { Thought } from '../../../models/thought';
import { Dimension } from '../../../models/dimension';
import { DataService } from '../../../services/data.service';
import { InternalService } from '../../../services/internal.service';
import { AuthService } from '../../../services/auth.service';
import { Observable } from 'rxjs';




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
  newPersona: FormControl;
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
  private: any[];
  selectedDimension;
  addNumber = false;
  addDate = false;

  constructor(private dataService: DataService,
    private formBuilder: FormBuilder,
    private internalService: InternalService,
    private authService: AuthService,
    private router: Router
  ) {
    //Autocomplete
    this.thoughtCtrl = new FormControl();
    this.newThought = new FormControl();
    this.newPersona = new FormControl();
  }

 
  onPersonaSubmit() {
    this.newContexts = [];  // Reset Context
    this.dataService.getSingleThought(this.selectedThought._id).subscribe(data => { // Get Context of selected Thought
      this.newContexts = data['thought'].contexts;                                     //Save Context of selected Thought
      this.newContexts.unshift(this.selectedThought._id);                           //Add Selected Thought as Context
  this.contextContent = data['thought'].contents;

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
        this.saveId = data['newId'];


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
 

  onNewSubmit() {
    this.newContexts = [];  // Reset Context
    this.dataService.getSingleThought(this.selectedThought._id).subscribe(data => { // Get Context of selected Thought
      console.log(data);
      this.newContexts = data['thought'].contexts;                                     //Save Context of selected Thought
      this.newContexts.unshift(this.selectedThought._id);                           //Add Selected Thought as Context
      this.contextContent = data['thought'].contents;
      console.log(this.contextContent);
      this.selectedThought.level++;
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
        privacy: "private",
        grid: { cols: 1, rows: 1, colspan: 1, rowspan: 1, x: 0, y: 0 }
      };
      this.selectedThought.level--;

      this.dataService.newThought(newThought).subscribe(data => {
        this.saveId = data['thought']._id;


        this.contextContent.push(this.saveId);
        console.log(this.contextContent);
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

  addDimension(userDimension) {
    if(userDimension.dimtype == "Number") { this.addNumber = true;
      this.addDate = false;
    }
    if(userDimension.dimtype == "Date") { this.addDate = true; this.addNumber = false; }
    this.selectedDimension = userDimension;
  }


  ngOnInit() {

    //GET USER Data
    this.authService.getProfile().subscribe(profile => {
      this.username = profile['user'].username; // Used when creating new blog posts and comments
      this.userId = profile['user']._id;
      this.private = profile['user'].private;
    });


    this.internalService.selectedThoughtObs.subscribe(res => this.selectedThought = res);


  }
}
