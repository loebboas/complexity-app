import { Component, OnInit, Input } from '@angular/core';
import { Thought } from '../../../../models/thought';
import { InternalService } from '../../../../services/internal.service';

@Component({
  selector: 'app-grid-grid',
  templateUrl: './grid-grid.component.html',
  styleUrls: ['./grid-grid.component.css']
})
export class GridGridComponent implements OnInit {
  @Input() thought: Thought;
  constructor(private internalService: InternalService) { }

  gotoThought(id){
    this.internalService.changeThought(id);
  }
  ngOnInit() {
  }

}
