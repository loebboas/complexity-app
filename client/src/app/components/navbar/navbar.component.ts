import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { FormControl, FormGroup, FormBuilder, Validators } from '@angular/forms';
import { DataService } from '../../services/data.service';
import { Location } from '@angular/common';
import { Router } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { startWith } from 'rxjs/operators/startWith';
import { map } from 'rxjs/operators/map';
import { Thought } from '../../thought';
import { User } from '../../user';



@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class NavbarComponent implements OnInit {
  thoughtCtrl: FormControl;
  filteredThoughts: Observable<any[]>;
  thoughts = [{"_id":"65654654","label":"Enter Something","user":"5aaaa481a298bf3510fcd0ad","privacy":"private","__v":1,"inputTime":"2018-03-15T16:55:04.222Z","links":[{"_id":"5aaaa4fea298bf3510fcd0b9","linktype":"context","label":"Context"}]}];
  user: User;

  messageClass;
  message;
  username;
  userId;
  allThought;
  
constructor(

    public dataService: DataService,
    public authService: AuthService,
    private router: Router,
    private formBuilder: FormBuilder

  ) {
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
  
  
    gotoThought(id){
      this.router.navigate(['../favorites/', id]);
      this.dataService.getAllThought().subscribe(data => {
      this.thoughts = data.allThought;
      console.log(this.thoughts);
    });
  }

  // Function to logout user
  onLogoutClick() {
    this.authService.logout(); // Logout user
    this.router.navigate(['/']); // Navigate back to home page
  }



  ngOnInit() {
  this.authService.getProfile().subscribe(profile => {
  this.username = profile.user.username; // Used when creating new blog posts and comments
  this.userId = profile.user._id;
  });

  this.dataService.getAllThought().subscribe(data => {
    this.thoughts = data.allThought;
    console.log(this.thoughts);
  });
}




}