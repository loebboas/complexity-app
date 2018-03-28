import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { FormControl, FormGroup, FormBuilder, Validators } from '@angular/forms';
import { DataService } from '../../services/data.service';
import { Location } from '@angular/common';
import { Router } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { startWith } from 'rxjs/operators/startWith';
import { map } from 'rxjs/operators/map';
import { Thought } from '../../thought';
import { User } from '../../user';


@Component({
  selector: 'app-new',
  templateUrl: './new.component.html',
  styleUrls: ['./new.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class NewComponent implements OnInit {
  thoughtCtrl: FormControl;
  filteredThoughts: Observable<any[]>;
  thoughts = [{"_id":"65654654","label":"Enter Something","user":"5aaaa481a298bf3510fcd0ad","privacy":"private","__v":1,"inputTime":"2018-03-15T16:55:04.222Z","links":[{"_id":"5aaaa4fea298bf3510fcd0b9","linktype":"context","label":"Context"}]}];
  user: User;
  form;
  messageClass;
  message;
  username;
  userId;
  allThought;
  processing = false;
  sessionId;
  dateNow;
  newId;
  saveLink;
  sessionsId;
  lastInput;


  constructor(
  	private formBuilder: FormBuilder,
  	private authService: AuthService,
  	private dataService: DataService,
    private router: Router
  	) {
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


  gotoThought(id){
    this.router.navigate(['../favorites/', id]);
    this.dataService.getAllThought().subscribe(data => {
    this.thoughts = data.allThought;
    console.log(this.thoughts);
  });
}

 onNewSubmit() {
   this.processing = true;
     // Create New Thought from user's inputs
     const thought = {
            label: this.lastInput, // input field
            user: this.userId,
            form: "sphere",
            privacy: "private"
      };
      //Save New Thought
      this.dataService.newThought(thought).subscribe(data => {
        this.newId = data.newId;
           if (!data.success) {
             this.messageClass = 'alert alert-danger';
             this.message = data.message;
             this.processing = false;
           } else {
             this.messageClass = 'alert alert-success';
             this.message = data.message;          
             }
             //Update New Thought                        
          setTimeout(() => {
            //IF PLAN GOTO PLAN, ELSE GOTO FAVORITES
          this.router.navigate(['/favorites', this.newId]); // Redirect        
        
        });
      });
 }


  ngOnInit() {
    // Get profile username on page load
  	  this.authService.getProfile().subscribe(profile => {
      this.username = profile.user.username; 
      this.userId = profile.user._id;
    });

    this.dataService.getAllThought().subscribe(data => {
      this.thoughts = data.allThought;
      console.log(this.thoughts);
    });
  }
}
