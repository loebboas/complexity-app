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
	thoughtTop;
	thoughtBot;
	formBot;
	formTop;
	formLeft;
	formRight;
	formMid;
	processing = false;
	username;
 	userId;
	thought;
	value;
	edit;
	loadingLink;
	allThought;
	allBotLink;
	allBotValue;
	allLeftThought;
	allRightThought;
	user;
	currentUrl;
	foundThought = false;
	foundTop = false;
	foundBot = false;
	foundLeft = false;
	foundRight = false;
	allBotThought;
	allTopThought;
	saveBot;
	allThoughtArray;
	editMid = false;
	thoughtByName;
	allTopThought1;



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

    onKeyup(searchText: string) {
    this.getThoughtByName(searchText); // Get all blogs on component load
    console.log(this.thoughtByName.value);
  }

    updateThoughtSubmit() {
      const thought = {
    	edit: this.formMid.get('edit').value, // E-mail input field
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



onLeftSubmit() {
	if(this.thoughtByName) {
    	const leftLink = {
		user: this.userId,
	    mid: this.thoughtMid._id, // E-mail input field
	    left: this.thoughtByName._id // E-mail input field
	    };
	    const rightLink = {
		user: this.userId,
	    mid: this.thoughtByName._id, // E-mail input field
	    right: this.thoughtMid._id // E-mail input field
	    };
	        this.dataService.newLeftLink(leftLink).subscribe(data => {
	    if (!data.success) {
	       this.messageClass = 'alert alert-danger';
	       this.message = data.message;
	       this.processing = false;
	    } else {
	       this.messageClass = 'alert alert-success';
	       this.message = data.message;
	    }
	    });
	    this.dataService.newRightLink(rightLink).subscribe(data => {
		    if (!data.success) {
		       this.messageClass = 'alert alert-danger';
		       this.message = data.message;
		       this.processing = false;
		    } else {
		       this.messageClass = 'alert alert-success';
		       this.message = data.message;
		 	   this.reloadThoughts(this.thoughtMid._id);
		       }
	    	});
    } else {
    // Create new Object (Bot) with MidId as Top
    const thought = {
      value: this.formLeft.get('value').value, // E-mail input field
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
       const leftLink = {
		user: this.userId,
	    mid: this.thoughtMid._id, // E-mail input field
	    left: this.saveBot // E-mail input field
	    };
	    const rightLink = {
		user: this.userId,
	    mid: this.saveBot, // E-mail input field
	    right: this.thoughtMid._id // E-mail input field
	    };

	    this.dataService.newLeftLink(leftLink).subscribe(data => {
	    if (!data.success) {
	       this.messageClass = 'alert alert-danger';
	       this.message = data.message;
	       this.processing = false;
	    } else {
	       this.messageClass = 'alert alert-success';
	       this.message = data.message;
	    }
	    });
	    this.dataService.newRightLink(rightLink).subscribe(data => {
		    if (!data.success) {
		       this.messageClass = 'alert alert-danger';
		       this.message = data.message;
		       this.processing = false;
		    } else {
		       this.messageClass = 'alert alert-success';
		       this.message = data.message;
 			   this.reloadThoughts(this.thoughtMid._id);
		       }
	    	});
	});
}
this.formLeft.reset();
	this.thoughtByName = '';
}

onRightSubmit() {
	if(this.thoughtByName) {
    	const rightLink = {
		user: this.userId,
	    mid: this.thoughtMid._id, // E-mail input field
	    right: this.thoughtByName._id // E-mail input field
	    };
	    const leftLink = {
		user: this.userId,
	    mid: this.thoughtByName._id, // E-mail input field
	    left: this.thoughtMid._id // E-mail input field
	    };
	        this.dataService.newRightLink(rightLink).subscribe(data => {
	    if (!data.success) {
	       this.messageClass = 'alert alert-danger';
	       this.message = data.message;
	       this.processing = false;
	    } else {
	       this.messageClass = 'alert alert-success';
	       this.message = data.message;
	    }
	    });
	    this.dataService.newLeftLink(leftLink).subscribe(data => {
		    if (!data.success) {
		       this.messageClass = 'alert alert-danger';
		       this.message = data.message;
		       this.processing = false;
		    } else {
		       this.messageClass = 'alert alert-success';
		       this.message = data.message;
		 	   this.reloadThoughts(this.thoughtMid._id);
		       }
	    	});
    } else {
    // Create new Object (Bot) with MidId as Top
    const thought = {
      value: this.formRight.get('value').value, // E-mail input field
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
       const rightLink = {
		user: this.userId,
	    mid: this.thoughtMid._id, // E-mail input field
	    right: this.saveBot // E-mail input field
	    };
	    const leftLink = {
		user: this.userId,
	    mid: this.saveBot, // E-mail input field
	    left: this.thoughtMid._id // E-mail input field
	    };

	    this.dataService.newRightLink(rightLink).subscribe(data => {
	    if (!data.success) {
	       this.messageClass = 'alert alert-danger';
	       this.message = data.message;
	       this.processing = false;
	    } else {
	       this.messageClass = 'alert alert-success';
	       this.message = data.message;
	    }
	    });
	    this.dataService.newLeftLink(leftLink).subscribe(data => {
		    if (!data.success) {
		       this.messageClass = 'alert alert-danger';
		       this.message = data.message;
		       this.processing = false;
		    } else {
		       this.messageClass = 'alert alert-success';
		       this.message = data.message;
			   this.reloadThoughts(this.thoughtMid._id);	
		       }
	    	});
	});
}
this.formRight.reset();
	this.thoughtByName = '';
}

  onTopSubmit() {
    if(this.thoughtByName) {

    	const topLink = {
		user: this.userId,
	    mid: this.thoughtMid._id, // E-mail input field
	    top: this.thoughtByName._id // E-mail input field
	    };
	    const botLink = {
		user: this.userId,
	    mid: this.thoughtByName._id, // E-mail input field
	    bot: this.thoughtMid._id // E-mail input field
	    };
	        this.dataService.newTopLink(topLink).subscribe(data => {
	    if (!data.success) {
	       this.messageClass = 'alert alert-danger';
	       this.message = data.message;
	       this.processing = false;
	    } else {
	       this.messageClass = 'alert alert-success';
	       this.message = data.message;
	    }
	    });
	    this.dataService.newBotLink(botLink).subscribe(data => {
		    if (!data.success) {
		       this.messageClass = 'alert alert-danger';
		       this.message = data.message;
		       this.processing = false;
		    } else {
		       this.messageClass = 'alert alert-success';
		       this.message = data.message;
		 	   this.reloadThoughts(this.thoughtMid._id);
		       }
	    	});
    } else {
    // Create new Object (Bot) with MidId as Top
    const thought = {
      value: this.formTop.get('value').value, // E-mail input field
      user: this.userId,
    };
    // if value = existing value

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
       const topLink = {
		user: this.userId,
	    mid: this.thoughtMid._id, // E-mail input field
	    top: this.saveBot // E-mail input field
	    };
	    const botLink = {
		user: this.userId,
	    mid: this.saveBot, // E-mail input field
	    bot: this.thoughtMid._id // E-mail input field
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
	    this.dataService.newTopLink(topLink).subscribe(data => {
		    if (!data.success) {
		       this.messageClass = 'alert alert-danger';
		       this.message = data.message;
		       this.processing = false;
		    } else {
		       this.messageClass = 'alert alert-success';
		       this.message = data.message;
		 	   this.reloadThoughts(this.thoughtMid._id);
		       }
	    	});
	});
	}
	this.formTop.reset();
	this.thoughtByName = '';
}


  // Functionality: NewThought(Bot/Top), NotAddLink(Both/One//Top/Bot), EditThought(Bot/Mid/Top), NotDeleteSingleLink(Bot/Top), DeleteBothLink, DeleteThought(Top/Mid/Bot)
  onBotSubmit() {
  	if(this.thoughtByName)  {
    	const botLink = {
		user: this.userId,
	    mid: this.thoughtMid._id, // E-mail input field
	    bot: this.thoughtByName._id // E-mail input field
	    };
	    const topLink = {
		user: this.userId,
	    mid: this.thoughtByName._id, // E-mail input field
	    top: this.thoughtMid._id // E-mail input field
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
	    this.dataService.newTopLink(topLink).subscribe(data => {
		    if (!data.success) {
		       this.messageClass = 'alert alert-danger';
		       this.message = data.message;
		       this.processing = false;
		    } else {
		       this.messageClass = 'alert alert-success';
		       this.message = data.message;
		 	   this.reloadThoughts(this.thoughtMid._id);
		       }
	    	});
    } else {
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
       const botLink = {
		user: this.userId,
	    mid: this.thoughtMid._id, // E-mail input field
	    bot: this.saveBot // E-mail input field
	    };
	    const topLink = {
		user: this.userId,
	    mid: this.saveBot, // E-mail input field
	    top: this.thoughtMid._id // E-mail input field
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
	    this.dataService.newTopLink(topLink).subscribe(data => {
		    if (!data.success) {
		       this.messageClass = 'alert alert-danger';
		       this.message = data.message;
		       this.processing = false;
		    } else {
		       this.messageClass = 'alert alert-success';
		       this.message = data.message;
		       }
		       this.reloadThoughts(this.thoughtMid._id);
	    	});
	});
    }
    this.formBot.reset();
    	this.thoughtByName = '';
}
	  // Reload blogs on current page
	   	reloadThoughts(id) {
	    this.loadingLink = true; // Used to lock button
	    this.getMidThought(id);
	   	this.getBotThought(id);
	   	this.getTopThought(id);
	   	this.getLeftThought(id);
	   	this.getRightThought(id);
	    this.editMid = false;
	  	}

	  		   	reloadThoughts1(id) {
	    this.allTopThought1 = this.allTopThought;  
	    this.getMidThought(id);
	   	this.getBotThought(id);
	   	this.getTopThought(id);
	   	this.getLeftThought(id);
	   	this.getRightThought(id);
	    this.editMid = false;
	  	}
	 	
	 	getBotThought(id) {
	  	// Function to GET all blogs from database
	  	this.dataService.getBotThought(id).subscribe(data => {
	  	this.allBotThought = data.botThoughts;
	  	});
	  	}

	  	getLeftThought(id) {
	  	// Function to GET all blogs from database
	  	this.dataService.getLeftThought(id).subscribe(data => {
	  	this.allLeftThought = data.leftThoughts;
	  	});
	  	}

	  	getRightThought(id) {
	  	// Function to GET all blogs from database
	  	this.dataService.getRightThought(id).subscribe(data => {
	  	this.allRightThought = data.rightThoughts;
	  	});
	  	}

	  	getTopThought(id) {
	  	// Function to GET all blogs from database
	  	this.dataService.getTopThought(id).subscribe(data => {
	  	this.allTopThought = data.topThoughts;
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
	  	this.currentUrl = this.activatedRoute.snapshot.params; // When component loads, grab the id
	  	    // Get profile username on page load
	       	this.getMidThought(this.currentUrl.id)
	       	this.getBotThought(this.currentUrl.id)
	  		this.getTopThought(this.currentUrl.id)	  		
	  		this.getLeftThought(this.currentUrl.id)
	  		this.getRightThought(this.currentUrl.id)
	  		this.authService.getProfile().subscribe(profile => {
		    this.username = profile.user.username; // Used when creating new blog posts and comments
		    this.userId = profile.user._id;
		  	}); 
	    
	    }
}
