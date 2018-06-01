import { Component, OnInit, Input, AfterContentInit } from '@angular/core';
import { Thought } from '../../models/thought';
import { DataService } from '../../services/data.service';
import { InternalService } from '../../services/internal.service';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';
import { User } from '../../models/user';
import { Network, DataSet } from 'vis';
import { DrawViewerService } from '../../services/draw-viewer.service';



@Component({
  selector: 'app-viewer',
  templateUrl: './viewer.component.html',
  styleUrls: ['./viewer.component.css']
})
export class ViewerComponent implements OnInit {
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
  
   constructor(private dataService: DataService,
               private internalService: InternalService,
               private router: Router,
              private authService: AuthService,
               private drawViewerService: DrawViewerService) { }

    ngOnInit() {
      this.drawViewerService.viewerNodesObs.subscribe(nodes => this.data.nodes = nodes);
      this.drawViewerService.viewerEdgesObs.subscribe(edges => this.data.edges = edges);
      this.drawViewerService.viewerOptionsObs.subscribe(options => this.options = options);
      var  container = document.getElementById('mainbar');
      this.network = new Network(container, this.data, this.options);
      this.network.on("click", params => {
        if(params.nodes.length) { 
          this.internalService.changeSelectedThought(params.nodes[0]);
        } else {
          this.internalService.defaultSelectedThought();
        }
        });
    }
    
}
