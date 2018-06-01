import { Injectable } from '@angular/core';
import { DataSet, Edge, Node } from 'vis';
import { BehaviorSubject } from 'rxjs';
import { Thought } from '../models/thought';

@Injectable({
  providedIn: 'root'
})
export class DrawViewerService {
  activeThoughts: Thought[] = [];
  nodes = new DataSet([
  ]);
  edges = new DataSet([
  ]);
  options = {
    nodes: {
      shape: 'dot',
      size: 10,
      font: {
        size: 15,
        color: '#111111'
      },
    },
    groups: {
      dateDim: {color:{background:'red'}, size:3},
      numberDim: {color:{background:'blue'}, size:3},
      tagDim: {color:{background:'green'}, size:3},
    }
  };

  constructor() { }
  // Store Data for Navbar Component as BehaviourSubjects
  public viewerNodes = new BehaviorSubject<DataSet<Node>>(this.nodes)
  viewerNodesObs = this.viewerNodes.asObservable();

  public viewerEdges = new BehaviorSubject<DataSet<Edge>>(this.edges);
  viewerEdgesObs = this.viewerEdges.asObservable();

  public viewerOptions = new BehaviorSubject(this.options);
  viewerOptionsObs = this.viewerOptions.asObservable();

  drawThoughtsArray(thoughts: Thought[]) {
    console.log(thoughts);
    if (thoughts) {
      thoughts.forEach(thought => { //Draw Nodes for all Thoughts in Array
        this.nodes.add({ id: thought._id, label: thought.label });
        if(thought.dateDim){
          thought.dateDim.forEach(dim => {
            this.nodes.add({ id: dim._id, label: dim.label + " " + dim.val.toString(), group: 'dateDim' })
            this.edges.add({ from: thought._id, to: dim._id, length: 1  })
          })
        }
        if(thought.numberDim){
          thought.numberDim.forEach(dim => {
            this.nodes.add({ id: dim._id, label: dim.label + " " + dim.val, group: 'numberDim' })
            this.edges.add({ from: thought._id, to: dim._id, length: 1  })
          })
        }
        if(thought.tagDim){
          thought.tagDim.forEach(dim => {
            this.nodes.add({ id: dim._id, label: dim.label + " " + dim.val, group: 'tagDim' })
            this.edges.add({ from: thought._id, to: dim._id, length: 1  })
          })
        }
      });
     
      thoughts.forEach(thought => { //Draw Edges for all Thoughts with Contents
        var checkThought: Thought = thought;
        if (checkThought.contents) {
          checkThought.contents.forEach(content => {
            this.edges.add({ from: checkThought._id, to: content })
          })
        }
        this.activeThoughts.push(thought);
      })
    }
  }
  clearAll() {
    this.nodes.clear();
    this.edges.clear();
  }

  changeThoughts(thoughts: Thought[]) {
    //for Each Thought: Write Nodes/Edges/Levels...
    //User if Data loaded for first Time and if Change in "Room"/ThoughtArray
  }

  drawDimension(thoughts: Thought[]) {
    //Write each Thought of that Dimension: Write Nodes/Edges/Levels...
  }

  removeDimension(thoughts: Thought[]) {
    //Write each Thought of that Dimension: Write Nodes/Edges/Levels...
  }

}
