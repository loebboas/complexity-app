import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions } from '@angular/http';
import { AuthService } from './auth.service';


@Injectable()
export class DataService {
	
	options;
	domain = this.authService.domain;

  constructor(
  	private authService: AuthService,
  	private http: Http
  	) { }

  // Function to create headers, add token, to be used in HTTP requests
  createAuthenticationHeaders() {
    this.authService.loadToken(); // Get token so it can be attached to headers
    // Headers configuration options
    this.options = new RequestOptions({
      headers: new Headers({
        'Content-Type': 'application/json', // Format set to JSON
        'authorization': this.authService.authToken // Attach token
      })
    });
  }

  /* ===============================================================
     ADD THOUGHT
  =============================================================== */

  newThought(thought) {
  	this.createAuthenticationHeaders(); // Create headers
  	return this.http.post(this.domain + '/datatransfer/newThought', thought, this.options).map(res => res.json());
  }

   
  /* ===============================================================
     GET DATA
  =============================================================== */
    getAllThought() {
    this.createAuthenticationHeaders(); // Create headers
    return this.http.get(this.domain + '/datatransfer/allThought', this.options).map(res => res.json());
  }

      getSingleThought(id) {
    this.createAuthenticationHeaders(); // Create headers
    return this.http.get(this.domain + '/datatransfer/singleThought/' + id, this.options).map(res => res.json());
  }

      getThoughtByName(label) {
    this.createAuthenticationHeaders(); // Create headers
    return this.http.get(this.domain + '/datatransfer/thoughtByName/' + label, this.options).map(res => res.json());
  }


   /* ===============================================================
     DELETE/UPDATE DATA
  =============================================================== */
    deleteThought(id) {
    this.createAuthenticationHeaders(); // Create headers
    return this.http.delete(this.domain + '/datatransfer/deleteThought/' + id, this.options).map(res => res.json());
  }

    // Function to edit/update Label
    editThought(thought) {
    this.createAuthenticationHeaders(); // Create headers
    return this.http.put(this.domain + '/datatransfer/editThought/', thought, this.options).map(res => res.json());
  }

}

