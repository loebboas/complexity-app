import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions } from '@angular/http';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { tokenNotExpired } from 'angular2-jwt';



@Injectable()
export class AuthService {

domain = "";
authToken;
user;
options;


  constructor(
    private http: HttpClient
  	) { }

    // Function to create headers, add token, to be used in HTTP requests
  createAuthenticationHeaders() {
    this.loadToken(); // Get token so it can be attached to headers
    // Headers configuration options
    if(this.authToken){
    this.options = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json', // Format set to JSON
        'authorization': this.authToken // Attach token
      })
    }
    }
  }
 
 
  	  // Function to get token from client local storage
  loadToken() {
  this.authToken = localStorage.getItem('token'); // Get token and asssign to variable to be used elsewhere
  	}
  registerUser(user) {
    return this.http.post(this.domain + '/authentication/register', user);
  }
  editUser(user) {
    return this.http.put(this.domain + '/authentication/edit', user);
  }
  // Function to check if username is taken
  checkUsername(username) {
    return this.http.get(this.domain + '/authentication/checkUsername/' + username);
  }

  // Function to check if e-mail is taken
  checkEmail(email) {
    return this.http.get(this.domain + '/authentication/checkEmail/' + email);
  }
  // Function to login user
  login(user) {
    return this.http.post(this.domain + '/authentication/login', user);
  }
   // Function to logout
  logout() {
    this.authToken = null; // Set token to null
    this.user = null; // Set user to null
    localStorage.clear(); // Clear local storage
  }
   // Function to store user's data in client local storage
  storeUserData(token, user) {
    localStorage.setItem('token', token); // Set token in local storage
    localStorage.setItem('user', JSON.stringify(user)); // Set user in local storage as string
    this.authToken = token; // Assign token to be used elsewhere
    this.user = user;       // Set user to be used elsewhere
  }
  

  // Function to get user's profile data
  getProfile() {
    this.createAuthenticationHeaders(); // Create headers before sending to API
    return this.http.get(this.domain + '/authentication/profile', this.options);
  }
  getAllUser() {
    this.createAuthenticationHeaders(); // Create headers before sending to API
    return this.http.get(this.domain + '/authentication/allUser', this.options);
  }
  
    // Function to check if user is logged in
  loggedIn() {
    return tokenNotExpired();
  }

}
 
