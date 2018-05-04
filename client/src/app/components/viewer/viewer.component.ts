import { Component, OnInit, Input, AfterContentInit } from '@angular/core';
import { Thought } from '../../models/thought';
import { DataService } from '../../services/data.service';
import { InternalService } from '../../services/internal.service';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';
import { SortEvent } from '../../draggable/sortable-list.directive';
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
  
  sort(event: SortEvent) {
    const current = this.contents[event.currentIndex];
    const swapWith = this.contents[event.newIndex];

    this.contents[event.newIndex] = current;
    this.contents[event.currentIndex] = swapWith;
    this.updateThought(this.contents)
    

  }

   constructor(private dataService: DataService,
               private internalService: InternalService,
               private router: Router,
              private authService: AuthService) { }

    changeTool(tool: String) {
      this.internalService.changeTool(tool);
    }
           
    updateThought(sortableList: any[]) {
      //UPDATE CONTENT OF CHOSENTHOUGHT
      const newContent = [];
      sortableList.forEach(element => {
        newContent.unshift(element._id);
      });
      const editContent = {
        _id: this.selectedThought._id,
       editContents: newContent,
        };
   
      this.dataService.editThought(editContent).subscribe(data => {
 
    });
     }

   selectThought(id): void {
    this.router.navigate(['viewer/', id]);
      this.internalService.changeThought(id);  
  }

   ngOnInit() {
    this.authService.getProfile().subscribe(profile => {
    
      //GET THOUGHTS
      this.internalService.changeThought(profile.user.private[0].persona); 
     
    this.internalService.selThoughtObs.subscribe(res => this.selectedThought = res);
    this.internalService.selContentsObs.subscribe(res => this.contents = res);
   
    this.internalService.selContextsObs.subscribe(res => this.contexts = res);
    this.internalService.selSiblingsObs.subscribe(res => this.siblings = res);

    this.internalService.selContextObs.subscribe(res => {  this.context = res;     });
  });
        // create an array with nodes
 


    }
    
}
