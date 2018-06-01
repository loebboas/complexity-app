import { Injectable } from '@angular/core';
import { Thought } from '../models/thought';
import { Observable, of, BehaviorSubject, ReplaySubject } from 'rxjs';
import { DataService } from './data.service';
import { User } from '../models/user';
import { AuthService } from './auth.service';
import { DrawNavbarService } from './draw-navbar.service';
import { DrawViewerService } from './draw-viewer.service';
import { timeout } from 'rxjs/operators';




@Injectable()
export class InternalService {

  //Default Objects (for LoggedOut Views)
  welcomeThought: Thought = {
    _id: "WelcomeThought",
    label: "Welcome!"
  };
  guestUser: User = {
    _id: "guestID",
    username: "Guest"
  };
  allThoughts: Thought[];
  //Save all relevant Data as BehaviourSubjects

  //SEARCH LISTS
  // Stores all Private Thoughts
  public privateThoughts = new BehaviorSubject<Thought[]>([]);
  privateThoughtsObs = this.privateThoughts.asObservable();

  // Stores all Private Thoughts
  public publicThoughts = new BehaviorSubject<Thought[]>([]);
  publicThoughtsObs = this.publicThoughts.asObservable();

  // Stores all all Users 
  public allUsers = new BehaviorSubject<User[]>([]);
  allUsersObs = this.allUsers.asObservable();


  //SELECTED DATA
  //stores User (default: Guest)
  public selectedUser = new BehaviorSubject<User>(this.guestUser);
  selectedUserObs = this.selectedUser.asObservable();

  //Selected Thought (Thought incl. Content which is being shown)
  public selectedThought = new BehaviorSubject<Thought>(this.welcomeThought);
  selectedThoughtObs = this.selectedThought.asObservable();

  // Stores all ThoughtObjects presented in Navbar
  public navbarThoughts = new BehaviorSubject<Thought[]>([]);
  navbarThoughtsObs = this.navbarThoughts.asObservable();

  // Stores all UserObjects presented in Navbar
  public navbarUsers = new BehaviorSubject<User[]>([]); // All Users i senough?
  navbarUsersObs = this.navbarUsers.asObservable();

  // Stores all Thoughts presented in Viewer
  public viewerThoughts = new BehaviorSubject<Thought[]>([]);
  viewerThoughtsObs = this.viewerThoughts.asObservable();

  //SELECTED TOOL
  public selectedTool = new BehaviorSubject<String>("none");
  selectedToolObs = this.selectedTool.asObservable();

  constructor(private dataService: DataService, private authService: AuthService, private drawViewerService: DrawViewerService, private drawNavbarService: DrawNavbarService) {
  }


  //LOAD DATA --> FirstLoad(Navbar) or after Login/Register
  loadData() {
    //IF LOGGEDIN
    //NAVBAR ARRAY
    if (this.authService.loggedIn()) {
      this.authService.getProfile().subscribe(data => { //Get Selected User
        this.selectedUser.next(data['user']);
        this.drawNavbarService.deleteUsers();
      });
      this.authService.getAllUser().subscribe(data => {//Get all User
        this.allUsers.next(data['users']);
        this.drawNavbarService.drawUsers(data['users']);
      });
      this.dataService.getAllPubThought().subscribe(data => { //Get all public Thoughts
        console.log(data);
        this.publicThoughts.next(data['allThoughts']); //Save PubThoughts for later Search
        this.drawNavbarService.drawPubThoughts(data['allThoughts']); // Draw PubThoughts
      })

      //LOAD VIEWER ARRAY WITH PRIVATE THOUGHTS TO START/AFTER LOGIN
      this.dataService.getAllThought().subscribe(data => { //Get all Private Thoughts
        var UserThought: Thought = {  //Create a UserSelected Thought:
          label: "My Thoughts"
        }
        var thoughtsArray: Thought[] = [];  //Add a UserSelected Thought to DrawingArray
        thoughtsArray.push(UserThought);
        if (data['allThoughts']) {
          data['allThoughts'].forEach(thought => {
            thoughtsArray.push(thought);
          });
        }
        this.selectedThought.next(UserThought);
        this.privateThoughts.next(data['allThoughts']); //Save PubThoughts for later Search
        this.drawViewerService.clearAll(); // Draw PubThoughts
        this.drawViewerService.drawThoughtsArray(thoughtsArray); // Draw PubThoughts
      })

    } else { // If not LoggedIn, load Welcome and GuestUser!

      var UserArray: User[] = [];
      UserArray.push(this.guestUser);
      var thoughtArray: Thought[] = [];
      thoughtArray.push(this.welcomeThought);

      this.drawNavbarService.drawUsers(UserArray);
      console.log(thoughtArray);
      this.drawNavbarService.drawPubThoughts(thoughtArray);
      
      this.drawViewerService.drawThoughtsArray(thoughtArray);


    }

    //ELSE:
    //Load Guest
    //load Welcome Thought

    //Create Arrays for Viewer/Navbar
    //Create Navbar Array:
  }
  clearAll() {
    this.drawNavbarService.clearAll();
    this.drawViewerService.clearAll();
    this.selectedUser.next(this.guestUser);
    setTimeout(() => {
      this.loadData()},500);
  }

  //Load Data: After Login, load private Thoughts, load Users, load Selected User, load public Thoughts
  //Put private and public thoughts into AllThoughts

  changeSelectedThought(id) {
    this.allThoughts.forEach(thought => {
      if (thought._id == id) {
        this.selectedThought.next(thought)
      }
    })
  }

  changeViewerThoughts(id) {
    //get selected Thought
    //For as Long as there are Contents, add Contents to viewerThoughts
    // For Each Content of Selected Thought, add Thought.
    //Eventuell: 3 level rauf und 3 level runter.
    // For Each Content of added Thought, add Content...

    //First part: Get new ViewerThoughtsArray
    //Second: Change Viewer ThoughtsArray
  }


  changeThought(id) {

  }

  changeTool(tool: String) {
    this.selectedTool.next(tool);
  }
}
