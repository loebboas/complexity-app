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


  	

newLeftLink(id) {

	const leftLink = {
		user: this.userId,
	    scale: this.thoughtMid._id, // E-mail input field
	    thought: this.thoughtByName._id, // E-mail input field
	    type: "before"
	    };
	const rightLink = {
		user: this.userId,
	    scale: this.thoughtByName._id,
	    thought: this.thoughtMid._id,
	    type: "after"
	    };

		this.dataService.newLink(rightLink).subscribe(data => {
	    this.dataService.newLink(leftLink).subscribe(data => {
	    	this.saveLink = data.newId;
		        
	    
	    this.reloadThoughts(this.thoughtMid._id)
		});
		});
		this.formLeft.reset();
	    this.thoughtByName = ''
}


onLeftSubmit() {
	 	const thought = {
	 	value: this.formLeft.get('value').value, // E-mail input field
      	user: this.userId,
      	privacy: "private"
    	};
	    
	    this.dataService.newThought(thought).subscribe(data => {
       	this.saveId = data.newId;

	    
	    const rightLink = {
		user: this.userId,
	    scale: this.saveId,
	    thought: this.thoughtMid._id,
	    type: "after"
	    };

		const leftLink = {
		user: this.userId,
	    scale: this.thoughtMid._id, // E-mail input field
	    thought: this.saveId, // E-mail input field
	    type: "before"
	    };


		this.dataService.newLink(rightLink).subscribe(data => {
			this.dataService.newLink(leftLink).subscribe(data => {
		       
    	this.reloadThoughts(this.thoughtMid._id)
    	});
		});
		});
	this.formLeft.reset();
}

newRightLink(id) {

	const rightLink = {
		user: this.userId,
	    scale: this.thoughtMid._id, // E-mail input field
	    thought: this.thoughtByName._id, // E-mail input field
	    type: "after"
	    };
	const leftLink = {
		user: this.userId,
	    scale: this.thoughtByName._id, // E-mail input field
	    thought: this.thoughtMid._id, // E-mail input field
	    type: "before"
	    };

		this.dataService.newLink(leftLink).subscribe(data => {
	    this.dataService.newLink(rightLink).subscribe(data => {
	   
	    
	    this.reloadThoughts(this.thoughtMid._id)
		});
		});
		this.formRight.reset();
	    this.thoughtByName = ''
}


onRightSubmit() {
	 	const thought = {
	 	value: this.formRight.get('value').value, // E-mail input field
      	user: this.userId,
      	privacy: "private"
    	};
	    
	    this.dataService.newThought(thought).subscribe(data => {
       	this.saveId = data.newId;

	    
	    const leftLink = {
		user: this.userId,
	    scale: this.saveId, // E-mail input field
	    thought: this.thoughtMid._id, 
	    type: "before"
	    };

		const rightLink = {
		user: this.userId,
	    scale: this.thoughtMid._id, // E-mail input field
	    thought: this.saveId, // E-mail input field
	    type: "after"
	    };


		this.dataService.newLink(leftLink).subscribe(data => {
			this.dataService.newLink(rightLink).subscribe(data => {
		       
    	this.reloadThoughts(this.thoughtMid._id)
    	});
		});
		});
	this.formRight.reset();
}


newTopLink(id) {

	const topLink = {
		user: this.userId,
	    scale: this.thoughtMid._id, 
	    thought: this.thoughtByName._id,
	    type: "context"
	    };
	const botLink = {
		user: this.userId,
	    scale: this.thoughtByName._id, // E-mail input field
	    thought: this.thoughtMid._id, // E-mail input field
	    type: "meaning"
	    };

		this.dataService.newLink(botLink).subscribe(data => {
	    this.dataService.newLink(topLink).subscribe(data => {
	    	
	    this.formTop.reset();
	    this.thoughtByName = ''

	    this.reloadThoughts(this.thoughtMid._id)
		
		});
		});
}


onTopSubmit() {
	 	const thought = {
	 	value: this.formTop.get('value').value, // E-mail input field
      	user: this.userId,
      	privacy: "private"
    	};
	    
	    this.dataService.newThought(thought).subscribe(data => {
       	this.saveId = data.newId;

	    
	    const botLink = {
		user: this.userId,
	    scale: this.saveId, // E-mail input field
	    thought: this.thoughtMid._id, // E-mail input field
	    type: "meaning"
	    };

		const topLink = {
		user: this.userId,
	    scale: this.thoughtMid._id, // E-mail input field
	    thought: this.saveId,
	    type: "context"
	    };


		this.dataService.newLink(botLink).subscribe(data => {
			this.dataService.newLink(topLink).subscribe(data => {
		       
    	this.reloadThoughts(this.thoughtMid._id)
    	
		});
		});
		});
	this.formTop.reset();
}

newTopRightLink(id) {

	const leftLink = {
		user: this.userId,
	    scale: this.thoughtMid._id, // E-mail input field
	    thought: this.thoughtByName._id, // E-mail input field
	    type: "linked"
	    };


		this.dataService.newLink(leftLink).subscribe(data => {
	    	this.saveLink = data.newId;
		        
	    this.formTopRight.reset();
	    this.thoughtByName = ''

	    this.reloadThoughts(this.thoughtMid._id)
		});
}


onTopRightSubmit() {
	 	const thought = {
	 	value: this.formTopRight.get('value').value, // E-mail input field
      	user: this.userId,
      	privacy: "private"
    	};
	    
	    this.dataService.newThought(thought).subscribe(data => {
       	this.saveId = data.newId;

	 

		const leftLink = {
		user: this.userId,
	    scale: this.thoughtMid._id, // E-mail input field
	    thought: this.saveId, // E-mail input field
	    type: "linked"
	    };


		
			this.dataService.newLink(leftLink).subscribe(data => {
		       
    	this.reloadThoughts(this.thoughtMid._id)
    	
		});
		});
	this.formLeft.reset();
}


newBotLink(id) {

	const botLink = {
		user: this.userId,
	    scale: this.thoughtMid._id, // E-mail input field
	    thought: this.thoughtByName._id,
	    type: "meaning"
	    };
	const topLink = {
		user: this.userId,
	    scale: this.thoughtByName._id, // E-mail input field
	    thought: this.thoughtMid._id,
	    type: "context"
	    };

		this.dataService.newLink(topLink).subscribe(data => {
	    this.dataService.newLink(botLink).subscribe(data => {
	    	
	    this.formBot.reset();
	    this.thoughtByName = ''

	    this.reloadThoughts(this.thoughtMid._id)
		});
		});
}


onBotSubmit() {
	 	const thought = {
	 	value: this.formBot.get('value').value, 
      	user: this.userId,
      	form: "sphere",
      	privacy: "private"
    	};
	    
	    this.dataService.newThought(thought).subscribe(data => {
       	this.saveId = data.newId;

	    
	    const topLink = {
		user: this.userId,
	    scale: this.saveId, 
	    thought: this.thoughtMid._id,
	    type: "context"
	    };

		const botLink = {
		user: this.userId,
	    scale: this.thoughtMid._id,
	    thought: this.saveId, 
	    type: "meaning"
	    };


		this.dataService.newLink(topLink).subscribe(data => {
			this.dataService.newLink(botLink).subscribe(data => {
		       
    	this.reloadThoughts(this.thoughtMid._id)
    	
		});
		});
		});
	this.formBot.reset();
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
