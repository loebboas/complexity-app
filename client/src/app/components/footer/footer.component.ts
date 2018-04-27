import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';
import { Thought } from '../../models/thought';
import { InternalService } from '../../services/internal.service';
import { User } from '../../models/user';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {
  username; userId; starterId;
  selectedThought: Thought;
  user: User;
  //Tools
  showTool: String;

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

  onLogoutClick() {
    this.authService.logout(); // Logout user
    this.router.navigate(['/']); // Navigate back to home page
  }

  ngOnInit() {
    this.authService.getProfile().subscribe(profile => {
      this.user = profile.user;
    });
    this.internalService.selThoughtObs.subscribe(res => this.selectedThought = res);
    this.internalService.selToolObs.subscribe(res => this.showTool = res);
  }

}
