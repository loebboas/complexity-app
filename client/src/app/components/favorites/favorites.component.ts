import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormBuilder, Validators } from '@angular/forms';
import { AuthService } from '../../services/auth.service';
import { DataService } from '../../services/data.service';
import { Location } from '@angular/common';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-favorites',
  templateUrl: './favorites.component.html',
  styleUrls: ['./favorites.component.css']
})
export class FavoritesComponent implements OnInit {
  currentUrl;
  username;
  userId;
  chosenThought;
  contexts;
  perspectives;
  meanings;


  constructor( 
    private formBuilder: FormBuilder,
    private authService: AuthService,
    private dataService: DataService,
    private activatedRoute: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit() {
    this.currentUrl = this.activatedRoute.snapshot.params; // When component loads, grab the id
    console.log(this.currentUrl)
    this.authService.getProfile().subscribe(profile => {
    this.username = profile.user.username; // Used when creating new blog posts and comments
    this.userId = profile.user._id;
      });   

    if(!this.currentUrl.id) { 
    this.dataService.getThoughtByName("Favorites").subscribe(data => {
      this.chosenThought = {
        _id: data.thought._id,
        label: data.thought.label };
      this.contexts = data.thought.contexts;
      this.perspectives = data.thought.perspectives;
      this.meanings = data.thought.meanings;
    }); 
    } else {

      //Get Thought
      this.dataService.getSingleThought(this.currentUrl.id).subscribe(data => {
        this.chosenThought = {
          _id: data.thought._id,
          label: data.thought.label };
        this.contexts = data.thought.contexts;
        this.perspectives = data.thought.perspectives;
        this.meanings = data.thought.meanings;
      });
      console.log(this.chosenThought);
      console.log(this.contexts);
      console.log(this.perspectives);
      console.log(this.meanings);
    }


  }
    



     
    
   
    
  

}
