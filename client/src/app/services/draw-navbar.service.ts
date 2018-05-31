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
  user: User;
  nodes = new DataSet([
  ]);
  edges = new DataSet([
  ]);

  constructor() { }
    // Store Data for Navbar Component as BehaviourSubjects
    public thenodes = new BehaviorSubject<DataSet<Node>>(this.nodes)
    nodesObs = this.thenodes.asObservable();
    public theedges = new BehaviorSubject<DataSet<Edge>>(this.edges);
    edgesObs = this.theedges.asObservable();

  loadRooms(rooms: PubRoom[]){
    //draw Nodes for each PubRoom, make selected Room bigger and in Center! ??Which is Selected Room
  }

  changeRoom(room: PubRoom) {
    //animation toward chosen Room
    //Chosen Room in Middle and Bigger
    }
  
    loadUser(user: User){

}

deleteUser(){}

}
