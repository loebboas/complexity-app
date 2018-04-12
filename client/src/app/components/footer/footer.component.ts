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
  selectedThought: Thought;
  constructor(private router: Router,
    public authService: AuthService,
  public internalService: InternalService) { }

    onChangeView() {
      if(this.selectedThought.showAs == "grid") { this.selectedThought.showAs = "card" }
      else {this.selectedThought.showAs = "grid"};
      
      this.internalService.changeShowAs(this.selectedThought);
    }

    onLogoutClick() {
      this.authService.logout(); // Logout user
      this.router.navigate(['/']); // Navigate back to home page
    }
    
  ngOnInit() {
    this.internalService.selThoughtObs.subscribe(res => this.selectedThought = res);
  }

}
