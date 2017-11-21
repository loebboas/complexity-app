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

    // Function to get all blogs from the database
    getAllThought() {
    this.createAuthenticationHeaders(); // Create headers
    return this.http.get(this.domain + '/datatransfer/allThought', this.options).map(res => res.json());
  }

    getAllLink() {
    this.createAuthenticationHeaders(); // Create headers
    return this.http.get(this.domain + '/datatransfer/allLink', this.options).map(res => res.json());
  }

    // Function to edit/update blog post
    editThought(thought) {
    this.createAuthenticationHeaders(); // Create headers
    return this.http.put(this.domain + 'datatransfer/updateThought/', thought, this.options).map(res => res.json());
  }

    getSingleThought(id) {
    this.createAuthenticationHeaders(); // Create headers
    return this.http.get(this.domain + '/datatransfer/singleThought/' + id, this.options).map(res => res.json());
  }

    // Function to delete a blog
    deleteThought(id) {
    this.createAuthenticationHeaders(); // Create headers
    return this.http.delete(this.domain + 'datatransfer/deleteThought/' + id, this.options).map(res => res.json());
  }

    newThoughtBot(thoughtBot) {
    this.createAuthenticationHeaders(); // Create headers
    return this.http.post(this.domain + '/datatransfer/newThoughtBot', thoughtBot, this.options).map(res => res.json());
  }
   newLinkBot(linkBot) {
    this.createAuthenticationHeaders(); // Create headers
    return this.http.post(this.domain + '/datatransfer/newLinkBot', linkBot, this.options).map(res => res.json());
  }

    newThought(thought) {
  	this.createAuthenticationHeaders(); // Create headers
  	return this.http.post(this.domain + '/datatransfer/newThought', thought, this.options).map(res => res.json());
  }
 }
