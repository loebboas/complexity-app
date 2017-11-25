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
     GET DATA
  =============================================================== */
    getAllThought() {
    this.createAuthenticationHeaders(); // Create headers
    return this.http.get(this.domain + '/datatransfer/allThought', this.options).map(res => res.json());
  }
     getEverything() {
    this.createAuthenticationHeaders(); // Create headers
    return this.http.get(this.domain + '/datatransfer/everything', this.options).map(res => res.json());
  }


    getBotThought(id) {
    this.createAuthenticationHeaders(); // Create headers
    return this.http.get(this.domain + '/datatransfer/botThought/' + id, this.options).map(res => res.json());
  }
    getTopThought(id) {
    this.createAuthenticationHeaders(); // Create headers
    return this.http.get(this.domain + '/datatransfer/topThought/' + id, this.options).map(res => res.json());
  }
    getLeftThought(id) {
    this.createAuthenticationHeaders(); // Create headers
    return this.http.get(this.domain + '/datatransfer/leftThought/' + id, this.options).map(res => res.json());
  } 
    getRightThought(id) {
    this.createAuthenticationHeaders(); // Create headers
    return this.http.get(this.domain + '/datatransfer/rightThought/' + id, this.options).map(res => res.json());
  }


    getBotLink() {
    this.createAuthenticationHeaders(); // Create headers
    return this.http.get(this.domain + '/datatransfer/botLink', this.options).map(res => res.json());
  }
  

    getSingleThought(id) {
    this.createAuthenticationHeaders(); // Create headers
    return this.http.get(this.domain + '/datatransfer/singleThought/' + id, this.options).map(res => res.json());
  }

      getThoughtByName(value) {
    this.createAuthenticationHeaders(); // Create headers
    return this.http.get(this.domain + '/datatransfer/thoughtByName/' + value, this.options).map(res => res.json());
  }


   /* ===============================================================
     DELETE/UPDATE DATA
  =============================================================== */
    deleteThought(id) {
    this.createAuthenticationHeaders(); // Create headers
    return this.http.delete(this.domain + 'datatransfer/deleteThought/' + id, this.options).map(res => res.json());
  }

   // Function to edit/update blog post
    editThought(thought) {
    this.createAuthenticationHeaders(); // Create headers
    return this.http.put(this.domain + 'datatransfer/editThought/', thought, this.options).map(res => res.json());
  }

/* ===============================================================
     ADD DATA
  =============================================================== */

    newBotLink(botLink) {
    this.createAuthenticationHeaders(); // Create headers
    return this.http.post(this.domain + '/datatransfer/newBotLink', botLink, this.options).map(res => res.json());
  }

    newLeftLink(leftLink) {
    this.createAuthenticationHeaders(); // Create headers
    return this.http.post(this.domain + '/datatransfer/newLeftLink', leftLink, this.options).map(res => res.json());
  }

    newRightLink(rightLink) {
    this.createAuthenticationHeaders(); // Create headers
    return this.http.post(this.domain + '/datatransfer/newRightLink', rightLink, this.options).map(res => res.json());
  }

    newTopLink(topLink) {
    this.createAuthenticationHeaders(); // Create headers
    return this.http.post(this.domain + '/datatransfer/newTopLink', topLink, this.options).map(res => res.json());
  }


    newThought(thought) {
  	this.createAuthenticationHeaders(); // Create headers
  	return this.http.post(this.domain + '/datatransfer/newThought', thought, this.options).map(res => res.json());
  }
 }
