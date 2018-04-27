import { Component, OnInit } from '@angular/core';
import { DataService } from '../../../services/data.service';
import { InternalService } from '../../../services/internal.service';
import { Thought } from '../../../models/thought';

@Component({
  selector: 'app-delete',
  templateUrl: './delete.component.html',
  styleUrls: ['./delete.component.css']
})
export class DeleteComponent implements OnInit {
  selectedThought: Thought;
  constructor(private dataService: DataService,
  private internalService: InternalService) { }

  deleteThought(id) {
    //Delete the Thought
    this.dataService.deleteThought(id).subscribe(data => {
      this.internalService.changeThought(this.selectedThought.contexts[0]._id);
      this.internalService.changeTool("none");
    });
  }

  ngOnInit() {
    this.internalService.selThoughtObs.subscribe(res => this.selectedThought = res);
  }
  
   
}
