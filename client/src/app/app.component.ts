import { Component, OnInit, Output } from '@angular/core';
import { InternalService } from './services/internal.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'Complexity-App';
  opened: boolean;
  showTool;
  viewerY: number;
  navbarY: number;
  constructor(private internalService: InternalService) { }

 
  ngOnInit() {
    this.internalService.selectedToolObs.subscribe(tool => {
    if(tool == "sidenav"){
     this.opened = true;
    } else {
      this.opened = false;
    }
  })
  }

}

