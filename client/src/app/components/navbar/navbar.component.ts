import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Thought } from '../../models/thought';
import { DataSet, Network } from 'vis';
import { InternalService } from '../../services/internal.service';
import { AuthService } from '../../services/auth.service';
import { User } from '../../models/user';
import { PubRoom } from '../../models/pubRoom';
import { DataService } from '../../services/data.service';
import { DrawNavbarService } from '../../services/draw-navbar.service';



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
      'infCloud': { //Infinity Cloud
        size: 40,
        color: '#A59BB2',
        font: { size: 16, strokeWidth: 3, strokeColor: 'white' },
      },
      'pubRooms': { //showPublicRooms
        first: {
          size: 30,
        },
        size: 5,
        color: '#84729C',
        font: { size: 22, strokeWidth: 3, strokeColor: 'white' }
      },
      'selPubRoom': {
        color: '#55558E',
        size: 15,
        font: { size: 18, strokeWidth: 3, strokeColor: 'white' }
      },

      'user': {
        color: '#4C2C76',
        size: 15,
        font: { size: 14, strokeWidth: 3, strokeColor: 'white' }
      },
      'myNetworks': {
        color: '#361265',
        size: 15,
        font: { size: 12, strokeWidth: 3, strokeColor: 'white' }
      },
      'myRooms': {
        color: '#361265',
        size: 15,
        font: { size: 12, strokeWidth: 3, strokeColor: 'white' }
      },
      'myFriends': {
        color: '#361265',
        size: 15,
        font: { size: 12, strokeWidth: 3, strokeColor: 'white' }
      },
      'thoughts': {
        font: { size: 12, strokeWidth: 3, strokeColor: 'white' }
      },
    },
    edges: {
      width: 2
    }
  };
  constructor(public internalService: InternalService, public drawNavbarService: DrawNavbarService) { }



  ngOnInit() {
    this.drawNavbarService.nodesObs.subscribe(nodes => this.nodes = nodes);
    this.drawNavbarService.edgesObs.subscribe(edges => this.edges = edges);
   
    var container = document.getElementById('navbar');
    this.network = new Network(container, this.data, this.options);

    //0 = InfinityCloud, 1 = Other Rooms, 2 = selected Room, 3 = User + UserDimensions, 4 = networks, 5 = public, 6 = Rooms, 7 = Friends, 8 = SelectedRoom.Contents
    //this.network.on("click", params => {
    //console.log(params);
    // this.showContentNodes(this.nodes.get(params.nodes[0]));
    //});

    // this.network.on('click', params => {
    //   if(params.nodes.length > 0){
    //   const selectedNode = this.nodes.get(params.nodes[0])
    //   if (selectedNode['id'] == this.user._id) {  // If clickOn User: Draw/Remove User Content
    //     if (this.showUserContent) {
    //       this.drawNavbarService.removeUserContent();
    //       this.showUserContent = false;
    //     } else {
    //       this.drawNavbarService.drawUserContent();
    //       this.showUserContent = true;
    //     }
    //   } else if (selectedNode['id'] == 4) { // If clickOn Networks: Draw/Remove My Networks
    //     if (this.showMyNetworks) {
    //       this.drawNavbarService.removeMyNetworks();
    //       this.showMyNetworks = false;
    //     } else {
    //       this.drawNavbarService.drawMyNetworks();
    //       this.showMyNetworks = true;
    //     }
    //   } else if (selectedNode['id'] == 5) {   //If clickOn MyRooms Draw/Remove MyRooms
    //     if (this.showMyRooms) {
    //       this.drawNavbarService.removeMyRooms();
    //       this.showMyRooms = false;
    //     } else {
    //       this.drawNavbarService.drawMyRooms();
    //       this.showMyRooms = true;
    //     }
    //   } else if (selectedNode['id'] == 6) { //If clickOn Friends Draw/Remove Friends
    //     if (this.showMyFriends) {
    //       this.drawNavbarService.removeMyFriends();
    //       this.showMyFriends = false;
    //     } else {
    //       this.drawNavbarService.drawMyFriends();
    //       this.showMyFriends = true;
    //     }
    //   } else if (selectedNode['group'] == 3) {    //If ClickOn My Thoughts (MyNetworks and below)

    //     if(this.showThoughts.length > 0){
    //     const selectedThought = this.showThoughts.filter(thought => thought._id == selectedNode['id'])
    //     if (selectedThought.length > 0) {
    //       this.drawNavbarService.removeThoughtContent(selectedThought[0]);
    //     } else {
    //       this.drawNavbarService.drawThoughtContent(selectedNode['id']);
    //       this.internalService.changeThought(selectedNode['id']);
    //     }
    //   } else {
    //     this.drawNavbarService.drawThoughtContent(selectedNode['id']);
    //     this.internalService.changeThought(selectedNode['id']);
    //   } 

    //   } else if (selectedNode['group'] == 4) {    
    //     var roomId = selectedNode['id'].substring(0, selectedNode['id'].length() - 5); //remove the "-Link" Addon
    //     this.internalService.changeRoom(roomId)
    //   }
    // }
    // });
    // this.network.on('doubleClick', params => {
    //   if(params.nodes.length > 0){
    //   const selectedNode = this.nodes.get(params.nodes[0])
    //   if (selectedNode['group'] = 4) {
    //     this.internalService.changeRoom(selectedNode['id']);
    //   } else if (selectedNode['group'] = 5) {
    //     console.log("you dblClicked Friends!")
    //   }
    // }
    // })







  }

}








