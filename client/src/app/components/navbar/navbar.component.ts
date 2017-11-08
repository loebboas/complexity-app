import { Component, OnInit } from '@angular/core';
<<<<<<< HEAD
=======
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';
import { FlashMessagesService } from 'angular2-flash-messages';
>>>>>>> 4b9ac8810f505e5804a1f7def4e486b3cc3d62f2

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
<<<<<<< HEAD
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent implements OnInit {

  constructor() { }
=======
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor(
    public authService: AuthService,
    private router: Router,
    private flashMessagesService: FlashMessagesService
  ) { }

  // Function to logout user
  onLogoutClick() {
    this.authService.logout(); // Logout user
    this.flashMessagesService.show('You are logged out', { cssClass: 'alert-info' }); // Set custom flash message
    this.router.navigate(['/']); // Navigate back to home page
  }
>>>>>>> 4b9ac8810f505e5804a1f7def4e486b3cc3d62f2

  ngOnInit() {
  }

}
