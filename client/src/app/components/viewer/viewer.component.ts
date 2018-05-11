import { Component, OnInit, Input, AfterContentInit } from '@angular/core';
import { Thought } from '../../models/thought';
import { DataService } from '../../services/data.service';
import { InternalService } from '../../services/internal.service';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';
import { User } from '../../models/user';



@Component({
  selector: 'app-viewer',
  templateUrl: './viewer.component.html',
  styleUrls: ['./viewer.component.css']
})
export class ViewerComponent implements OnInit {
  user: User;
  personas: any;
  selectedThought: Thought;
  contexts: Thought[];
  contents: Thought[];
  context: Thought;
  siblings: Thought[];
  username: String;
  userId: String;;
  starterId: String;
  idCounter: 5;


   constructor(private dataService: DataService,
               private internalService: InternalService,
               private router: Router,
              private authService: AuthService) { }

    changeTool(tool: String) {
      this.internalService.changeTool(tool);
    }

   selectThought(id): void {
    this.router.navigate(['viewer/', id]);
      this.internalService.changeThought(id);  
  }

   ngOnInit() {
    this.authService.getProfile().subscribe(profile => {
    console.log(profile);
      //GET THOUGHTS 
     
    this.internalService.selectedThoughtObs.subscribe(res => this.selectedThought = res);

  });
        // create an array with nodes
 


    }
    
}
