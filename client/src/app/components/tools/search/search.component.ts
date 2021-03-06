import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { FormControl, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { startWith ,  map } from 'rxjs/operators';
import { Thought } from '../../../models/thought';
import { DataService } from '../../../services/data.service';
import { AuthService } from '../../../services/auth.service';
import { InternalService } from '../../../services/internal.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {
  thoughts: Thought[];
  lastInput: String;

  //Autocomplete
  thoughtCtrl: FormControl;
  newThought: FormControl;
  filteredThoughts: Observable<Thought[]>;
  constructor(private dataService: DataService,
    private formBuilder: FormBuilder,
    private internalService: InternalService,
    private authService: AuthService,
    private router: Router
  ) {
    //Autocomplete
    this.thoughtCtrl = new FormControl();
    this.newThought = new FormControl();
    this.filteredThoughts = this.thoughtCtrl.valueChanges
      .pipe(
        startWith(''),
        map(thought => thought ? this.filterThoughts(thought) : this.thoughts.slice())
      );

  }

  filterThoughts(label: string) {
    this.lastInput = label;
    return this.thoughts.filter(thought =>
      thought.label.toLowerCase().indexOf(label.toLowerCase()) === 0);
  }

  
  ngOnInit() {

  }
}

