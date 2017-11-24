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
	formLeft;
	formRight;
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
	allLeftThought;
	allRightThought;
	user;
	currentUrl;
	foundThought = false;
	foundTop = false;
	foundBot = false;
	foundLeft = false;
	foundRight = false;
	i;
	allBotThought;
	allTopThought;
	saveBot;
	allThoughtArray;



  constructor(
  	private formBuilder: FormBuilder,
    private authService: AuthService,
	private dataService: DataService,
	private activatedRoute: ActivatedRoute,
	private router: Router
	) {
	 this.createNewBotForm(); // Create new  form on start up
  	 this.createNewTopForm(); // Create new  form on start up
	 this.createNewLeftForm(); // Create new  form on start up
  	 this.createNewRightForm(); // Create new  form on start up
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

  onTopSubmit() {
    // Create new Object (Bot) with MidId as Top
    const thought = {
      value: this.formTop.get('value').value, // E-mail input field
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
		 	   this.reloadThoughts(this.thoughtMidId);
		       }
	    	});
	});
}

onLeftSubmit() {
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
 			   this.reloadThoughts(this.thoughtMidId);
		       }
	    	});
	});
}

onRightSubmit() {
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
	    right: this.thoughtMid._id // E-mail input field
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
			   this.reloadThoughts(this.thoughtMidId);
		       }
	    	});
	});

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
		       this.reloadThoughts(this.thoughtMidId);
	    	});
	});
    
}
	  // Reload blogs on current page
	   	reloadThoughts(id) {
	    this.loadingLink = true; // Used to lock button
	    this.getMidThought(id);
	   	this.getBotThought(id);
	   	this.getTopThought(id);
	   	this.getLeftThought(id);
	   	this.getRightThought(id);
	    setTimeout(() => {
	    this.loadingLink = false; // Release button lock after four seconds
	    });
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
		        	this.thoughtMidId = this.currentUrl.id;
		        this.foundThought = true;
		    }
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
