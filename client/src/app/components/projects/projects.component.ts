import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormBuilder, Validators } from '@angular/forms';
import { AuthService } from '../../services/auth.service';
import { DataService } from '../../services/data.service';
import { Location } from '@angular/common';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent implements OnInit {
	messageClass;
	message;
	thoughtMid;
	thoughtTop;
	thoughtBot;
	thoughtTopRight;
	formBot;
	formTop;
	formLeft;
	formRight;
	formMid;
	formTopRight;
	processing = false;
	username;
 	userId;
	thought;
	value;
	edit;
	loadingLink;
	allThought;
	user;
	currentUrl;
	foundThought = false;
	foundTop = false;
	foundBot = false;
	foundLeft = false;
	foundRight = false;
	allBotThought;
	allTopThought;
	saveId;
	saveLink;
	allThoughtArray;
	editMid = false;
	thoughtByName;
	allTopThought1;
	allSessionThought;
	sessionThought;
	activeSession;
	allLinks;
	botLinks;
	activeThought;


  constructor(
  	private formBuilder: FormBuilder,
    private authService: AuthService,
	private dataService: DataService,
	private activatedRoute: ActivatedRoute,
	private router: Router
	) {

	}

// Functionality: NewThought(Bot/Top), NotAddLink(Both/One//Top/Bot), EditThought(Bot/Mid/Top), NotDeleteSingleLink(Bot/Top), DeleteBothLink, DeleteThought(Top/Mid/Bot)


	  	// Reload Thought Lvl 0
	  	reloadThoughts(id) {
		this.getMidThought(id)
	   	this.getLinksOfThought(id)
	   	 	console.log(this.allLinks);
					  	console.log(this.thoughtMid._id);
	    this.editMid = false;
	  	}

	  	  	// Reload BotThought Lvl 1
	  	reloadThoughtsBot(id) {
	  	this.dataService.getSingleThought(id).subscribe(data => {
	      	// Check if GET request was success or not
		    if (!data.success) {
		        this.messageClass = 'alert alert-danger'; // Set bootstrap error class
		        this.message = data.message; // Set error message
		    } else {
		        this.activeThought = {
		        	value: data.thought.value,
		        	_id: data.thought._id,
		        	}; // Save blog object for use in HTML
		        this.foundThought = true;
		        	this.dataService.getLinksOfThought(id).subscribe(data => {
	  				this.botLinks = data.allLinks;
	  			});
		    }
		    });
	   	
	   	console.log(this.allLinks);
		console.log(this.thoughtMid._id);
	    this.editMid = false;
	  	}

		getLinksOfThought(id) {
	  	// Function to GET all blogs from database
	  	this.dataService.getLinksOfThought(id).subscribe(data => {
	  	this.allLinks = data.allLinks;
	  	});
	  	}

	  	getMidThought(id) {
 		 	this.dataService.getSingleThought(id).subscribe(data => {
	      	// Check if GET request was success or not
		    if (!data.success) {
		        this.messageClass = 'alert alert-danger'; // Set bootstrap error class
		        this.message = data.message; // Set error message
		    } else {
		        this.thoughtMid = {
		        	value: data.thought.value,
		        	_id: data.thought._id,
		        	}; // Save blog object for use in HTML
		        this.foundThought = true;
		    }
		    });
	  	}

	  	getThoughtByName(value) {
  		// Function to GET all blogs from database
  		this.dataService.getThoughtByName(value).subscribe(data => {
  		this.thoughtByName = 
              {
              value: data.thought.value,
              _id: data.thought._id,
              };
  		});
  		}



	 ngOnInit() {

	 	//Load Data
	  	this.currentUrl = this.activatedRoute.snapshot.params; // When component loads, grab the id
	  	console.log(this.currentUrl)
	  	this.authService.getProfile().subscribe(profile => {
		    this.username = profile.user.username; // Used when creating new blog posts and comments
		    this.userId = profile.user._id;
			}); 
	  		

	  		if(!this.currentUrl.id) { 
				this.dataService.getThoughtByName("Projects").subscribe(data => {
	  				this.thoughtMid = 
			              {
			              value: data.thought.value,
			              _id: data.thought._id,
			              };
	  				this.dataService.getLinksOfThought(this.thoughtMid._id).subscribe(data => {
					  	this.allLinks = data.allLinks;
					  	console.log(this.allLinks);
					  	console.log(this.thoughtMid._id);
					  	});

	  			});
	  		} else {
	  			this.reloadThoughts(this.currentUrl.id)
	  		}
	  		
  			
	    }
}
