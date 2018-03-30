import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormBuilder, Validators } from '@angular/forms';
import { AuthService } from '../../services/auth.service';
import { DataService } from '../../services/data.service';
import { Location } from '@angular/common';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { startWith } from 'rxjs/operators/startWith';
import { map } from 'rxjs/operators/map';
import { SortEvent } from '../../draggable/sortable-list.directive';

@Component({
  selector: 'app-favorites',
  templateUrl: './favorites.component.html',
  styleUrls: ['./favorites.component.scss']
})
export class FavoritesComponent implements OnInit {

  sortableList = [];

   sort(event: SortEvent) {
    const current = this.sortableList[event.currentIndex];
    const swapWith = this.sortableList[event.newIndex];

    this.sortableList[event.newIndex] = current;
    this.sortableList[event.currentIndex] = swapWith;
    this.updateThought(this.sortableList)
    

  }

  thoughtCtrl: FormControl;
  filteredThoughts: Observable<any[]>;
  thoughts = [{
  "_id":"",
  "label":"","user":"",
  "privacy":"",
  "__v":1,
  "inputTime":"2018-03-15T16:55:04.222Z",
  "contexts":[{_id:"", label:""}], 
  "contents": [{_id:"",label:"",showAs:""}] }];
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
 updateThought(sortableList) {
  //UPDATE CONTENT OF CHOSENTHOUGHT
  const editContent = {
    _id: this.chosenThought._id,
   editContents: this.sortableList,
    };

  this.dataService.editThought(editContent).subscribe(data => {
    if (!data.success) {
      this.messageClass = 'alert alert-danger';
      this.message = data.message;
    } else {
      this.messageClass = 'alert alert-success';
      this.message = data.message;    
 };
});
 }

  copyThought(thought){
    //CREATE COPIED THOUGHT WITH NEW CONTEXT
    this.dataService.getSingleThought(thought._id).subscribe(data => {
      var copyThought = {
        _id: data.thought._id,
        label: data.thought.label,
        user: this.userId,  
        contexts: this.contexts,
        contents: data.thought.contents,
        privacy: "private" };
         
        copyThought.contexts.unshift({ _id: this.chosenThought._id, label: this.chosenThought.label });
        
       
        //SAVE COPY AS NEW THOUGHT
        this.dataService.newThought(copyThought).subscribe(data => {
          this.saveId = data.newId;
        
          this.newLink = {
            _id: this.saveId, label: thought.label, showAs: "card"
            };
     
        //UPDATE CHOSENTHOUGHT
        const editThought = {
          _id: this.chosenThought._id,
          editContents: this.chosenThought.contents,
    };
      
        editThought.editContents.push(this.newLink);
       
        this.dataService.editThought(editThought).subscribe(data => {
          if (!data.success) {
            this.messageClass = 'alert alert-danger';
            this.message = data.message;
          } else {
            this.messageClass = 'alert alert-success';
            this.message = data.message;    
       };
       copyThought.contexts.shift();
  
          });
        });
      });
      this.reloadThoughts(this.chosenThought._id);
}
    

  onMeaningSubmit() { 
    const newThought = {
      label: this.lastInput,
      user: this.userId,
      contexts: this.contexts,
      privacy: "private"
       };
    
      newThought.contexts.unshift({ _id: this.chosenThought._id, label: this.chosenThought.label });

       this.dataService.newThought(newThought).subscribe(data => {
          this.saveId = data.newId;
          this.newLink = {
            _id: this.saveId, label: this.lastInput, showAs: "card" 
          };
      //UPDATE ChosenThought

      const editThought = {
        _id: this.chosenThought._id,
        editContents: this.chosenThought.contents,
        user: this.userId,
        form: "sphere",
        privacy: "private"
  };
    
      editThought.editContents.push(this.newLink);
     
      this.dataService.editThought(editThought).subscribe(data => {
        if (!data.success) {
          this.messageClass = 'alert alert-danger';
          this.message = data.message;
        } else {
          this.messageClass = 'alert alert-success';
          this.message = data.message;    
     };
     newThought.contexts.shift();

    });
  });
  }

  	// Reload Thoughts
    reloadThoughts(id) {
      this.dataService.getSingleThought(id).subscribe(data => {
        this.chosenThought = {
          _id: data.thought._id,
          label: data.thought.label,
          contexts: data.thought.contexts,
          contents: data.thought.contents };
        this.contexts = data.thought.contexts;
        this.contents = data.thought.contents;
        this.sortableList = data.thought.contents;
      });
        }


  ngOnInit() {
    //GET URL-ID AND PROFILE DATA
    this.currentUrl = this.activatedRoute.snapshot.params; // When component loads, grab the id
    this.authService.getProfile().subscribe(profile => {
    this.username = profile.user.username; // Used when creating new blog posts and comments
    this.userId = profile.user._id;
      });   

    //LOAD STARTER THOUGHT
    if(!this.currentUrl.id) { 
    this.dataService.getThoughtByName("My-Room").subscribe(data => {
      this.chosenThought = {
        _id: data.thought._id,
        label: data.thought.label,
        contexts: data.thought.contexts,
        contents: data.thought.contents };
        this.contexts = data.thought.contexts;
        this.contents = data.thought.contents;
   
    }); 
    } else {

      //LOAD URL-ID THOUGHT
      this.dataService.getSingleThought(this.currentUrl.id).subscribe(data => {
        this.chosenThought = {
          _id: data.thought._id,
          label: data.thought.label,
          contexts: data.thought.contexts,
          contents: data.thought.contents };
          this.contexts = data.thought.contexts;
          this.contents = data.thought.contents;
          this.sortableList = data.thought.contents;
                          
      this.dataService.getAllThought().subscribe(data => {
        this.thoughts = data.allThought; 
       });;
    
      });
    }
  }
    



     
    
   
    
  

}
