import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { InternalService } from '../../services/internal.service';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';
import { Thought } from '../../models/thought';
import { DataService } from '../../services/data.service';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {
  firstFormGroup: FormGroup;
  selectedThought: Thought;

  constructor(private formBuilder: FormBuilder,
    private internalService: InternalService,
    private dataService: DataService,
    private authService: AuthService,
    private router: Router) { }

  
    onEditSubmit() {
      const editThought = {
        _id: this.selectedThought._id,
        editLabel: this.firstFormGroup.get('editThought').value
      };
      this.dataService.editThought(editThought).subscribe(data => {
      });
      
    }



  ngOnInit() {
    this.internalService.selThoughtObs.subscribe(res => this.selectedThought = res);

    this.firstFormGroup = this.formBuilder.group({
      editLabel: []
    });
  }

}
