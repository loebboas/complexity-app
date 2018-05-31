import { Injectable } from '@angular/core';
import { Thought } from '../models/thought';
import { ChangeTracker } from '../models/changeTracker';
import { Observable, of, BehaviorSubject, ReplaySubject } from 'rxjs';
import { DataService } from './data.service';
import { PubRoom } from '../models/pubRoom';
import { PubThought } from '../models/pubThought';
import { nullSafeIsEquivalent } from '@angular/compiler/src/output/output_ast';
import { User } from '../models/user';
import { AuthService } from './auth.service';
import { PublicService } from './public.service';
import { DrawNavbarService } from './draw-navbar.service';
import { DataSet, Edge } from 'vis';
import { GridsterItem } from 'angular-gridster2';



@Injectable()
export class InternalService {
  guestRoom: PubRoom = {
    _id: "guestroom",
    label: "Welcome!",
    admin: [],
    members: [],
    contents: [],
    dimensions: [],
    visible: "open",
    activeUsers: []
  }

  guestUser: User = {
    _id: "guestuser",
    email: "guest@complexity-app.com",
    username: "Guest",
    private: [],
    public: [],
    rooms: [{
      _id: "guestroom",
      label: "Welcome!",
      admin: [],
      members: [],
      contents: [],
      dimensions: [],
      visible: "open",
      activeUsers: []
    }],
    friends: []
  }

  // Stores Data for Viewer as GridsterItems
  public Items = new BehaviorSubject<GridsterItem[]>([]);
  ItemsObs = this.Items.asObservable();

  // Stores all public Rooms (later: Selected Rooms, SEARCH, shown as Stars in Background)
  public pubRooms = new BehaviorSubject<PubRoom[]>([]);
  pubRoomsObs = this.pubRooms.asObservable();

  // Stores all Private Thoughts
  public thoughts = new BehaviorSubject<Thought[]>([]);
  thoughtsObs = this.thoughts.asObservable();

  // Stores all Thoughts of selected Room
  public roomThoughts = new BehaviorSubject<Thought[]>([]);
  roomThoughtsObs = this.roomThoughts.asObservable();

  //Stores the selected Room (default: Welcome)
  public selectedRoom = new BehaviorSubject<PubRoom>(this.guestRoom);
  selectedRoomObs = this.selectedRoom.asObservable();

  // Stores public Thoughts of selected Room
  public pubThoughts = new BehaviorSubject<PubThought[]>([]);
  pubThoughtsObs = this.pubThoughts.asObservable();

  //stores User (default: Guest)
  public selectedUser = new BehaviorSubject<User>(this.guestUser);
  selectedUserObs = this.selectedUser.asObservable();

  //Selected Thought (Thought incl. Content which is being shown)
  public selectedThought = new BehaviorSubject<Thought>(null);
  selectedThoughtObs = this.selectedThought.asObservable();

  // Array with all Thoughts of this Session
  public sessionThoughts = new BehaviorSubject<Thought[]>([]);
  sessionThoughtsObs = this.sessionThoughts.asObservable();

  //Selected Tool
  public selectedTool = new BehaviorSubject<String>("none");
  selectedToolObs = this.selectedTool.asObservable();

  constructor(private dataService: DataService, private authService: AuthService, private publicService: PublicService, private drawNavbarService: DrawNavbarService) {
  }
  //Consts: GuestUser, WelcomeRoom
  //Observables: PubRooms (incl. one = selected), SessionThoughts, SelectedThought, User, Networks, Tools
  //Input: AuthService: User (Friends, Networks, Room-Links)
  //Input: DataService: Thoughts
  //Input: PublicService: PubRooms, PubThoughts
  //Functions: ChangeUser, ShowMyNetworks, ShowThought, RemoveThought ShowFriends, GoToFriendRoom, ShowMyRooms, GoToRoom
  //Function: ChangeSelectedThought
  //Function: ChangeTool, changeShowAs
  //Output: PubRooms, SessionThoughts, User @Navbar (via DrawGraph-Service)
  //Output: SelectedThought (incl. Contents + SubContents) @Viewer 

  //LOAD DATA
  loadUser() {
    if (this.authService.loggedIn()) {  //Check if LoggedIn
      this.authService.getProfile().subscribe(data => {   //Get UserData
        if (data['user']) {
          const user: User = data['user'];
          this.changeRoom(user.rooms[0]._id);
          this.selectedUser.next(user);
          this.drawNavbarService.loadUser(user);

        } else {
          const user = this.guestUser;
          this.selectedUser.next(user);
          this.changeRoom(user.rooms[0]._id);
          this.drawNavbarService.deleteUser();
          this.drawNavbarService.loadUser(user);
        }
      });
    }
  }

  loadPubRooms() {
    this.publicService.getAllPubRooms().subscribe(data => {
      this.pubRooms.next(data['pubRooms']);
      this.drawNavbarService.loadRooms(data['pubRooms'])
    })
  }

  loadThoughts() {
    this.dataService.getAllThought().subscribe(data => {
      this.thoughts.next(data['allThought']);
    })
  }

  loadRoomThoughts(id) {
    this.publicService.getRoomContent(id).subscribe(data => {
      this.roomThoughts.next(data['thoughts']);
    })
  }

  //ROOMS
  changeRoom(id) { //Changes Selected Thought as well
    if (this.pubRooms.getValue().length > 0) {
      const pubRoom = this.pubRooms.getValue().find(pubRoom => id == pubRoom._id);
      this.selectedRoom.next(pubRoom);
      this.roomToThought(pubRoom);
      this.drawNavbarService.changeRoom(pubRoom);
    }
  }

  roomToThought(pubRoom: PubRoom) {
    const thought: Thought = {
      _id: pubRoom._id,
      contents: pubRoom.contents,
      level: -1,
      label: pubRoom.label,
      user: pubRoom.admin[0],
      color: "#FFFFFF",
      clicks: pubRoom.likes,
      showAs: "grid",
      grid: { cols: 7, rows: 1, x: 0, y: 0, colspan: 0, rowspan: 0 }
    }
    this.selectedThought.next(thought);
  }

  changeThought(id) {
    this.thoughts.getValue().forEach(thought => {
      if (thought._id == id) {
        this.selectedThought.next(thought);
      }
    });
  }

  changeTool(tool: String) {
    this.selectedTool.next(tool);
  }

  changeShowAs(label) {
    const viewThought = this.selectedThought.getValue();
    viewThought.showAs = label;
    this.selectedThought.next(viewThought);
  }

}
