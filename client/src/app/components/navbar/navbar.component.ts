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
  thoughtByName;
  fountThoughtByName = false;
  form;


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

  onKeyup(searchText: string) {
    this.getThoughtByName(searchText); // Get all blogs on component load
  }




  ngOnInit() {

  this.authService.getProfile().subscribe(profile => {
  this.username = profile.user.username; // Used when creating new blog posts and comments
  this.userId = profile.user._id;
  });
}

}