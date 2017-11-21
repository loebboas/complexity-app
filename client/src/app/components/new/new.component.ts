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
  		user: '',
  	})
  }

 onNewSubmit() {
  	// Create user object form user's inputs
    this.processing = true;
    const thought = {
      value: this.form.get('value').value, // E-mail input field
      user: this.userId,
    };

    this.dataService.newThought(thought).subscribe(data => {
     if (!data.success) {
     	this.messageClass = 'alert alert-danger';
     	this.message = data.message;
     	this.processing = false;
     } else {
     	this.messageClass = 'alert alert-success';
     	this.message = data.message;
     	}
       setTimeout(() => {
        this.router.navigate(['/something']); // Redirect to login view
        }, 2000);
     });
  }

  ngOnInit() {
    // Get profile username on page load
  	  this.authService.getProfile().subscribe(profile => {
      this.username = profile.user.username; // Used when creating new blog posts and comments
      this.userId = profile.user._id;
    });
  }
}
