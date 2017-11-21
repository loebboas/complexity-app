import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormBuilder, Validators } from '@angular/forms';
import { AuthService } from '../../services/auth.service';
import { DataService } from '../../services/data.service';
import { Location } from '@angular/common';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-something',
  templateUrl: './something.component.html',
  styleUrls: ['./something.component.css']
})
export class SomethingComponent implements OnInit {
	messageClass;
	message;
	thoughtMid;
	thoughtMidId;
	thoughtTop;
	thoughtBot;
	formBot;
	formTop;
	formMid;
	processing = false;
	username;
 	userId;
	thought;
	value;
	media;
	bot;
	left;
	right;
	top;
	allThought;
	user;
	currentUrl;
	meaning;
	foundThought = false;
	foundTop = false;
	foundBot = false;
	foundLeft = false;
	foundRight = false;
	id;


  constructor(
  	private formBuilder: FormBuilder,
    private authService: AuthService,
	private dataService: DataService,
	private activatedRoute: ActivatedRoute,
	private router: Router
	) {
  	 this.createNewBotForm(); // Create new Meaning form on start up
  	 }
  	   // Function to create new blog form

  createNewBotForm() {
    this.formBot = this.formBuilder.group({
      // Title field
      value: '',
      user: '',
      top: '',
      bot: '',
     })
  }


  // Functionality: NewThought(Bot/Top), NotAddLink(Both/One//Top/Bot), EditThought(Bot/Mid/Top), NotDeleteSingleLink(Bot/Top), DeleteBothLink, DeleteThought(Top/Mid/Bot)
  onNewBot() {
    // Create new Object (Bot) with MidId as Top
    const thought = {
      value: this.formBot.get('value').value, // E-mail input field
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
 

    const linkBot = {
      value: this.formBot.get('value').value, // E-mail input field
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
    }

     });



  ngOnInit() {
	  	this.currentUrl = this.activatedRoute.snapshot.params; // When component loads, grab the id
       	this.dataService.getSingleThought(this.currentUrl.id).subscribe(data => {
      	// Check if GET request was success or not
	    if (!data.success) {
	        this.messageClass = 'alert alert-danger'; // Set bootstrap error class
	        this.message = data.message; // Set error message
	    } else {
	        this.thoughtMid = {
	        	value: data.thought.value,
	        	_id: data.thought._id,
	        	} // Save blog object for use in HTML
	        this.foundThought = true;
	        this.thoughtMidId = this.currentUrl.id;
	    }
	    });
     	// Get profile username on page load
  		this.authService.getProfile().subscribe(profile => {
	    this.username = profile.user.username; // Used when creating new blog posts and comments
	    this.userId = profile.user._id;
	    });
	}	
}
