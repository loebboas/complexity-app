import { Injectable } from '@angular/core';
import { Thought } from '../models/thought';
import { ChangeTracker } from '../models/changeTracker';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { DataService } from './data.service';



@Injectable()
export class InternalService {
  allThoughts;
  public thoughts = new BehaviorSubject<Thought[]>([]);
  thoughtObs = this.thoughts.asObservable();

  public selThought = new BehaviorSubject<Thought>({"_id":"5aca1aee67ddc622a4fa0ba1","label":"Complexity-App","showAs":"btn","user":"5aca1aed67ddc622a4fa0b9e","privacy":"locked","__v":1,"inputTime":"2018-04-08T13:36:46.461Z","contents":[{"_id":"5aca1aee67ddc622a4fa0ba7","label":"Timeline","showAs":"timeline","user":"5aca1aed67ddc622a4fa0b9e","privacy":"locked","__v":0,"inputTime":"2018-04-08T13:36:46.492Z","contents":[],"contexts":["5aca1aee67ddc622a4fa0ba1"],"dimensions":[{"dim":"compApp","val":"2","_id":"5aca1aee67ddc622a4fa0ba8"}]},{"_id":"5aca1aee67ddc622a4fa0ba9","label":"Diary","showAs":"diary","user":"5aca1aed67ddc622a4fa0b9e","privacy":"locked","__v":1,"inputTime":"2018-04-08T13:36:46.499Z","contents":[{"_id":"5aca1aee67ddc622a4fa0bbd","label":"Feelings","showAs":"statistics","user":"5aca1aed67ddc622a4fa0b9e","privacy":"locked","__v":0,"inputTime":"2018-04-08T13:36:46.579Z","contents":[],"contexts":["5aca1aee67ddc622a4fa0ba9"],"dimensions":[{"dim":"compApp","val":"3","_id":"5aca1aee67ddc622a4fa0bbf"},{"dim":"statistics","val":"rate","_id":"5aca1aee67ddc622a4fa0bbe"}]},{"_id":"5aca1aee67ddc622a4fa0bc0","label":"Memories","showAs":"memory","user":"5aca1aed67ddc622a4fa0b9e","privacy":"locked","__v":0,"inputTime":"2018-04-08T13:36:46.585Z","contents":[],"contexts":["5aca1aee67ddc622a4fa0ba9"],"dimensions":[{"dim":"compApp","val":"3","_id":"5aca1aee67ddc622a4fa0bc2"},{"dim":"timeframe","val":"week","_id":"5aca1aee67ddc622a4fa0bc1"}]}],"contexts":["5aca1aee67ddc622a4fa0ba1"],"dimensions":[{"dim":"compApp","val":"2","_id":"5aca1aee67ddc622a4fa0baa"}]}],"contexts":[{"_id":"5aca1aee67ddc622a4fa0b9f","label":"Complexity-App","showAs":"btn","privacy":"locked","__v":0,"inputTime":"2018-04-08T13:36:46.376Z","contents":[],"contexts":[],"dimensions":[{"dim":"compApp","val":"0","_id":"5aca1aee67ddc622a4fa0ba0"}]}],"dimensions":[{"dim":"compApp","val":"1","_id":"5aca1aee67ddc622a4fa0ba2"}]});
  selThoughtObs = this.selThought.asObservable();
  
  public selContent = new BehaviorSubject<Thought[]>([]);
  selContentObs = this.selContent.asObservable();

  public selContext = new BehaviorSubject<Thought[]>([]);
  selContextObs = this.selContext.asObservable();


  constructor(private dataService: DataService) { 
  }

  changeThought(thought) {
    this.dataService.getThought(thought._id).subscribe(data => {
    this.selThought.next(data.thought);
    this.selContext.next(data.thought.contexts);
    this.selContent.next(data.thought.contents);
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
