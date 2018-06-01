import { Component, OnInit, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';
import { Thought } from '../../models/thought';
import { InternalService } from '../../services/internal.service';
import { User } from '../../models/user';

import {Directive, QueryList, ViewChildren} from '@angular/core';
import {ActiveDescendantKeyManager, Highlightable} from '@angular/cdk/a11y';
import { Output } from '@angular/core';




@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.css']
})
export class ToolbarComponent implements OnInit {
  username; userId; starterId;
  selectedThought: Thought;
  user: User;
  //Tools
  showTool: String;
  isOpen = false;
  
  constructor(private router: Router,
    public authService: AuthService,
    public internalService: InternalService) { }
  
  changeTool(tool: String) {
    if (this.showTool == tool) {
      this.showTool = "none";
    } else {
      this.showTool = tool;
    }
    this.internalService.changeTool(this.showTool);
  }
 
  loadMyUser(){

  }
  
  onLogoutClick() {
    this.internalService.clearAll();
    this.authService.logout(); // Logout user
    this.router.navigate(['/']); // Navigate back to home page
  }

  ngOnInit() {
    this.internalService.selectedUserObs.subscribe(res => this.user = res);
    console.log(this.authService.loggedIn());
    console.log(this.user);
    this.internalService.selectedThoughtObs.subscribe(res => this.selectedThought = res);
    console.log(this.selectedThought);

    this.internalService.selectedToolObs.subscribe(res => this.showTool = res);
  }

}
