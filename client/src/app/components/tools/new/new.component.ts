import { Component, OnInit, ViewEncapsulation, Input } from '@angular/core';
import { FormControl, FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Location } from '@angular/common';
import { Router } from '@angular/router';
import { Thought } from '../../../models/thought';
import { DataService } from '../../../services/data.service';
import { InternalService } from '../../../services/internal.service';
import { AuthService } from '../../../services/auth.service';
import { Observable } from 'rxjs';
import { User } from '../../../models/user';




@Component({
  selector: 'app-new',
  templateUrl: './new.component.html',
  styleUrls: ['./new.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class NewComponent implements OnInit {
  newThought;
  user: User;
  selectedThought: Thought;
  constructor(private dataService: DataService,
    private formBuilder: FormBuilder,
    private internalService: InternalService,
    private authService: AuthService,
    private router: Router
  ) {  }

   onNewSubmit() {
   
  }



  ngOnInit() {
    this.newThought = new FormControl();
      this.internalService.selectedUserObs.subscribe(res => this.user = res );
      this.internalService.selectedThoughtObs.subscribe(res => this.selectedThought = res);


  }
}
