import { Injectable } from '@angular/core';
import { Thought } from '../models/thought';
import { ChangeTracker } from '../models/changeTracker';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { DataService } from './data.service';



@Injectable()
export class InternalService {

  public thoughts = new BehaviorSubject<Thought[]>([]);
  thoughtObs = this.thoughts.asObservable();

  public selThought = new BehaviorSubject<Thought>(null);
      selThoughtObs = this.selThought.asObservable();
  
  public selContents = new BehaviorSubject<Thought[]>([]);
  selContentsObs = this.selContents.asObservable();

  public selContext = new BehaviorSubject<Thought>(null);
  selContextObs = this.selContext.asObservable();

  public selContexts = new BehaviorSubject<Thought[]>([]);
  selContextsObs = this.selContexts.asObservable();

  public selSiblings = new BehaviorSubject<Thought[]>([]);
  selSiblingsObs = this.selSiblings.asObservable();

  constructor(private dataService: DataService) { 
  }

  changeThought(id) {
    this.dataService.getThought(id).subscribe(data => {  //Load Populated Thought
    this.selThought.next(data.thought);    

    this.dataService.getContent(data.thought.contexts[0]._id).subscribe(data => {
      this.selSiblings.next(data.thought.contents);              //Save Selected Thought
    });
      this.selContext.next(data.thought.contexts.pop());   //Remove Last Context as Main Context
    this.selContexts.next(data.thought.contexts);       // Save Rest of Contexts
    this.selContents.next(data.thought.contents);
  

 
  })
  }
  
  changeShowAs(thought) {
    this.selThought.next(thought);
  }

  loadThoughts() {
    this.dataService.getAllThought().subscribe(data => {
    this.thoughts.next(data.allThought);
    })
  }
}
