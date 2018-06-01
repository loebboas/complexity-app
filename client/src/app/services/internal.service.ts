import { Injectable } from '@angular/core';
import { Thought } from '../models/thought';
import { Observable, of, BehaviorSubject, ReplaySubject } from 'rxjs';
import { DataService } from './data.service';
import { User } from '../models/user';
import { AuthService } from './auth.service';
import { DrawNavbarService } from './draw-navbar.service';
import { DrawViewerService } from './draw-viewer.service';
import { timeout } from 'rxjs/operators';
import { Perspective } from '../models/perspective';
import { Dimensions } from '../models/Dimensions/dimensions';
import { LevelDimension } from '../models/Dimensions/levelDimension';
import { DateDimension } from '../models/Dimensions/dateDimension';
import { TagDimension } from '../models/Dimensions/tagDimension';
import { NumberDimension } from '../models/Dimensions/numberDimension';

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

  UserThought: Thought = {  //Create a UserSelected Thought:
    _id: "fakeID",
    label: "My Thoughts",
    contents: []
  }

  allThoughts: Thought[];
  newDimensionsArray: Dimensions;
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

  //Selected Thought 
  public selectedThought = new BehaviorSubject<Thought>(this.welcomeThought);
  selectedThoughtObs = this.selectedThought.asObservable();

  //Selected ThoughtsArray (Thought incl. Content which is being shown)
  public selectedThoughtArray = new BehaviorSubject<Thought[]>([]);
  selectedThoughtArrayObs = this.selectedThoughtArray.asObservable();

  //SELECTED TOOL
  public selectedPerspectives = new BehaviorSubject<Perspective[]>([]);
  selectedPerspectivesObs = this.selectedPerspectives.asObservable();

  public selectedPerspective = new BehaviorSubject<Perspective>(null);
  selectedPerspectiveObs = this.selectedPerspective.asObservable();

  //SELECTED TOOL
  public selectedDimensions = new BehaviorSubject<Dimensions>(null);
  selectedDimensionsObs = this.selectedDimensions.asObservable();

  //SELECTED TOOL
  public selectedTool = new BehaviorSubject<String>("none");
  selectedToolObs = this.selectedTool.asObservable();

  constructor(private dataService: DataService, private authService: AuthService, private drawViewerService: DrawViewerService, private drawNavbarService: DrawNavbarService) {
  }

  //LOAD DATA --> FirstLoad (Navbar) or Login/Register
  loadData() {
    //IF LOGGEDIN
    if (this.authService.loggedIn()) {

      //NAVBAR
      //1. UserArray
      this.authService.getProfile().subscribe(data => { //Get Selected User
        this.selectedUser.next(data['user']);
      });
      this.drawNavbarService.deleteUsers();
      this.authService.getAllUser().subscribe(data => { //Get all User
        console.log(data);
        var userArray: User[] = [];

        data['users'].forEach(user => {
          if (user._id != this.selectedUser.getValue()._id) {
            userArray.push(user)
          }
        })

        this.allUsers.next(userArray); //Save User without myself For Searches
        userArray.unshift(this.selectedUser.getValue());  //Add Me at first Place
        this.drawNavbarService.drawUsers(userArray);
      });
      //2. PubThoughtsArray
      this.dataService.getAllPubThought().subscribe(data => { //Get all public Thoughts
        this.publicThoughts.next(data['allThoughts']); //Save PubThoughts for later Search
        this.drawNavbarService.drawPubThoughts(data['allThoughts']); // Draw PubThoughts
      })
      //VIEWER
      this.loadMyThoughts();
    } else {
      this.loggedOut()
    }
  }
  loggedOut() {
    this.clearAll();
    var UserArray: User[] = [];
    UserArray.push(this.guestUser);
    var thoughtArray: Thought[] = [];
    thoughtArray.push(this.welcomeThought);
    this.drawNavbarService.drawUsers(UserArray);
    this.drawNavbarService.drawPubThoughts(thoughtArray);
    this.drawViewerService.drawThoughtsArray(thoughtArray);
    this.selectedUser.next(this.guestUser);
  }

  loadMyThoughts() {

    this.dataService.getAllThought().subscribe(data => { //Get all Private Thoughts
      this.selectedThought.next(this.UserThought); //Take UserThought as Selected Thought
      this.privateThoughts.next(data['allThoughts']); //Save Private Thoughts for Search
      this.selectedThoughtArray.next(data['allThoughts']);
      this.getDimensions(data['allThoughts']); // Get Dimensions of selected Thought Array
      if (this.selectedUser.getValue().startPerspectives.length > 0) {
        this.selectedPerspectives.next(this.selectedUser.getValue().startPerspectives) //load Available  Perspectives of UserPerspectives as Selected Perspective
        this.selectedPerspective.next(this.selectedUser.getValue().startPerspectives[0]) //load first  Perspective of UserPerspectives as Selected Perspective
        this.perspectiveFilter(data['allThoughts'])
      } else {
        this.selectedPerspectives.next(null); // no Perspectives available
        this.selectedPerspective.next(null); // no Perspective Selected
        this.drawViewerService.clearAll(); // Clear Viewer
        this.drawViewerService.drawThoughtsArray(data['allThoughts']); // Draw ThoughtsArray
      }
    })
  }

  getDimensions(thoughts: Thought[]) {
    this.newDimensionsArray = {
      levelDimensions: [],
      dateDimensions: [],
      numberDimensions: [],
      tagDimensions: []
    };
    thoughts.forEach(thought => {
      if (thought.contents.length > 0) {
        this.newDimensionsArray.levelDimensions.push({ label: thought.label, ObjID: thought._id, level: thought.contexts.length })
      }
      if (thought.dateDim.length > 0) {
        thought.dateDim.forEach(dim => {
          if (!this.newDimensionsArray.dateDimensions.find(d => dim.label == d.label))
            this.newDimensionsArray.dateDimensions.push({ label: dim.label })
        })
      }
      if (thought.tagDim.length > 0) {
        thought.tagDim.forEach(dim => {
          if (!this.newDimensionsArray.tagDimensions.find(d => dim.label == d.label))
            this.newDimensionsArray.tagDimensions.push({ label: dim.label })
        })
      }
      if (thought.numberDim.length > 0) {
        thought.numberDim.forEach(dim => {
          if (!this.newDimensionsArray.numberDimensions.find(d => dim.label == d.label))
            this.newDimensionsArray.numberDimensions.push({ label: dim.label })
        })
      }
      this.selectedDimensions.next(this.newDimensionsArray);
      console.log(this.newDimensionsArray);
    })

  }

  changePerspective(perspective: Perspective) {
    if (perspective.label == "specialCode!") {
      this.selectedPerspective.next(null);
      this.drawViewerService.clearAll();
      this.drawViewerService.drawThoughtsArray(this.selectedThoughtArray.getValue());
    } else {
      this.selectedPerspective.next(perspective);
      this.perspectiveFilter(this.selectedThoughtArray.getValue());
    }
    console.log(this.selectedThoughtArray.getValue());

  }

  perspectiveFilter(thoughts: Thought[]) {
    this.drawViewerService.clearAll(); // Clear Viewer

    var relevantLevels: LevelDimension[] = this.selectedPerspective.getValue().dimensions.levelDimensions;
    var relevantDates: DateDimension[] = this.selectedPerspective.getValue().dimensions.dateDimensions;
    var relevantTags: TagDimension[] = this.selectedPerspective.getValue().dimensions.tagDimensions;
    var relevantNumbers: NumberDimension[] = this.selectedPerspective.getValue().dimensions.numberDimensions;
    var newThoughtArray: Thought[] = [];
    thoughts.forEach(thought => {
      var pushIt = false;
      //For each Thought, check if it has any of the relevant Dimensions
      //First check Level, else check other Dimensions
      if (relevantLevels) {
        relevantLevels.forEach(levelDim => {
          if (levelDim.ObjID == thought.contexts[0]) pushIt = true;
        });
      }
      if (relevantDates) {
      relevantDates.forEach(dateDim => {
        thought.dateDim.forEach(date => {
          if (date.label == dateDim.label) pushIt = true;
        });
      });
    }
    if (relevantTags) {
      relevantTags.forEach(tagDim => {
        thought.dateDim.forEach(tag => {
          if (tag.label == tagDim.label) pushIt = true;
        });
      });
    }
    if (relevantNumbers) {
      relevantNumbers.forEach(numberDim => {
        thought.dateDim.forEach(numb => {
          if (numb.label == numberDim.label) pushIt = true;
        });
      });
    }
      if (pushIt) { newThoughtArray.push(thought) };
    })
    this.drawViewerService.drawThoughtsArray(newThoughtArray); // Draw ThoughtsArray
  }

  clearAll() {
    this.drawNavbarService.clearAll();
    this.drawViewerService.clearAll();
  }

  //Load Data: After Login, load private Thoughts, load Users, load Selected User, load public Thoughts
  //Put private and public thoughts into AllThoughts

  defaultSelectedThought() {
    this.selectedThought.next(this.UserThought);
  }

  changeSelectedThought(id) {
    this.dataService.getSingleThought(id).subscribe(data => {
      this.selectedThought.next(data['thought']);
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
