import { Component, OnInit } from '@angular/core';
import { Thought } from '../../models/thought';
import { Observable } from 'rxjs/Observable';
import { FormControl, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { DataService } from '../../services/data.service';
import { AuthService } from '../../services/auth.service';
import { InternalService } from '../../services/internal.service';
import { startWith } from 'rxjs/operators/startWith';
import { map } from 'rxjs/operators/map';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  //Autocomplete
  thoughtCtrl: FormControl;
  filteredThoughts: Observable<Thought[]>;
  compApp: Thought;
  thoughts: Thought[];
  selectedThought: Thought;
  username; starterId; userId;

  constructor(private formBuilder: FormBuilder,
    private router: Router,
    public dataService: DataService,
    public authService: AuthService,
    public internalService: InternalService) { 
      //Autocomplete
      this.thoughtCtrl = new FormControl();
      this.filteredThoughts = this.thoughtCtrl.valueChanges
        .pipe(
          startWith(''),
          map(thought => thought ? this.filterThoughts(thought) : this.thoughts.slice())
        );
  
    }
  
    filterThoughts(label: string) {
      return this.thoughts.filter(thought =>
        thought.label.toLowerCase().indexOf(label.toLowerCase()) === 0);
      }

  ngOnInit() {
 
    //GET USER Data
    this.authService.getProfile().subscribe(profile => {
    this.username = profile.user.username; // Used when creating new blog posts and comments
    this.userId = profile.user._id;
    this.starterId = profile.user.starter;
    
    //GET THOUGHTS
    this.internalService.loadThoughts();
    this.internalService.thoughtObs.subscribe(res => this.thoughts = res);

    this.internalService.selThoughtObs.subscribe(res => this.selectedThought = res);
  });
  }
}
