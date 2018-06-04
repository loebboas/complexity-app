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
    physics: {
      forceAtlas2Based: {
        gravitationalConstant: -26,
        centralGravity: 0.005,
        springLength: 230,
        springConstant: 0.18
      },
      maxVelocity: 146,
      solver: 'forceAtlas2Based',
      timestep: 0.35,
      stabilization: { iterations: 150 }
    },
    groups: {
      dateDim: { color: { background: 'red' }, size: 5 },
      numberDim: { color: { background: 'blue' }, size: 5 },
      tagDim: { color: { background: 'green' }, size: 5 },
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
        if (thought.dateDim) {
          thought.dateDim.forEach(dim => {
            if (!this.nodes.get("Timeline")) {
              this.nodes.add({ id: "Timeline", label: "Time Dimensions", group: 'dateDim' })
            }
            this.nodes.add({ id: dim._id, group: 'dateDim' })
            this.edges.add({ from: thought._id, to: dim._id, length: 0 })
            if (!this.nodes.get(dim.label)) {
              this.nodes.add({ id: dim.label, label: dim.label, group: 'dateDim' })
              this.edges.add({ from: dim._id, to: dim.label, length: 0, color: 'green' })
              this.edges.add({ from: dim.label, to: "Timeline", length: 0, color: 'green' })
            }
          })
        }
        if (thought.numberDim) {
          thought.numberDim.forEach(dim => {
            if (!this.nodes.get("Numbers")) {
              this.nodes.add({ id: 'Numbers', label: 'Number Dimensions', group: 'numberDim' })
            }
            this.nodes.add({ id: dim._id, group: 'numberDim' })
            this.edges.add({ from: thought._id, to: dim._id, length: 0 })
            if (!this.nodes.get(dim.label)) {
              this.nodes.add({ id: dim.label, label: dim.label, group: 'numberDim' })
              this.edges.add({ from: dim._id, to: dim.label, length: 0, color: 'yellow' })
              this.edges.add({ from: dim.label, to: 'Numbers', length: 0, color: 'yellow' })
            }
          })
        }
        if (thought.tagDim) {
          thought.tagDim.forEach(dim => {
            if (!this.nodes.get("Tags")) {
              this.nodes.add({ id: 'Tags', label: 'Tag Dimensions', group: 'tagDim' })
            }
            this.nodes.add({ id: dim._id, group: 'tagDim' })
            this.edges.add({ from: thought._id, to: dim._id, length: 0 })
            if (!this.nodes.get(dim.label)) {
              this.nodes.add({ id: dim.label, label: dim.label, group: 'tagDim' })
              this.edges.add({ from: dim._id, to: dim.label, length: 0, color: 'red' })
              this.edges.add({ from: dim.label, to: 'Tags', length: 0, color: 'red' })
            }
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
