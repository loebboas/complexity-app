import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormBuilder, Validators } from '@angular/forms';
import { AuthService } from '../../services/auth.service';
import { DataService } from '../../services/data.service';
import { Location } from '@angular/common';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-myroom',
  templateUrl: './myroom.component.html',
  styleUrls: ['./myroom.component.css']
})
export class MyroomComponent implements OnInit {
	messageClass;
	message;
	chosenThought;
	chosenPerspective;
	meanings;
	contexts;
	perspectives;


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

	 this.createNewMidForm(); // Create new  form on start up
	 this.createNewBotForm(); // Create new  form on start up
  	 this.createNewTopForm(); // Create new  form on start up
	 this.createNewLeftForm(); // Create new  form on start up
  	 this.createNewRightForm(); // Create new  form on start up
  	 this.createNewTopRightForm(); // Create new  form on start up
  	 }
  	   // Function to create new blog form
	createNewMidForm() {
    this.formMid = this.formBuilder.group({
       edit: ''
     })
  }

  createNewBotForm() {
    this.formBot = this.formBuilder.group({
       value: ''
     })
  }

    createNewTopRightForm() {
    this.formTopRight = this.formBuilder.group({
       value: ''
     })
  }

  createNewTopForm() {
    this.formTop = this.formBuilder.group({
       value: ''
     })
  }

  createNewLeftForm() {
    this.formLeft = this.formBuilder.group({
       value: ''
     })
  }
    createNewRightForm() {
    this.formRight = this.formBuilder.group({
       value: ''
     })
  }

  EditMid() {
  	if(this.editMid == false) {
  		this.editMid = true;
  	} else {
  		this.editMid = false;
  	}
  }

  	onKeyupLeft(searchText: string) {
  		  console.log(searchText);
    this.getThoughtByName(searchText); // Get all blogs on component loa
   console.log(this.thoughtByName.value);
  	}
onKeyupRight(searchText: string) {
  		  console.log(searchText);
    this.getThoughtByName(searchText); // Get all blogs on component loa
   console.log(this.thoughtByName.value);
  	}
onKeyupTop(searchText: string) {
  		  console.log(searchText);
    this.getThoughtByName(searchText); // Get all blogs on component loa
   console.log(this.thoughtByName.value);
  	}
onKeyupBot(searchText: string) {
  		  console.log(searchText);
    this.getThoughtByName(searchText); // Get all blogs on component loa
   console.log(this.thoughtByName.value);
  	}
  	onKeyupTopRight(searchText: string) {
  		  console.log(searchText);
    this.getThoughtByName(searchText); // Get all blogs on component loa
   console.log(this.thoughtByName.value);
  	}


  	


onBotSubmit() {
	 	
	this.formBot.reset();
}



// Functionality: NewThought(Bot/Top), NotAddLink(Both/One//Top/Bot), EditThought(Bot/Mid/Top), NotDeleteSingleLink(Bot/Top), DeleteBothLink, DeleteThought(Top/Mid/Bot)


	  	// Reload Thought Lvl 0
	  	reloadThoughts(id) {
		this.getMidThought(id)
	   
	   	
					  	console.log(this.thoughtMid._id);
	    this.editMid = false;
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

  		//Update Thought
	    updateThoughtSubmit() {
	      const thought = {
	    	editValue: this.formMid.get('edit').value, // E-mail input field
	      	_id: this.thoughtMid._id
	    };
	    this.processing = true; // Lock form fields	
	    // Function to send blog object to backend
	    this.dataService.editThought(thought).subscribe(data => {
	      // Check if PUT request was a success or not
	      if (!data.success) {
	        this.messageClass = 'alert alert-danger'; // Set error bootstrap class
	        this.message = data.message; // Set error message
	        this.processing = false; // Unlock form fields
	      } else {
	        this.messageClass = 'alert alert-success'; // Set success bootstrap class
	        this.message = data.message; // Set success message
	        // After two seconds, navigate back to blog page
	        this.reloadThoughts(this.thoughtMid._id);
	        this.editMid == false;
	      }
	    });
	  	}
  		
  		deleteThought(id) {
  			this.dataService.deleteThought(id).subscribe(data => {
  				     // Check if PUT request was a success or not
				      if (!data.success) {
				        this.messageClass = 'alert alert-danger'; // Set error bootstrap class
				        this.message = data.message; // Set error message
				        this.processing = false; // Unlock form fields
				      } else {
				        this.messageClass = 'alert alert-success'; // Set success bootstrap class
				        this.message = data.message; // Set success message
				        // After two seconds, navigate back to blog page
				     
				      }
  			});
  		}

  			deleteLink(id) {
  			this.dataService.deleteThought(id).subscribe(data => {
  				     // Check if PUT request was a success or not
				      if (!data.success) {
				        this.messageClass = 'alert alert-danger'; // Set error bootstrap class
				        this.message = data.message; // Set error message
				        this.processing = false; // Unlock form fields
				      } else {
				        this.messageClass = 'alert alert-success'; // Set success bootstrap class
				        this.message = data.message; // Set success message
				        // After two seconds, navigate back to blog page
				     
				      }
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
				this.dataService.getThoughtByName("My-Room").subscribe(data => {
	  				this.chosenThought = data.thought;
					  this.chosenPerspective = data.thought;      
					  this.contexts = data.thought.contexts;
					  this.perspectives = data.thought.perspectives; 
					  this.meanings = data.thought.meanings;

						  console.log(this.chosenThought);
						  console.log(this.contexts);
						  console.log(this.perspectives);
						  console.log(this.meanings);

					// Load 

	  			});
	  		} else {
	  			this.reloadThoughts(this.currentUrl.id)
	  		}
	  		
  			
	    }
}
