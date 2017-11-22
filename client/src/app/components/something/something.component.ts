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
	loadingLink;
	allThought;
	allBotLink;
	allBotValue;
	user;
	currentUrl;
	foundThought = false;
	foundTop = false;
	foundBot = false;
	foundLeft = false;
	foundRight = false;
	i;
	allBotThought;
	allBotThought2;
	saveBot;
	allThoughtArray;

	

  constructor(
  	private formBuilder: FormBuilder,
    private authService: AuthService,
	private dataService: DataService,
	private activatedRoute: ActivatedRoute,
	private router: Router
	) {
	 this.createNewBotForm(); // Create new Meaning form on start up
  	 this.createNewTopForm(); // Create new Meaning form on start up
  	 }
  	   // Function to create new blog form

  createNewBotForm() {
    this.formBot = this.formBuilder.group({
       value: ''
     })
  }

  createNewTopForm() {
    this.formTop = this.formBuilder.group({
       value: ''
     })
  }

  // Functionality: NewThought(Bot/Top), NotAddLink(Both/One//Top/Bot), EditThought(Bot/Mid/Top), NotDeleteSingleLink(Bot/Top), DeleteBothLink, DeleteThought(Top/Mid/Bot)
  onBotSubmit() {
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
       this.saveBot = data.newId;
       }
	});
	
	const botLink = {
		user: this.userId,
	    mid: this.thoughtMid._id, // E-mail input field
	    bot: this.saveBot // E-mail input field
	    };
		
	    this.dataService.newBotLink(botLink).subscribe(data => {
	     if (!data.success) {
	       this.messageClass = 'alert alert-danger';
	       this.message = data.message;
	       this.processing = false;
	     } else {
	       this.messageClass = 'alert alert-success';
	       this.message = data.message;
	       }
	    });
	    
    	
}
	  // Reload blogs on current page
  	reloadBotLink() {
    this.loadingLink = true; // Used to lock button
    // Add any new blogs to the page
    setTimeout(() => {
      this.loadingLink = false; // Release button lock after four seconds
    }, 4000);
  }
	 getAllThought() {
	  	// Function to GET all blogs from database
	  	this.dataService.getAllThought().subscribe(data => {
	  	this.allThought = data.thought;
	  	});
	  	}

	  	 getBotThought(id) {
	  	// Function to GET all blogs from database
	  	this.dataService.getBotThought(id).subscribe(data => {
	  	this.allBotThought = data.thought;
	  	});
	  	}

 	ngOnInit() {
	  	this.currentUrl = this.activatedRoute.snapshot.params; // When component loads, grab the id
	  	if (!this.currentUrl.id) {
	  		this.messageClass = 'alert alert-danger'; // Set bootstrap error class
	        this.message = 'Please Provide Something'; // Set error message
	    } else {
	  	
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
		        this.dataService.getBotThought(this.thoughtMid._id).subscribe(data => {
	  			this.allBotThought2 = data.botThought;
	  			console.log(data);
	  			});
		    }
		    });

	   			  	}
     	// Get profile username on page load
  		this.authService.getProfile().subscribe(profile => {
	    this.username = profile.user.username; // Used when creating new blog posts and comments
	    this.userId = profile.user._id;
	    });
  		this.getAllThought()
	  	this.getBotThought(this.currentUrl.id)    
	    }	
}
