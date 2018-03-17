import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormBuilder, Validators } from '@angular/forms';
import { AuthService } from '../../services/auth.service';
import { DataService } from '../../services/data.service';
import { Location } from '@angular/common';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-memories',
  templateUrl: './memories.component.html',
  styleUrls: ['./memories.component.css']
})
export class MemoriesComponent implements OnInit {
  messageClass;
  message;
  thoughts;
  
constructor(
  private formBuilder: FormBuilder,
  private authService: AuthService,
	private dataService: DataService,
	private activatedRoute: ActivatedRoute,
  private router: Router
) {  }

  ngOnInit() {

    this.dataService.getAllThought().subscribe(data => {
      this.thoughts = data.allThought;
      console.log(this.thoughts);
    });
  }

}
