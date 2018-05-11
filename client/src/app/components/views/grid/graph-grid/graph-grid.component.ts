import { Component, OnInit, Input } from '@angular/core';
import { Thought } from '../../../../models/thought';

@Component({
  selector: 'app-graph-grid',
  templateUrl: './graph-grid.component.html',
  styleUrls: ['./graph-grid.component.css']
})
export class GraphGridComponent implements OnInit {

  constructor() { }
@Input() thought: Thought;
  ngOnInit() {
  }

}
