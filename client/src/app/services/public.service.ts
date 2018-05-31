import { Injectable } from '@angular/core';

import { HttpClient, HttpHeaders } from '@angular/common/http';
import { AuthService } from './auth.service';
import { Thought } from '../models/thought';
import { BehaviorSubject } from 'rxjs';


@Injectable()
export class PublicService {
  options;
  domain = this.authService.domain;
  constructor(
    private authService: AuthService,
  	private http: HttpClient) { }

     // Function to create headers, add token, to be used in HTTP requests
  createAuthenticationHeaders() {
    this.authService.loadToken(); // Get token so it can be attached to headers
    // Headers configuration options
    this.options = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json', // Format set to JSON
        'authorization': this.authService.authToken // Attach token
      })
    }
  }
 
  getAllPubRooms() {
    this.createAuthenticationHeaders(); // Create headers
    return this.http.get(this.domain + '/public/allPubRooms', this.options);
  }
  
  getPubRoom(id) {
    this.createAuthenticationHeaders(); // Create headers
    return this.http.get(this.domain + '/public/getPubRoom/' + id, this.options);
  }

  getRoomContent(id) { //Fehlt noch!
    this.createAuthenticationHeaders(); // Create headers
    return this.http.get(this.domain + '/public/getPubContent/' + id, this.options);
  }

  getPubContent(id) {
    this.createAuthenticationHeaders(); // Create headers
    return this.http.get(this.domain + '/public/getPubContent/' + id, this.options);
  }

  getPubThought(id) {
    this.createAuthenticationHeaders(); // Create headers
    return this.http.get(this.domain + '/public/getPubThought/' + id, this.options);
  }
}
