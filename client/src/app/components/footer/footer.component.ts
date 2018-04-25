import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';
import { Thought } from '../../models/thought';
import { InternalService } from '../../services/internal.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {
  username; userId; starterId;
  selectedThought: Thought;
  //Tools
  showNew = false;
  showEdit = false;

  constructor(private router: Router,
    public authService: AuthService,
    public internalService: InternalService) { }

  onChangeView() {
    if (this.selectedThought.showAs == "grid") { this.selectedThought.showAs = "card" }
    else { this.selectedThought.showAs = "grid" };

    this.internalService.changeShowAs(this.selectedThought);
  }

  onLogoutClick() {
    this.authService.logout(); // Logout user
    this.router.navigate(['/']); // Navigate back to home page
  }

  ngOnInit() {
    this.authService.getProfile().subscribe(profile => {
      this.username = profile.user.username; // Used when creating new blog posts and comments
      this.userId = profile.user._id;
      this.starterId = profile.user.starter;
    });
    this.internalService.selThoughtObs.subscribe(res => this.selectedThought = res);
  }

}
