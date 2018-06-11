import { Component, OnInit } from '@angular/core';
import { InternalService } from '../../services/internal.service';
import { Thought } from '../../models/thought';
import { Perspective } from '../../models/perspective';

@Component({
  selector: 'app-middlebar',
  templateUrl: './middlebar.component.html',
  styleUrls: ['./middlebar.component.css']
})
export class MiddlebarComponent implements OnInit {
  selectedContext: Thought;
  selectedThought: Thought;
  selectedPerspective: Perspective;
  lastPerspectives: Perspective[] = [];
  constructor(private internalService: InternalService) { }

  ngOnInit() {
    this.internalService.selectedContextObs.subscribe(context => this.selectedContext = context);
    
    this.internalService.selectedThoughtObs.subscribe(thought => this.selectedThought = thought);
    
    this.internalService.selectedPerspectiveObs.subscribe(perspective => {
      this.selectedPerspective = perspective;
      this.lastPerspectives.push(perspective);
    });
  }

}
