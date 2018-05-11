import { Injectable } from '@angular/core';
import { Thought } from '../models/thought';
import { ChangeTracker } from '../models/changeTracker';
import { Observable, of, BehaviorSubject, ReplaySubject } from 'rxjs';
import { DataService } from './data.service';
import { PubRoom } from '../models/pubRoom';
import { nullSafeIsEquivalent } from '@angular/compiler/src/output/output_ast';
import { User } from '../models/user';
import { AuthService } from './auth.service';



@Injectable()
export class InternalService {
  
  // Array with all Thoughts which can be searched.
  public searchList = new BehaviorSubject<Thought[]>([]);
  searchListObs = this.searchList.asObservable();
  //Selected Thought (Thought incl. Content which is being shown)
  public selectedThought = new BehaviorSubject<Thought>(null);
  selectedThoughtObs = this.selectedThought.asObservable();
  //Selected Room (default: Welcome)
  public selectedRoom = new BehaviorSubject<PubRoom>({
    _id: "2",
    label: "Welcome!",
    admin: [],
    members: [],
    contents: [],
    dimensions: [],
    visible: "open",
    activeUsers: []
  });
  selectedRoomObs = this.selectedRoom.asObservable();
  //Node which is selected, relevant for Editingpossibilities
  public selectedNode = new BehaviorSubject<Thought>(null);
  selectedNodeObs = this.selectedNode.asObservable();
  //ReplaySubject which holds the last 10 changes.
  public changeTracker = new ReplaySubject<Thought[]>();
  changeTrackerObs = this.changeTracker.asObservable();
  //Selected Tool
  public selectedTool = new BehaviorSubject<String>("none");
  selectedToolObs = this.selectedTool.asObservable();
  //User (default: Guest)
  public selectedUser = new BehaviorSubject<User>({
    _id: "3",
    email: "guest@complexity-app.com",
    username: "Guest",
    private: [],
    public: [],
    rooms: [{
      _id: "2",
      label: "Welcome!",
      admin: [],
      members: [],
      contents: [],
      dimensions: [],
      visible: "open",
      activeUsers: []
    }],
    friends: []
  });
  selectedUserObs = this.selectedUser.asObservable();

  constructor(private dataService: DataService, private authService: AuthService) {
  }

  changeThought(id) {
    this.dataService.getThought(id).subscribe(data => {
      const thought: Thought = data['thought']; //Load Populated Thought
      this.selectedThought.next(thought);
    });
  }
  changeRoom(id) {
    this.dataService.getPubRoom(id).subscribe(data => {
      const pubRoom: PubRoom = data['pubRoom'];
      this.selectedRoom.next(pubRoom);
      this.roomToThought(pubRoom);
    })
  }
  roomToThought(pubRoom: PubRoom) {
    const thought: Thought =  {
      _id: pubRoom._id,
      contents: pubRoom.contents,
      level: -1,
      label: pubRoom.label,
      user: pubRoom.admin[0],
      color: "#FFFFFF",
      clicks: pubRoom.likes,
      showAs: "grid",
      grid: { cols: 1, rows: 1, x: 1, y: 1, colspan: 1, rowspan: 1}
    }
    this.selectedThought.next(thought);
    console.log(thought);
  }

  changeTool(tool: String) {
    this.selectedTool.next(tool);
  }

  changeShowAs(label) {
    const viewThought = this.selectedThought.getValue();
    viewThought.showAs = label;
    this.selectedThought.next(viewThought);
  }

  loadUser() {
    if(this.authService.loggedIn()){
    this.authService.getProfile().subscribe(data => {
      if(data['user']){ 
      const user: User = data['user'];
      this.changeRoom(user.rooms[0]._id);
      this.selectedUser.next(user);
    } else {
      const user: User =    {  _id: "3",
      email: "guest@complexity-app.com",
      username: "Guest",
      private: [],
      public: [],
      rooms: [{_id: "2"}],
      friends: []
    }
    this.selectedUser.next(user);
    this.changeRoom(user.rooms[0]._id);
         }
    });
  }
  }

  getSearchList() {
    this.dataService.getAllThought().subscribe(data => {
      this.searchList.next(data['allThought']);
    });
  }
}
