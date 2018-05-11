import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Router } from '@angular/router';
import { Location } from '@angular/common'
import { AuthService } from '../../services/auth.service';
import { InternalService } from '../../services/internal.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class HomeComponent implements OnInit {
 
 constructor(private router: Router,
private authService: AuthService,
private internalService: InternalService) {}

 onLogoutClick() {
  this.authService.logout(); // Logout user
  this.router.navigate(['/']); // Navigate back to home page
  this.internalService.loadUser();
}
  ngOnInit() {
   	
  }

}
