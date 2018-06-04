import { Component, OnInit } from '@angular/core';
import { InternalService } from '../../services/internal.service';

@Component({
  selector: 'app-middlebar',
  templateUrl: './middlebar.component.html',
  styleUrls: ['./middlebar.component.css']
})
export class MiddlebarComponent implements OnInit {
  selectedContext;
  selectedThought;
  constructor(private internalService: InternalService) { }

  ngOnInit() {
    this.internalService.selectedContextObs.subscribe(context => this.selectedContext = context);
    
    this.internalService.selectedThoughtObs.subscribe(thought => this.selectedThought = thought);
  }

}
