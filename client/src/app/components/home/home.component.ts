import { Component, OnInit } from '@angular/core';
<<<<<<< HEAD
=======
import { AuthService } from '../../services/auth.service';
>>>>>>> 4b9ac8810f505e5804a1f7def4e486b3cc3d62f2

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
<<<<<<< HEAD
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {

  constructor() { }
=======
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(
    public authService: AuthService
  ) { }
>>>>>>> 4b9ac8810f505e5804a1f7def4e486b3cc3d62f2

  ngOnInit() {
  }

}
