import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';
import { AuthGuard } from '../../guards/auth.guard';
import { DataService } from '../../services/data.service';


@Component({
  selector: 'app-new',
  templateUrl: './new.component.html',
  styleUrls: ['./new.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class NewComponent implements OnInit {

  form;
  message;
  messageClass;
  processing = false;
  allThought;
  username = '';
  userId;
  sessionId;
  dateNow;
  newId;
  saveLink;


  constructor(
  	private formBuilder: FormBuilder,
  	private authService: AuthService,
  	private dataService: DataService,
    private router: Router
  	) {
  	this.createForm();
  }

  createForm() {
  	this.form = this.formBuilder.group({
  		value: '',
  	})
  }

    newLink(link) {
          this.dataService.newLink(link).subscribe(data => {
      if (!data.success) {
         this.messageClass = 'alert alert-danger';
         this.message = data.message;
         this.processing = false;
      } else {
         this.messageClass = 'alert alert-success';
         this.message = data.message;  
         this.saveLink = data.newId;
      }
      });
    }

 onNewSubmit() {
   this.dateNow = new Date().toUTCString();
    // Create new Session
      const sessionThought = {
      value: "Session: " + this.dateNow, // input field
      user: this.userId
    };
     this.dataService.newThought(sessionThought).subscribe(data => {
     this.sessionId = data.newId;

    const topLink = {
      user: this.userId,
      mid: this.sessionId, // input field
      top: this.sessionId
    }
    this.newLink(topLink);
    // Create user object form user's inputs
    this.processing = true;
    const thought = {
      value: this.form.get('value').value, // input field
      user: this.userId
    };

    this.dataService.newThought(thought).subscribe(data => {
     if (!data.success) {
     	this.messageClass = 'alert alert-danger';
     	this.message = data.message;
     	this.processing = false;
     } else {
     	this.messageClass = 'alert alert-success';
     	this.message = data.message;
       this.newId = data.newId;
     	}
        const session = {
        user: this.userId,
        thought: this.sessionId,
      };
     this.dataService.newSession(session).subscribe(data => {
       setTimeout(() => {
        this.router.navigate(['/something', this.newId]); // Redirect
        });
     });
    });
    });
  }

  ngOnInit() {
    // Get profile username on page load
  	  this.authService.getProfile().subscribe(profile => {
      this.username = profile.user.username; 
      this.userId = profile.user._id;
    });
  }
}
