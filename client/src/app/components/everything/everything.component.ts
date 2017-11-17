import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { FormControl, FormGroup, FormBuilder, Validators } from '@angular/forms';
import { AuthService } from '../../services/auth.service';
import { DataService } from '../../services/data.service';

@Component({
  selector: 'app-everything',
  templateUrl: './everything.component.html',
  styleUrls: ['./everything.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class EverythingComponent implements OnInit {
	messageClass;
	message;
	form;
	processing = false;
	username;
	value;
	allThought;
	user;

  constructor(
	private formBuilder: FormBuilder,
    private authService: AuthService,
	private dataService: DataService
  	) {
  	 this.createNewThoughtForm(); // Create new blog form on start up
  	 }
  	   // Function to create new blog form
  createNewThoughtForm() {
    this.form = this.formBuilder.group({
      // Title field
      value: '',
    })
  }

    getAllThought() {
    // Function to GET all blogs from database
    this.dataService.getAllThought().subscribe(data => {
      this.allThought = data.thought; // Assign array to use in HTML
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
