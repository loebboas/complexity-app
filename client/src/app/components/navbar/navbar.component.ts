import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { AuthService } from '../../services/auth.service';
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
  activeSession = { value: "no Session found", _id: undefined };

constructor(

    public dataService: DataService,
    public authService: AuthService,
    private router: Router,
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

 
  getThoughtByName(value) {
  this.dataService.getThoughtByName(value).subscribe(data => {
  this.searchByName = 
              {
              value: data.thought.value,
              _id: data.thought._id,
              };
  });
  }
  // Function to logout user
  onLogoutClick() {
    this.authService.logout(); // Logout user
    this.router.navigate(['/']); // Navigate back to home page
  }


  searchSubmit() {
  this.searchValue = this.form.get('search').value;
  this.getThoughtByName(this.searchValue);
  this.router.navigate(['../favorites/', this.searchByName._id]); // Navigate back to home page
   }


  ngOnInit() {
  this.authService.getProfile().subscribe(profile => {
  this.username = profile.user.username; // Used when creating new blog posts and comments
  this.userId = profile.user._id;
  });
}




}