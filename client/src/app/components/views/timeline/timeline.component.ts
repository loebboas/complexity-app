import { Component, OnInit } from '@angular/core';
import { DataSet, Timeline } from 'vis';
import { InternalService } from '../../../services/internal.service';

@Component({
  selector: 'app-timeline',
  templateUrl: './timeline.component.html',
  styleUrls: ['./timeline.component.css']
})
export class TimelineComponent implements OnInit {
// Create a DataSet (allows two way data-binding)
items = new DataSet([]);
options = {};  // Configuration for the Timeline

  constructor(private internalService: InternalService) { }

  ngOnInit() {

    this.internalService.selThoughtObs.subscribe(selectedThought => {
      this.items.clear();
      if(selectedThought){
      selectedThought.dimensions.forEach(dimension => {
        if(dimension.dimtype == "Date") {
          this.items.add( {id: dimension._id, content: selectedThought.label, start: dimension.val})
          } 
      });
      selectedThought.contents.forEach(content => {
        content.dimensions.forEach(dimension => {
          if(dimension.dimtype == "Date") {
            this.items.add( {id: dimension._id, content: content.label, start: dimension.val})
          }
        });
      });
 
    }
});

  // DOM element where the Timeline will be attached
  var container = document.getElementById('visualization');

  // Create a Timeline
  var timeline = new Timeline(container, this.items, this.options);
  }

}
