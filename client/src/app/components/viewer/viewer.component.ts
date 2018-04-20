import { Component, OnInit, Input, AfterContentInit } from '@angular/core';
import { Thought } from '../../models/thought';
import { DataService } from '../../services/data.service';
import { InternalService } from '../../services/internal.service';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';



@Component({
  selector: 'app-viewer',
  templateUrl: './viewer.component.html',
  styleUrls: ['./viewer.component.css']
})
export class ViewerComponent implements OnInit {
  selectedThought: Thought;
  contexts: Thought[];
  contents: Thought[];
  context: Thought;
  siblings: Thought[];
  username;
  userId;
  starterId;
  

   constructor(private dataService: DataService,
               private internalService: InternalService,
               private router: Router,
              private authService: AuthService) { }


           


   selectThought(thought): void {
    this.router.navigate(['viewer/', thought._id]);
      this.internalService.changeThought(thought._id);  
  }

   ngOnInit() {
    this.authService.getProfile().subscribe(profile => {
      this.username = profile.user.username; // Used when creating new blog posts and comments
      this.userId = profile.user._id;
      this.starterId = profile.user.starter;
    
      //GET THOUGHTS
      this.internalService.changeThought(this.starterId); 
     });
    this.internalService.selThoughtObs.subscribe(res => this.selectedThought = res);
    this.internalService.selContentsObs.subscribe(res => this.contents = res);
    this.internalService.selContextObs.subscribe(res => this.context = res);
    this.internalService.selContextsObs.subscribe(res => this.contexts = res);
    this.internalService.selSiblingsObs.subscribe(res => this.siblings = res);
    }
    
}
