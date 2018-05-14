import { Injectable } from '@angular/core';
import { User } from '../models/user';
import { PubRoom } from '../models/pubRoom';
import { DataSet, Edge, Node } from 'vis';
import { Thought } from '../models/thought';
import { Observable, of, BehaviorSubject, ReplaySubject } from 'rxjs';
import { NullTemplateVisitor } from '@angular/compiler';

@Injectable({
  providedIn: 'root'
})
export class DrawNavbarService {
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
  showUserContent;
  constructor() { }


  
    // Store Data for Navbar Component as BehaviourSubjects
    public thenodes = new BehaviorSubject<DataSet<Node>>(this.nodes)
    nodesObs = this.thenodes.asObservable();
    public theedges = new BehaviorSubject<DataSet<Edge>>(this.edges);
    edgesObs = this.theedges.asObservable();

  onRoomChange(room: PubRoom) {
    // if (this.lastRoom) {
    //   if (this.lastRoom._id != room._id) {
    //     this.removeRoomNode(room)
    //     this.drawRoomNode(room)
    //   }
    // } else { //First time
    //   this.drawRoomNode(room)
    // }
    // this.lastRoom = room;
  }
  
  // this.nodes.add({ id: 1, label: "Infinity Cloud", group: 0 })                        //Add Infinity Cloud Node
  // //Subscribe to selected User, Room, Thought and NOdes 


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

  drawPubRooms(room) {
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
    // this.dataService.getContent(id).subscribe(data => {
    //   this.showThoughts.push(data['thought']);
    //   if(data['thought'].contents.length > 0) {
    //   data['thought'].contents.forEach(content => {
    //     var i = 0;
    //     this.nodes.add({ id: content._id, label: content.label, group: 3 }) // Add newRoom Node¨
    //     this.edges.add({ from: data['thought']._id, to: content._id, id: content._id + "" + i })   
    //   });
    // }
    // })
  }
  removeThoughtContent(thought) { 
    // thought.contents.forEach(content => {
    //   var i = 0;
    //   this.nodes.remove(content._id)
    //   this.edges.remove(content._id + "" + i )
      
    // });
    // //Delete from Array (That's the easiest way??)
    // this.showThoughts.forEach(showThought => {
    //   var i = 0;
    //   if (showThought._id === thought._id) {
    //     this.showThoughts.splice(i, 1);
        
    // }
    // i++;
    // })
    
    // console.log(this.showThoughts)
  }
}
