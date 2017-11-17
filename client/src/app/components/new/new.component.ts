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
  constructor(
  	private formBuilder: FormBuilder,
  	private authService: AuthService,
  	private dataService: DataService
  	) { 
  	this.createForm();
  }

  createForm() {
  	this.form = this.formBuilder.group({
  		value: '',
  		user: '',
		  linkTo: '', 
		  linkFrom: '', 
		  equals: ''
  	})
  }


    getAllThought() {
    // Function to GET all blogs from database
    this.dataService.getAllThought().subscribe(data => {
      this.allThought = data.thought; // Assign array to use in HTML
    });
  }

 onNewSubmit() {
  	// Create user object form user's inputs
    this.processing = true;    
    const thought = {
      value: this.form.get('value').value, // E-mail input field
      user: this.form.get('user').value, // Username input field
      linkTo: this.form.get('linkTo').value, // Password input field
      linkFrom: this.form.get('linkFrom').value, // Password input field
      equals: this.form.get('equals').value // Password input field
     
    }
    
    this.dataService.newThought(thought).subscribe(data => {
     if (!data.success) {
     	this.messageClass = 'alert alert-danger';
     	this.message = data.message;
     	this.processing = false;
     } else {
     	this.messageClass = 'alert alert-success';
     	this.message = data.message;
     	this.getAllThought();
     	}
     });
  }

  ngOnInit() {
    // Get profile username on page load
  	  this.authService.getProfile().subscribe(profile => {
      this.username = profile.user.username; // Used when creating new blog posts and comments
    });

    this.getAllThought(); // Get all blogs on component load
  }
}
  	