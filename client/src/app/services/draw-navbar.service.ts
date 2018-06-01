import { Injectable } from '@angular/core';
import { User } from '../models/user';
import { DataSet, Edge, Node } from 'vis';
import { Thought } from '../models/thought';
import { Observable, of, BehaviorSubject, ReplaySubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DrawNavbarService {
 activeUsers: User[] = [];
 activeThoughts: Thought[] = [];
  nodes = new DataSet([
  ]);
  edges = new DataSet([
  ]);
  options = {
    nodes: {
      shape: 'dot',
      size: 99,
      font: {
        size: 15,
        color: '#111111'
      },
    }
  };

  constructor() { }
    // Store Data for Navbar Component as BehaviourSubjects
    public navbarNodes = new BehaviorSubject<DataSet<Node>>(this.nodes)
    navbarNodesObs = this.navbarNodes.asObservable();
    public navbarEdges = new BehaviorSubject<DataSet<Edge>>(this.edges);
    navbarEdgesObs = this.navbarEdges.asObservable();
    public navbarOptions = new BehaviorSubject(this.options);
    navbarOptionsObs = this.navbarOptions.asObservable();

    clearAll(){
      this.nodes.clear();
      this.edges.clear();
    }

    drawPubThoughts(thoughts: Thought[]){
      if(thoughts){
      thoughts.forEach(thought => {
        this.nodes.add({ id: thought._id, label: thought.label});
        if(thought.contents){
        thought.contents.forEach(function (content, index){
          var linkID = thought._id + index;
          this.edges.add({ id: linkID, from: thought._id, to: content._id  })
        })
      };
        this.activeThoughts.push(thought);
      })
    }
    }

    addPubThought(thought: Thought){
    }

    deleteUsers(){
      if(this.activeUsers.length > 0){
      this.activeUsers.forEach(user => {
        this.nodes.remove(user._id)
      })
    }
    }

    drawUsers(users: User[]) {
     if(users){
       
      users.forEach(user => {
        this.nodes.add({ id: user._id, label: user.username});
        this.activeUsers.push(user);
      })
       this.navbarNodes.next(this.nodes);
    }
  }
  }