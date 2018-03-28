import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormBuilder, Validators } from '@angular/forms';
import { AuthService } from '../../services/auth.service';
import { DataService } from '../../services/data.service';
import { Location } from '@angular/common';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { startWith } from 'rxjs/operators/startWith';
import { map } from 'rxjs/operators/map';

@Component({
  selector: 'app-favorites',
  templateUrl: './favorites.component.html',
  styleUrls: ['./favorites.component.scss']
})
export class FavoritesComponent implements OnInit {

  trappedBoxes = ['Trapped 1', 'Trapped 2'];

  add(): void {
    this.trappedBoxes.push('New trapped');
  }

onDragStart(): void {
  console.log('got Drag Start!');
}


  onDragMove(event: PointerEvent): void {
    console.log(`got drag move ${Math.round(event.clientX)} ${Math.round(event.clientY)}`);
  }

onDragEnd(): void {
  console.log('got Drag Ende!');
}
  thoughtCtrl: FormControl;
  filteredThoughts: Observable<any[]>;
  thoughts = [{
  "_id":"",
  "label":"","user":"",
  "privacy":"",
  "__v":1,
  "inputTime":"2018-03-15T16:55:04.222Z",
  "contexts":[{"_id":"","label":"","showAs":""}], 
  "contents": [{"_id":"","label":"","showAs":""}] }];
  message;
  messageClass;
  currentUrl;
  username;
  userId;
  lastInput;
  newContext
  
  contexts;
  contents;
  perspectives;
  meanings;
  formMeaning;
  saveId;
  newLink;
  editLinks: any[];
  chosenThought = {
    _id: "",
    label: "",
    contexts: [{ _id: "", label: ""}],
    contents: [{ _id: "", label: "", showAs: ""}]
   };


  constructor( 
    private formBuilder: FormBuilder,
    private authService: AuthService,
    private dataService: DataService,
    private activatedRoute: ActivatedRoute,
    private router: Router
  ) {
    this.thoughtCtrl = new FormControl();
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


  linktoThought(thought){
 
      //UPDATE ChosenThought
      console.log(thought);
      const addMeaning = {
        _id: this.chosenThought._id,
        editLabel: this.chosenThought.label,
        editContents: this.chosenThought.contents,
        user: this.userId,
        form: "sphere",
        privacy: "private"
  };
 
    this.newLink = {
      _id: thought._id, label: thought.label, showAs: "card"
    };
      addMeaning.editContents.push(this.newLink);
      console.log(addMeaning);
   
      this.dataService.editThought(addMeaning).subscribe(data => {
        if (!data.success) {
          this.messageClass = 'alert alert-danger';
          this.message = data.message;
        } else {
          this.messageClass = 'alert alert-success';
          this.message = data.message;    
     };
      //UPDATE NewMeaning
     const addContext = {
      _id: thought._id,
      editLabel: thought.label,
      editContexts: thought.contexts,
      editContents: thought.contents,
      user: this.userId,
      form: "sphere",
      privacy: "private"
};
      this.newContext = {
        _id: this.chosenThought._id,label: this.chosenThought.label
      };
        addContext.editContexts.unshift(this.newContext);
        console.log(addContext);
        console.log(this.chosenThought);
        this.dataService.editThought(addContext).subscribe(data => {
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
    	// Reload Thought Lvl 0
	  	reloadThoughts(id) {
        this.dataService.getSingleThought(id).subscribe(data => {
          this.chosenThought = {
            _id: data.thought._id,
            label: data.thought.label,
            contexts: data.thought.contexts,
            contents: data.thought.contents };
          this.contexts = data.thought.contexts;
          this.contents = data.thought.contents;
        console.log(this.chosenThought);
        console.log(this.contents);
        });
          }

  onMeaningSubmit() { 
    const newThought = {
      label: this.lastInput, // E-mail input field
      user: this.userId,
      contexts: [{ _id: this.chosenThought._id, label: this.chosenThought.label }],
      privacy: "private"
       };
       this.dataService.newThought(newThought).subscribe(data => {
          this.saveId = data.newId;
          this.newLink = {
            _id: this.saveId, label: this.lastInput, showAs: "card" 
          };
      //UPDATE ChosenThought

      const editThought = {
        _id: this.chosenThought._id,
        editLabel: this.chosenThought.label,
        editContexts: this.chosenThought.contexts,
        editContents: this.chosenThought.contents,
        user: this.userId,
        form: "sphere",
        privacy: "private"
  };
    
      editThought.editContents.push(this.newLink);
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
    this.dataService.getThoughtByName("My-Room").subscribe(data => {
      this.chosenThought = {
        _id: data.thought._id,
        label: data.thought.label,
        contexts: data.thought.contexts,
        contents: data.thought.contents };
        this.contexts = data.thought.contexts;
        this.contents = data.thought.contents;
   
      console.log(this.chosenThought);
      console.log(this.contents);
   
    }); 
    } else {

      //Get Thought
      this.dataService.getSingleThought(this.currentUrl.id).subscribe(data => {
        this.chosenThought = {
          _id: data.thought._id,
          label: data.thought.label,
          contexts: data.thought.contexts,
          contents: data.thought.content };
          this.contexts = data.thought.contexts;
          this.contents = data.thought.contents;
      console.log(this.chosenThought);
      console.log(this.contents);
      });
      this.dataService.getAllThought().subscribe(data => {
        this.thoughts = data.allThought;
        console.log(this.thoughts);
      });
     
    }


  }
    



     
    
   
    
  

}
