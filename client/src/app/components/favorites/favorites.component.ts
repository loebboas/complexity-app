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
  message;
  messageClass;
  currentUrl;
  username;
  userId;
  chosenThought;
  links;
  perspectives;
  meanings;
  formMeaning;
  saveId;
  newLink;
  editLinks: any[];


  constructor( 
    private formBuilder: FormBuilder,
    private authService: AuthService,
    private dataService: DataService,
    private activatedRoute: ActivatedRoute,
    private router: Router
  ) {
    this.createNewMeaningForm(); // Create new  form on start up
   }

  createNewMeaningForm() {
    this.formMeaning = this.formBuilder.group({
       label: ''
     })
  }

    	// Reload Thought Lvl 0
	  	reloadThoughts(id) {
        this.dataService.getSingleThought(id).subscribe(data => {
          this.chosenThought = {
            _id: data.thought._id,
            label: data.thought.label,
            links: data.thought.links };
          this.links = data.thought.links;
        console.log(this.chosenThought);
        console.log(this.links);
        });
          }

  onMeaningSubmit() { 
    const newThought = {
      label: this.formMeaning.get('label').value, // E-mail input field
      user: this.userId,
      links: [{ _id: this.chosenThought._id, linktype: "context", label: this.chosenThought.label }],
      privacy: "private"
       };
       this.dataService.newThought(newThought).subscribe(data => {
          this.saveId = data.newId;
          this.newLink = {
            _id: this.saveId, linktype: "meaning", label: this.formMeaning.get('label').value
          };
      //UPDATE ChosenThought

      const editThought = {
        _id: this.chosenThought._id,
        editLabel: this.chosenThought.label,
        editLinks: this.chosenThought.links,
        user: this.userId,
        form: "sphere",
        privacy: "private"
  };
    
      editThought.editLinks.push(this.newLink);
      console.log(this.editLinks);
      console.log(this.chosenThought);
   
      this.dataService.editThought(editThought).subscribe(data => {
        if (!data.success) {
          this.messageClass = 'alert alert-danger';
          this.message = data.message;
        } else {
          this.messageClass = 'alert alert-success';
          this.message = data.message;    
     };
   

    });
  });

  
  }

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
      this.links = data.thought.links;
   
      console.log(this.chosenThought);
      console.log(this.links);
   
    }); 
    } else {

      //Get Thought
      this.dataService.getSingleThought(this.currentUrl.id).subscribe(data => {
        this.chosenThought = {
          _id: data.thought._id,
          label: data.thought.label,
          links: data.thought.links };
        this.links = data.thought.links;
      console.log(this.chosenThought);
      console.log(this.links);
      });
     
    }


  }
    



     
    
   
    
  

}
