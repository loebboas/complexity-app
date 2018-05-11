import { Component, OnInit } from '@angular/core';
import { GridsterConfig, GridsterItem } from 'angular-gridster2';
import { GridsterConfigService } from './gridster-config.service';
import { InternalService } from '../../../services/internal.service';
import { Thought } from '../../../models/thought';

@Component({
  selector: 'app-grid',
  templateUrl: './grid.component.html',
  styleUrls: ['./grid.component.css']
})
export class GridComponent implements OnInit {
selectedThought: Thought;
config: GridsterConfig;
thoughtContents: Thought[];
contents: Thought[];
counter;
  constructor(private gridsterConfigService: GridsterConfigService, private internalService: InternalService) { }
  changedOptions() {
    this.config.api.optionsChanged();
  }

  removeItem(item) {
    this.contents.splice(this.contents.indexOf(item), 1);
  }


  ngOnInit() {
    this.config = this.gridsterConfigService.getConfig();
    this.contents = [];
  
    this.internalService.selectedThoughtObs.subscribe(selectedThought => {
      this.contents = [];
      this.selectedThought = selectedThought;
      if(this.selectedThought.contents.length){
        this.counter = 1;
        this.selectedThought.contents.forEach(content => {
        if(content){
          content.grid = ({ cols: 1, rows: 1, y: 0, x: 0 })
        this.contents.push(content);
      }
        console.log(this.contents);
      });
    }
    
    });
  }
}
