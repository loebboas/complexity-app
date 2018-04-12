import { Component, OnInit, ViewEncapsulation } from '@angular/core';
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
export class NavbarComponent implements OnInit {
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
  contexts: Thought[];

  //Messages
  messageClass;
  message;


constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    public dataService: DataService,
    public authService: AuthService,
    public internalService: InternalService
  ) {
    //Autocomplete
    this.thoughtCtrl = new FormControl();
    this.filteredThoughts = this.thoughtCtrl.valueChanges
      .pipe(
        startWith(''),
        map(thought => thought ? this.filterThoughts(thought) : this.thoughts.slice())
      );

  }

  filterThoughts(label: string) {
    return this.thoughts.filter(thought =>
      thought.label.toLowerCase().indexOf(label.toLowerCase()) === 0);
    }
  
    onChangeView() {
      if(this.selectedThought.showAs == "grid") { this.selectedThought.showAs = "card" }
      else {this.selectedThought.showAs = "grid"};
      
      this.internalService.changeShowAs(this.selectedThought);
    }

  // Loggout
  onLogoutClick() {
    this.authService.logout(); // Logout user
    this.router.navigate(['/']); // Navigate back to home page
  }

  selectThought(thought): void {
    this.router.navigate(['../viewer/', thought._id]);
          this.internalService.changeThought(thought);
  }

  ngOnInit() {
  //GET USER Data
  this.authService.getProfile().subscribe(profile => {
  this.username = profile.user.username; // Used when creating new blog posts and comments
  this.userId = profile.user._id;
  });
  
  //GET THOUGHTS
  this.internalService.loadThoughts();
  this.internalService.thoughtObs.subscribe(res => this.thoughts = res);
  this.internalService.selThoughtObs.subscribe(res => this.selectedThought = res);
  this.internalService.selContextObs.subscribe(res => this.contexts = res);

  //HELPER: Get Memories, Plans and MyRoom ID
  this.dataService.getThoughtByName("Complexity-App").subscribe(data => {
    this.compApp = data.thought;
    this.internalService.changeThought(data.thought)
  }
    
    );

}


  




}