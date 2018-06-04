import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl } from '@angular/forms';
import { Thought } from '../../../models/thought';
import { InternalService } from '../../../services/internal.service';
import { DataService } from '../../../services/data.service';
import { AuthService } from '../../../services/auth.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.scss']
})
export class EditComponent implements OnInit {
  editThought: FormControl;
  selectedThought: Thought;

  constructor(private formBuilder: FormBuilder,
    private internalService: InternalService,
    private dataService: DataService,
    private authService: AuthService,
    private router: Router) {
      this.editThought = new FormControl();
     }

     publish(){
       const editedThought: Thought = this.selectedThought;
       editedThought.public = true;

       this.dataService.editThought(editedThought);
     }

    onEditSubmit() {
      const editThought = {
        _id: this.selectedThought._id,
        editLabel: this.editThought.value
      };
      this.dataService.editThought(editThought).subscribe(data => {
        this.internalService.changeSelectedThought(this.selectedThought._id);
      });
      
    }



  ngOnInit() {
    this.internalService.selectedThoughtObs.subscribe(res => this.selectedThought = res);

  }

}
