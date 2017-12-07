import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { FlashMessagesService } from 'angular2-flash-messages';
import { FormControl, FormGroup, FormBuilder, Validators } from '@angular/forms';
import { DataService } from '../../services/data.service';
import { Location } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class NavbarComponent implements OnInit {
  messageClass;
  message;
  username;
  userId;
  allThought;
  searchTerm;
  searchByName;
  fountThoughtByName = false;
  form;
  searchValue;
  allSessionThought;
  activeSession;

constructor(

    public dataService: DataService,
    public authService: AuthService,
    private router: Router,
    private flashMessagesService: FlashMessagesService,
    private formBuilder: FormBuilder

  ) {
  this.createNewForm(); // Create new  form on start up
  }

    createNewForm() {
    this.form = this.formBuilder.group({
       search: ''
     })
  }

  onKeyupNav(searchText: string) {
    this.getThoughtByName(searchText); // Get all blogs on component loa
    console.log(this.searchByName.value);
    }

    changeActiveSession(id) {
      this.dataService.getSingleThought(id).subscribe(data => {
      this.activeSession = {
         _id: data.thought._id,
         value: data.thought.value
      }
    });
      console.log(this.activeSession.value);
    }

    getThoughtByName(value) {
  // Function to GET all blogs from database
  this.dataService.getThoughtByName(value).subscribe(data => {
  this.searchByName = 
              {
              value: data.thought.value,
              _id: data.thought._id,
              };
  });
  }

  getSession() {
    // Function to GET all blogs from database
    this.dataService.getSession().subscribe(data => {
    this.allSessionThought = data.sessionThoughts;
    const last_element = this.allSessionThought[this.allSessionThought.length - 1];
    this.activeSession = last_element;
    });
  }
  
  getAllThought() {
  // Function to GET all blogs from database
  this.dataService.getAllThought().subscribe(data => {
  this.allThought = data.thought; // Assign array to use in HTML
  });
  }
  // Function to logout user
  onLogoutClick() {
    this.authService.logout(); // Logout user
    this.flashMessagesService.show('You are logged out', { cssClass: 'alert-info' }); // Set custom flash message
    this.router.navigate(['/']); // Navigate back to home page
  }


  searchSubmit() {
  this.searchValue = this.form.get('search').value;
  this.getThoughtByName(this.searchValue);
  this.router.navigate(['../something/', this.searchByName._id]); // Navigate back to home page
   }


  ngOnInit() {
    this.form.reset();
  this.getAllThought();
  this.getSession();

  this.authService.getProfile().subscribe(profile => {
  this.username = profile.user.username; // Used when creating new blog posts and comments
  this.userId = profile.user._id;
  });
}




}