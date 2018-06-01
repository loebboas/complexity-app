import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Thought } from '../../models/thought';
import { DataSet, Network, Node, Edge } from 'vis';
import { InternalService } from '../../services/internal.service';
import { AuthService } from '../../services/auth.service';
import { User } from '../../models/user';
import { DataService } from '../../services/data.service';
import { DrawNavbarService } from '../../services/draw-navbar.service';



@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class NavbarComponent implements OnInit {
  nodes = new DataSet([
  ]);
  edges = new DataSet([
  ]);
  data = {
    nodes: this.nodes,
    edges: this.edges
  };
  options;
  
  network;
  constructor(public internalService: InternalService, public drawNavbarService: DrawNavbarService) { }




  ngOnInit() {
    this.internalService.loadData();
    this.drawNavbarService.navbarNodesObs.subscribe(nodes => this.data.nodes = nodes);
    this.drawNavbarService.navbarEdgesObs.subscribe(edges => this.data.edges = edges);
    this.drawNavbarService.navbarOptionsObs.subscribe(options => this.options = options);
    var  container = document.getElementById('navbar');
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








