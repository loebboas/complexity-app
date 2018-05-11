import { Component, OnInit } from '@angular/core';
import { Thought } from '../../../models/thought';
import { DataSet, Network } from 'vis';
import { InternalService } from '../../../services/internal.service';

@Component({
  selector: 'app-network',
  templateUrl: './network.component.html',
  styleUrls: ['./network.component.css']
})
export class NetworkComponent implements OnInit {
  selectedThought: Thought;
  saveIds: string[];
  contents: Thought[];
  contexts: Thought[];
  siblings: Thought[];
  nodeIds = [1];
  nodes = new DataSet([
  ]);
  edges = new DataSet([
  ]);
  network;
  goId;
  lastId;

  data = {
    nodes: this.nodes,
    edges: this.edges
  };
  options = {
    layout: {
      hierarchical: {
        sortMethod: 'directed'
      }
    },
    nodes: {
      shape: 'dot',
      size: 30,
      font: {
        size: 32,
        color: '#111111'
      },
      borderWidth: 2,
      shadow: true,
    },
    groups: {
      0: {
        size: 15,
        color: '#A59BB2',
        font: { size: 16, strokeWidth: 3, strokeColor: 'white' },
      },
      1: {
        size: 30,
        color: '#84729C',
        font: { size: 22, strokeWidth: 3, strokeColor: 'white' }
          },
      2: { color: '#55558E',
      size: 25,
      font: { size: 18, strokeWidth: 3, strokeColor: 'white' }
     },
      
      3: { color: '#4C2C76',
      size: 20,
      font: { size: 14, strokeWidth: 3, strokeColor: 'white' }
     },
     4: { color: '#361265',
     size: 10,
     font: { size: 12, strokeWidth: 3, strokeColor: 'white' }
    },

    },
    edges: {
      width: 2
    }
  };
  constructor(public internalService: InternalService) { }

  ngOnInit() {

    
    this.internalService.selectedThoughtObs.subscribe(selT => {
      this.selectedThought = selT;
      if (this.selectedThought) {
        this.nodes.clear();
        this.edges.clear();
        this.lastId = false;
        this.selectedThought.contexts.reverse();
        this.selectedThought.contexts.forEach(context => { // Add Node for each Context
          this.nodes.add({ id: context._id, label: context.label, group: 0 }); // Add Node for Context
          if (this.lastId) {
            this.edges.add({ from: this.lastId, to: context._id })      // Add Edge to Selected Thought
          }
          this.lastId = context._id;
        });
        this.nodes.add({ id: this.selectedThought._id, label: this.selectedThought.label, group: 1 });
        this.edges.add({ from: this.lastId, to: this.selectedThought._id })      // Add Selected Thought
        

        this.selectedThought.contents.forEach(content => {
          this.nodes.add({ id: content._id, label: content.label, group: 3 });
          this.edges.add({ from: this.selectedThought._id, to: content._id })      // Add Contents
        });
        this.selectedThought.dimensions.forEach(dimension => {
          if(dimension.dimtype == "Date"){
            let newDate = new Date(dimension.val);
          this.nodes.add({ id: dimension._id, label: dimension.label + " " + newDate.toLocaleDateString(), group: 4 });
        } else { 

          this.nodes.add({ id: dimension._id, label: dimension.label + " " + dimension.val, group: 2 });
        }
          this.edges.add({ from: this.selectedThought._id, to: dimension._id })      // Add Dimensions
        });
      }
   
    

    var container = document.getElementById('contentnet');
    this.network = new Network(container, this.data, this.options);

    this.network.on("click", params => {
      this.goId = params.nodes[0];
      if(params.nodes[0]) { this.internalService.changeThought(this.goId);
        var options = {
          position: {x: params.pointer.canvas.x, y: params.pointer.canvas.y},
          scale: 1,
          offset: {x:0, y:0},
          animation: true // default duration is 1000ms and default easingFunction is easeInOutQuad.
        };
        this.network.moveTo(options);
      
      };
    });
  });



  }

}
