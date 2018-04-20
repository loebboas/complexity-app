import { Component, OnInit, ViewEncapsulation, AfterContentInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { FormControl, FormGroup, FormBuilder, Validators } from '@angular/forms';
import { DataService } from '../../services/data.service';
import { Location } from '@angular/common';
import { Router } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { startWith } from 'rxjs/operators/startWith';
import { map } from 'rxjs/operators/map';
import { Thought } from '../../models/thought';
import { InternalService } from '../../services/internal.service';
import { ChangeTracker } from '../../models/changeTracker';
import { Subject } from 'rxjs/Subject';


@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class NavbarComponent implements AfterContentInit {
  //Autocomplete
  thoughtCtrl: FormControl;
  filteredThoughts: Observable<Thought[]>;
  compApp: Thought;
  //Data
  thoughts: Thought[];
  selectedThought: Thought;
  changeTracker: ChangeTracker[];
  username;
  userId;
  compAppId;
  UnstructuredId;
  starterId: String;


  //Messages
  messageClass;
  message;


constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    public dataService: DataService,
    public authService: AuthService,
    public internalService: InternalService
  ) { }

  onLogoutClick() {
    this.authService.logout(); // Logout user
    this.router.navigate(['/']); // Navigate back to home page
  }

  selectThought(thought): void {
    this.router.navigate(['../viewer/', thought._id]);
          this.internalService.changeThought(thought._id);
  }

  
  ngAfterContentInit() {
  //GET USER Data
  this.authService.getProfile().subscribe(profile => {
  this.username = profile.user.username; // Used when creating new blog posts and comments
  this.userId = profile.user._id;
  this.starterId = profile.user.starter;

  //GET THOUGHTS
  this.internalService.changeThought(this.starterId); 
 });
 
}



  




}