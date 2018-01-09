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
  sessionsId;


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
   this.processing = true;
     // Create New Thought from user's inputs
     const thought = {
            value: this.form.get('value').value, // input field
            user: this.userId,
            form: "sphere",
            privacy: "private"
      };
      //Save New Thought
      this.dataService.newThought(thought).subscribe(data => {
           if (!data.success) {
             this.messageClass = 'alert alert-danger';
             this.message = data.message;
             this.processing = false;
           } else {
             this.messageClass = 'alert alert-success';
             this.message = data.message;
             this.newId = data.newId;
             


             //Create Session Thought
             this.dateNow = new Date().toUTCString();
              // Create new Session
                const sessionThought = {
                value: "Session: " + this.dateNow, // input field
                user: this.userId,
                privacy: "private",
                form: "sphere"
                };

              //Get ID of Sessions-Thought (Created OnRegisterSubmit)
              this.dataService.getThoughtByName("Sessions").subscribe(data => {
              this.sessionsId = data.thought._id;
           
             //Create Session Thought, Save ID
             this.dataService.newThought(sessionThought).subscribe(data => {
                    if (!data.success) {
                       this.messageClass = 'alert alert-danger';
                       this.message = data.message;
                       this.processing = false;
                     } else {
                       this.messageClass = 'alert alert-success';
                       this.message = data.message;
                       this.sessionId = data.newId;
     

                               
                              
                              //Create Link between Sessions and New Session
                              const sessionLink = {
                                user: this.userId,
                                scale: this.sessionsId, 
                                thought: this.sessionId,
                                type: "meaning",
                                }
                                this.dataService.newLink(sessionLink).subscribe(data => {
                              
                                         //Create Session Links
                                      const botLink = {
                                      user: this.userId,
                                      scale: this.sessionId,
                                      thought: this.newId, 
                                      type: "meaning",
                                      position: 1
                                    };

                                      const topLink = {
                                      user: this.userId,
                                      scale: this.newId,
                                      thought: this.sessionId, 
                                      type: "time",
                                      position: new Date()
                                    };
                                      this.dataService.newLink(topLink).subscribe(data => {
                                        this.dataService.newLink(botLink).subscribe(data => {
                                            setTimeout(() => {
                                            this.router.navigate(['/myroom', this.newId]); // Redirect
                                            });
                                        });
                                      });
                      
                              });    
                      }
                });
           });
      }
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
