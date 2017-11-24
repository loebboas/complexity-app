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
	processing = false;
	username;
  userId;
	value;
	allThought;
	user;
  thought;
  everything;


  constructor(
  private authService: AuthService,
	private dataService: DataService
  	) {}
  	   // Function to create new blog form


  getAllThought() {
  // Function to GET all blogs from database
  this.dataService.getAllThought().subscribe(data => {
  this.allThought = data.thought; // Assign array to use in HTML
  });
  }

  getEverything() {
  // Function to GET all blogs from database
  this.dataService.getEverything().subscribe(data => {
  this.everything = data.everything; // Assign array to use in HTML
  });
  }

  ngOnInit() {
  // Get profile username on page load
  this.authService.getProfile().subscribe(profile => {
  this.username = profile.user.username; // Used when creating new blog posts and comments
  this.userId = profile.user._id;
  });
  this.getEverything(); // Get all blogs on component load
  }
}
