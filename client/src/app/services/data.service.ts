import { Injectable } from '@angular/core';
import { Headers, RequestOptions } from '@angular/http';
import { AuthService } from './auth.service';
import { Thought } from '../models/thought';
import { HttpClient, HttpHeaders } from '@angular/common/http';


@Injectable()
export class DataService {

  options;
  domain = this.authService.domain;


  constructor(
    private authService: AuthService,
    private http: HttpClient
  ) { }

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

  /* ===============================================================
     ADD DATA
  =============================================================== */

  newThought(thought) {
    this.createAuthenticationHeaders(); // Create headers
    return this.http.post(this.domain + '/api/newThought', thought, this.options);
  }

  /* ===============================================================
     GET DATA
  =============================================================== */

  getAllThought() {
    this.createAuthenticationHeaders(); // Create headers
    return this.http.get(this.domain + '/api/allThought', this.options);
  }
  getAllPubThought() {
    this.createAuthenticationHeaders(); // Create headers
    return this.http.get(this.domain + '/api/allPubThought', this.options);
  }

  getSingleThought(id) {
    this.createAuthenticationHeaders(); // Create headers
    return this.http.get(this.domain + '/api/singleThought/' + id, this.options);
  }


  /* ===============================================================
    DELETE/UPDATE DATA
 =============================================================== */
  deleteThought(id) {
    this.createAuthenticationHeaders(); // Create headers
    return this.http.delete(this.domain + '/api/deleteThought/' + id, this.options);
  }

  // Function to edit/update Label
  editThought(editthought) {
    this.createAuthenticationHeaders(); // Create headers
    return this.http.put(this.domain + '/api/editThought/', editthought, this.options);
  }

}

