import { Component, OnInit } from '@angular/core';
import { DataService } from '../../../services/data.service';
import { FormBuilder, FormControl } from '@angular/forms';
import { InternalService } from '../../../services/internal.service';
import { AuthService } from '../../../services/auth.service';
import { Router } from '@angular/router';
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
  newThought;
  addDate;
  addNumber;
  addTag;
  newDimension;
  selectedThought;
  user: User;
  newLabel;
  newDate;
  newNumber: number;
  newTag;

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
      user: this.user._id,
      label: this.newLabel,
      val: ""
    }
    const editThought: Thought = this.selectedThought; 
    //Create Value, depending on Input
    if (this.addDate) { 
      this.newDimension.val = this.newDate;
      this.selectedThought.dateDim.push(this.newDimension)
     };
    if (this.addNumber) { 
      this.newDimension.val = this.newNumber, 
      this.selectedThought.numberDim.push(this.newDimension)
    };
    if (this.addTag) { this.newDimension.val = this.newTag;
      this.selectedThought.tagDim.push(this.newDimension) 
    };
    //Update Selected Thought with new Dimensions
    
    
    this.dataService.editThought(editThought).subscribe(data => {
      //Update Dimension-Content with new Link
      this.internalService.loadMyThoughts();
    });
  }

  changeType(label: string) { // I know this is horrible... Just let me be^^
    if (label == "Number") { this.addNumber = true; this.addDate = false; this.addTag = false; };
    if (label == "Date") { this.addDate = true; this.addNumber = false; this.addTag = false; };
    if (label == "Tag") { this.addDate = false; this.addNumber = false; this.addTag = true; };
  }


  ngOnInit() {
  this.internalService.selectedThoughtObs.subscribe(res => this.selectedThought = res);
  this.internalService.selectedUser.subscribe(res => this.user = res);


  }
} 