import { Component, OnInit, Input, AfterContentInit } from '@angular/core';
import { Thought } from '../../models/thought';
import { DataService } from '../../services/data.service';
import { InternalService } from '../../services/internal.service';
import { Router } from '@angular/router';
import { Content } from '../../models/Content';

@Component({
  selector: 'app-viewer',
  templateUrl: './viewer.component.html',
  styleUrls: ['./viewer.component.css']
})
export class ViewerComponent implements AfterContentInit {
  selectedThought: Thought;
  contents: Content[];
   constructor(private dataService: DataService,
               private internalService: InternalService,
               private router: Router) { }

   selectThought(thought): void {
    this.router.navigate(['../viewer/', thought._id]);
      this.internalService.changeThought(thought);  
    
  }

   ngAfterContentInit() {
    this.internalService.loadThoughts();
    this.internalService.selThoughtObs.subscribe(res => this.selectedThought = res);
    this.internalService.selContentObs.subscribe(res => this.contents = res);
   
   

    

    }
    
}
