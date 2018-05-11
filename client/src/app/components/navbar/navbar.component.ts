import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Thought } from '../../models/thought';
import { DataSet, Network } from 'vis';
import { InternalService } from '../../services/internal.service';
import { AuthService } from '../../services/auth.service';
import { User } from '../../models/user';
import { PubRoom } from '../../models/pubRoom';
import { DataService } from '../../services/data.service';



@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class NavbarComponent implements OnInit {
  selectedThought: Thought;
  selectedRoom: PubRoom;
  lastRoom: PubRoom;
  selectedNode: Thought;
  private: any[];
  public: any[];
  rooms: any[];
  friends: any[];
  user: User;
  nodes = new DataSet([
  ]);
  edges = new DataSet([
  ]);
  network;
  goId;
  lastId;
  showUserContent = false;
  showMyNetworks = false;
  showMyRooms = false;
  showMyFriends = false;
  showThoughts: Thought[] = [];

  data = {
    nodes: this.nodes,
    edges: this.edges
  };
  options = {
    nodes: {
      shape: 'dot',
      size: 15,
      font: {
        size: 15,
        color: '#111111'
      },
      borderWidth: 2,
      shadow: true,
    },
    layout: {
      hierarchical: {
        sortMethod: 'directed'
      }

    },
    groups: {  //0 = InfinityCloud, 1 = Other Rooms, 2 = selected Room, 3 = User, 4 = Private, 5 = Public, 6 = Rooms, 7 = Friends, 8 = SelectedRoom.Contents
      0: {
        size: 40,
        color: '#A59BB2',
        font: { size: 16, strokeWidth: 3, strokeColor: 'white' },
      },
      1: {
        size: 30,
        color: '#84729C',
        font: { size: 22, strokeWidth: 3, strokeColor: 'white' }
      },
      2: {
        color: '#55558E',
        size: 15,
        font: { size: 18, strokeWidth: 3, strokeColor: 'white' }
      },

      3: {
        color: '#4C2C76',
        size: 15,
        font: { size: 14, strokeWidth: 3, strokeColor: 'white' }
      },
      4: {
        color: '#361265',
        size: 15,
        font: { size: 12, strokeWidth: 3, strokeColor: 'white' }
      },
      5: {
        color: '#361265',
        size: 15,
        font: { size: 12, strokeWidth: 3, strokeColor: 'white' }
      },
      6: {
        color: '#361265',
        size: 15,
        font: { size: 12, strokeWidth: 3, strokeColor: 'white' }
      },
    },
    edges: {
      width: 2
    }
  };
  constructor(public internalService: InternalService, private authService: AuthService, private dataService: DataService) { }

  showContentNodes(id) {
    this.dataService.getContent(id).subscribe(data => { console.log(data); })
  }

  onRoomChange(room: PubRoom) {
    if (this.lastRoom) {
      if (this.lastRoom._id != room._id) {
        this.removeRoomNode(room)
        this.drawRoomNode(room)
      }
    } else { //First time
      this.drawRoomNode(room)
    }
    this.lastRoom = room;
  }

  onUserChange(user: User) {
    if (this.user) {                                                                      //If its not the first Time a User is set
      if (user._id != this.user._id) {                                                    //and as long as it isnt the same as the last User
        this.removeUserNodes(user);
        this.drawUserNodes(user);
      }
    } else {
      this.user = user;                                                                 // First User (=Guest)
      this.nodes.add({ id: "3", label: this.user.username, group: 2 })        // Add Guest Node
    }
  }
  onThoughtChange(thought: Thought) {
    // Make selectedThought Node visible differently
 
  }


  onNodeChange(node: Thought) { }





  //Drawing Functions

  drawRoomNode(room) {
    this.selectedRoom = room;
    this.nodes.add({ id: this.selectedRoom._id, label: this.selectedRoom.label, group: 1 }) // Add newRoom Node¨
    this.edges.add({ from: 1, to: this.selectedRoom._id, id: "3l" })
    this.edges.add({ from: this.selectedRoom._id, to: this.user._id, id: "2l" })
  }

  removeRoomNode(room) {
    if (room._id != this.lastRoom._id) {
      this.nodes.remove(this.lastRoom._id);
      this.edges.remove("3l");
      this.edges.remove("2l");
    }
  }

  drawUserNodes(user) {
    //Remove the Edge from Room to Guest/User
    this.user = user;
    this.nodes.add({ id: this.user._id, label: this.user.username, group: 2 })          //Add User Node
    this.edges.add({ from: this.selectedRoom._id, to: this.user._id, id: "2l" })        //Add Edge from Room to User
  }
  removeUserNodes(user) {
    if (this.nodes.get("3")) this.nodes.remove("3");                                 //Remove the Guest UserNode, if found
    if (this.nodes.get(user._id)) this.nodes.remove(user._id);                       //Remove other UserNode, if found
    this.edges.remove("2l")                                                         //Remove Edge from Room to User
  }
  drawUserContent() {
    this.showUserContent = true;
    this.nodes.add({ id: 4, label: "My Networks", group: 8, first: true })              //Add Networks Node
    this.edges.add({ from: this.user._id, to: 4, id: "4l" })                            //Add Edge from User to Networks
    this.nodes.add({ id: 5, label: "My Rooms", group: 9, first: true })                 //Add Rooms Node
    this.edges.add({ from: this.user._id, to: 5, id: "5l" })                            //Add Edge from User to Rooms
    this.nodes.add({ id: 6, label: "My Friends", group: 10, first: true })                  //Add Friends Node
    this.edges.add({ from: this.user._id, to: 6, id: "6l" })                            //Add Edge from User to Friends
  }
  removeUserContent() {
    this.nodes.remove(4)                                //Remove Networks Node
    this.edges.remove("4l")                            //Remove Edge from User to Networks
    this.nodes.remove(5)                                //Remove Rooms Node
    this.edges.remove("5l")                            //Remove Edge from User to Rooms
    this.nodes.remove(6)                                //Remove Friends Node
    this.edges.remove("6l")                             //Remove Edge from User to Friends
  }
  drawMyNetworks() {
    this.user.private.forEach(network => {
      var i = 0;
      this.nodes.add({ id: network._id, label: network.label, group: 3 });               //Add Networks Nodes
      this.edges.add({ from: 4, to: network._id, id: "networks" + i });
    })
  }
  removeMyNetworks() {
    this.user.private.forEach(network => {
      var i = 0;
      this.nodes.remove(network._id);               //Add Networks Nodes
      this.edges.remove("networks" + i);
    })
  }
  drawPublic() {

  }
  drawMyRooms() {
    this.user.rooms.forEach(room => {                                                   //For Each of the Rooms
      room._id = room._id + "-Link";                      //Create a New ID for the Link 
      var i = 0;                                      //If Room isnt selected Room
      this.nodes.add({ id: room._id, label: room.label, group: 4 })                     //Add Room 
      this.edges.add({ from: 5, to: room._id, id: "rooms" + i })                                        //Add Edge from MyRooms to Room 

    })
  }
  removeMyRooms() {
    console.log(this.nodes);
    this.user.rooms.forEach(room => {                                                   //For Each of the Rooms
      var i = 0;                                      //If Room isnt selected Room
      console.log(room._id);
      this.nodes.remove(room._id);                     //Remove Roomlink 
      this.edges.remove("rooms" + i)                                        //Add Edge from MyRooms to Room 

    })
    console.log(this.nodes);
  }
  drawMyFriends() {
    this.user.friends.forEach(friend => {                                              //Add all Friends as Nodes
      var i = 0;                                      //If Room isnt selected Room
      this.nodes.add({ id: friend._id, label: friend.label, group: 5 })                     //Add Room 
      this.edges.add({ from: 6, to: friend._id, id: "friend" + i })                                        //Add Edge from MyRooms to Room 
    })
  }
  removeMyFriends() {
    this.user.friends.forEach(friend => {
      var i = 0;                                                      //Add all Friends as Nodes
      this.nodes.remove(friend._id)
      this.edges.remove("friend" + i)
    })
  }

  drawThoughtContent(id) {
    this.dataService.getContent(id).subscribe(data => {
      this.showThoughts.push(data['thought']);
      if(data['thought'].contents.length > 0) {
      data['thought'].contents.forEach(content => {
        var i = 0;
        this.nodes.add({ id: content._id, label: content.label, group: 3 }) // Add newRoom Node¨
        this.edges.add({ from: data['thought']._id, to: content._id, id: content._id + "" + i })   
      });
    }
    })
  }
  removeThoughtContent(thought) { 
    thought.contents.forEach(content => {
      var i = 0;
      this.nodes.remove(content._id)
      this.edges.remove(content._id + "" + i )
      
    });
    //Delete from Array (That's the easiest way??)
    this.showThoughts.forEach(showThought => {
      var i = 0;
      if (showThought._id === thought._id) {
        this.showThoughts.splice(i, 1);
        
    }
    i++;
    })
    
    console.log(this.showThoughts)
  }


  ngOnInit() {
    //load User on Init if LoggedIn
    if (this.authService.loggedIn()) {
      this.internalService.loadUser();
    }
    //Groups: 0 = InfCloud, 1 = selRoom, 1a = selRoom Content, 2 = User, 3 = networks, 3a = networks content, 4 = rooms, 5 = friends 
    //Static IDs: 
    // Nodes: 1 = InfCl, 2 = Welcome, 3 = Guest, 4 = Networks, 5 = Rooms, 6 = Friends
    // Edges: 1l = InfCl-Room, 2l = Room-User, 

    //Create Infinity-Cloud Node
    this.nodes.add({ id: 1, label: "Infinity Cloud", group: 0 })                        //Add Infinity Cloud Node
    //Subscribe to selected User, Room, Thought and NOdes 
    this.internalService.selectedUserObs.subscribe(user => this.onUserChange(user));    //Subscribe to User, on UserChange
    this.internalService.selectedRoomObs.subscribe(room => { if (this.user) { this.onRoomChange(room) } });    //Subscribe to selected Room, onRoomChange
    this.internalService.selectedThoughtObs.subscribe(thought => { if (this.selectedRoom) { this.onThoughtChange(thought); console.log(thought); } });    //Subscribe to selected Room, onRoomChange
    this.internalService.selectedNodeObs.subscribe(node => { if (this.user) { this.onNodeChange(node) } });    //Subscribe to selected Room, onRoomChange
    //Later: Subscribe to trending/close by public Rooms

    var container = document.getElementById('navbar');
    this.network = new Network(container, this.data, this.options);

    //0 = InfinityCloud, 1 = Other Rooms, 2 = selected Room, 3 = User + UserDimensions, 4 = networks, 5 = public, 6 = Rooms, 7 = Friends, 8 = SelectedRoom.Contents
    //this.network.on("click", params => {
    //console.log(params);
    // this.showContentNodes(this.nodes.get(params.nodes[0]));
    //});

    this.network.on('click', params => {
      if(params.nodes.length > 0){
      const selectedNode = this.nodes.get(params.nodes[0])
      if (selectedNode['id'] == this.user._id) {  // If clickOn User: Draw/Remove User Content
        if (this.showUserContent) {
          this.removeUserContent();
          this.showUserContent = false;
        } else {
          this.drawUserContent();
          this.showUserContent = true;
        }
      } else if (selectedNode['id'] == 4) { // If clickOn Networks: Draw/Remove My Networks
        if (this.showMyNetworks) {
          this.removeMyNetworks();
          this.showMyNetworks = false;
        } else {
          this.drawMyNetworks();
          this.showMyNetworks = true;
        }
      } else if (selectedNode['id'] == 5) {   //If clickOn MyRooms Draw/Remove MyRooms
        if (this.showMyRooms) {
          this.removeMyRooms();
          this.showMyRooms = false;
        } else {
          this.drawMyRooms();
          this.showMyRooms = true;
        }
      } else if (selectedNode['id'] == 6) { //If clickOn Friends Draw/Remove Friends
        if (this.showMyFriends) {
          this.removeMyFriends();
          this.showMyFriends = false;
        } else {
          this.drawMyFriends();
          this.showMyFriends = true;
        }
      } else if (selectedNode['group'] == 3) {    //If ClickOn My Thoughts (MyNetworks and below)

        if(this.showThoughts.length > 0){
        const selectedThought = this.showThoughts.filter(thought => thought._id == selectedNode['id'])
        if (selectedThought.length > 0) {
          this.removeThoughtContent(selectedThought[0]);
        } else {
          this.drawThoughtContent(selectedNode['id']);
          this.internalService.changeThought(selectedNode['id']);
        }
      } else {
        this.drawThoughtContent(selectedNode['id']);
        this.internalService.changeThought(selectedNode['id']);
      } 

      } else if (selectedNode['group'] == 4) {    
        var roomId = selectedNode['id'].substring(0, selectedNode['id'].length() - 5); //remove the "-Link" Addon
        this.internalService.changeRoom(roomId)
      }
    }
    });
    this.network.on('doubleClick', params => {
      if(params.nodes.length > 0){
      const selectedNode = this.nodes.get(params.nodes[0])
      if (selectedNode['group'] = 4) {
        this.internalService.changeRoom(selectedNode['id']);
      } else if (selectedNode['group'] = 5) {
        console.log("you dblClicked Friends!")
      }
    }
    })







  }

}








