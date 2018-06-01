import { Component, OnInit, ViewEncapsulation, Input } from '@angular/core';
import { FormControl, FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Location } from '@angular/common';
import { Router } from '@angular/router';
import { Thought } from '../../../models/thought';
import { DataService } from '../../../services/data.service';
import { InternalService } from '../../../services/internal.service';
import { AuthService } from '../../../services/auth.service';
import { Observable } from 'rxjs';
import { User } from '../../../models/user';




@Component({
  selector: 'app-new',
  templateUrl: './new.component.html',
  styleUrls: ['./new.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class NewComponent implements OnInit {
  newThought;
  user: User;
  selectedThought: Thought;
  constructor(private dataService: DataService,
    private formBuilder: FormBuilder,
    private internalService: InternalService,
    private authService: AuthService,
    private router: Router
  ) { }

  onNewSubmit() {
    var newContext = [];
    if (this.selectedThought.contexts) { //Check if Contexts exist
      this.selectedThought.contexts.forEach(context => {
        newContext.unshift(context)
      });
    }
    if(this.selectedThought.label != "My Thoughts") {
      newContext.unshift(this.selectedThought._id)
    }

    var newThought: Thought = {
      label: this.newThought.value,
      createdBy: { user: this.user._id, timestamp: new Date() },
      contexts: newContext,
      clicks: 0,
      public: false
    }

    //check if Public
    if (this.selectedThought.public) { newThought.public = true };

    this.dataService.newThought(newThought).subscribe(data => {
      if (this.selectedThought.label != "My Thoughts") {
        this.selectedThought.contents.push(data['thought']._id);
        console.log(this.selectedThought);
       this.dataService.editThought(this.selectedThought).subscribe(data => {
         
       })
      }
   
    this.internalService.loadData();
   });
  }




  ngOnInit() {
    this.newThought = new FormControl();
    this.internalService.selectedUserObs.subscribe(res => this.user = res);
    this.internalService.selectedThoughtObs.subscribe(res => this.selectedThought = res);


  }
}
