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
  		label: '',
  	})
  }

 onNewSubmit() {
   this.processing = true;
     // Create New Thought from user's inputs
     const thought = {
            label: this.form.get('label').value, // input field
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
  }
}
