import { Component, OnInit, ViewEncapsulation, Input } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { FormControl, FormGroup, FormBuilder, Validators } from '@angular/forms';
import { DataService } from '../../services/data.service';
import { Location } from '@angular/common';
import { Router } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { startWith } from 'rxjs/operators/startWith';
import { map } from 'rxjs/operators/map';
import { Thought } from '../../models/thought';
import { InternalService } from '../../services/internal.service';
import { Dimension } from '../../models/Dimension';


@Component({
  selector: 'app-new',
  templateUrl: './new.component.html',
  styleUrls: ['./new.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class NewComponent implements OnInit {
thoughts: Thought[];
selectedThought: Thought;
contexts: Thought[]
lastInput: String;
dimensions: any[];
newContexts: String[] = [];
newContents: String[] = [];
contextContent: String[] = [];
//Autocomplete
thoughtCtrl: FormControl;
filteredThoughts: Observable<Thought[]>;
saveId;
messageClass;
message;
newCompApp;
addDimensions = false;
username;
userId;

    constructor(private dataService: DataService,
      private formBuilder: FormBuilder,
      private internalService: InternalService,
      private authService: AuthService,
      private router: Router) {
        //Autocomplete
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
        
    
        
        copyThought(thought)  { 
          this.dataService.getThoughtByName("Unstructured").subscribe(data => {
            
            //CREATE NEW CONTEXT
            if(this.selectedThought && this.selectedThought.label != "Complexity-App"){
              this.newContexts.unshift(this.selectedThought._id);
             this.selectedThought.dimensions.filter(dimension => {
             if(dimension.dim == "compApp") { this.newCompApp = Number(dimension.val)}
            })
              this.contexts.forEach(thought => this.newContexts.push(thought._id));
            } else {  
                this.newContexts.unshift(data.thought._id);
                this.newContexts.push(data.thought.contexts[0]);
              //  data.thought.dimensions.filter(dimension => {
                //  if(dimension.dim == "compApp") { this.newCompApp = dimension.val}
               // });
            };
                      //CREATE DIMENSIONS
          this.dimensions = [{ dim: "compApp", val: this.newCompApp++ }];


          //Resave Thought with New Context
          const copyThought = {
            label: thought.label,
            user: this.userId,
            contexts: this.newContexts,
            contents: thought.contents,
            dimensions: this.dimensions,
            showAs: "card",
            privacy: "private"
            };
          
             this.dataService.newThought(copyThought).subscribe(data => {
                this.saveId = data.newId;
              
             
        this.dataService.getSingleThought(this.newContexts[0]).subscribe(data => { this.contextContent = data.thought.contents;
          this.contextContent.push(this.saveId);

          const editThought = {
            _id: this.newContexts[0],
            editContents: this.contextContent
            };
    
          this.dataService.editThought(editThought).subscribe(data => {
            this.router.navigate(['/viewer/', this.newContexts[0]]);
            this.internalService.changeThought(this.selectedThought); 
          });
        });
       });  
      });  
      }

      
        onNewSubmit()  { 
          //Get Unstructured Context
          this.dataService.getThoughtByName("Unstructured").subscribe(data => {
            
            //CREATE NEW CONTEXT
            if(this.selectedThought && this.selectedThought.label != "Complexity-App"){
              this.newContexts.unshift(this.selectedThought._id);
             // this.selectedThought.dimensions.filter(dimension => {
               // if(dimension.dim == "compApp") { this.newCompApp = dimension.val}
              //})
              this.contexts.forEach(thought => this.newContexts.push(thought._id));
            } else {  
                this.newContexts.unshift(data.thought._id);
                this.newContexts.push(data.thought.contexts[0]);
              //  data.thought.dimensions.filter(dimension => {
                //  if(dimension.dim == "compApp") { this.newCompApp = dimension.val}
               // });
            };
                      //CREATE DIMENSIONS
          this.dimensions = [{ dim: "compApp", val: this.newCompApp }];

          const newThought = {
            label: this.lastInput,
            user: this.userId,
            contexts: this.newContexts,
            contents: this.newContents,
            dimensions: this.dimensions,
            showAs: "card",
            privacy: "private"
            };
          

             this.dataService.newThought(newThought).subscribe(data => {
                this.saveId = data.newId;

            //Get Thought to Update
            this.dataService.getSingleThought(this.newContexts[0]).subscribe(data => { this.contextContent = data.thought.contents;
            this.contextContent.push(this.saveId);

            const editThought = {
              _id: this.newContexts[0],
              editContents: this.contextContent
        };
      
            this.dataService.editThought(editThought).subscribe(data => {
              if (!data.success) {
                this.messageClass = 'alert alert-danger';
                this.message = data.message;
              } else {
                this.messageClass = 'alert alert-success';
                this.message = data.message;    
           };

           this.router.navigate(['/viewer/', this.newContexts[0]]);
           this.internalService.changeThought(this.selectedThought);    
          }); 
          });  
      });  
    });
      }




  ngOnInit() {

      //GET USER Data
    this.authService.getProfile().subscribe(profile => {
    this.username = profile.user.username; // Used when creating new blog posts and comments
    this.userId = profile.user._id;
    });
    
    this.internalService.loadThoughts();
    this.internalService.thoughtObs.subscribe(res => this.thoughts = res);
    this.internalService.selThoughtObs.subscribe(res => this.selectedThought = res);
    this.internalService.selContextObs.subscribe(res => this.contexts = res);

  
  }
}
