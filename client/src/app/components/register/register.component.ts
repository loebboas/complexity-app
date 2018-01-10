import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';
import { DataService } from '../../services/data.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  form;
  message;
  messageClass;
  processing = false;
  emailValid;
  emailMessage;
  usernameValid;
  usernameMessage;
  userId;
  projectsId;
  sessionsId;
  favoritesId;
  todoId;
  roomId;

  constructor(
    private formBuilder: FormBuilder,
    private authService: AuthService,
    private dataService: DataService,
    private router: Router
   ) {
    this.createForm(); // Create Angular 2 Form when component loads
  }

  // Function to create registration form
  createForm() {
    this.form = this.formBuilder.group({
      // Email Input
      email: ['', Validators.compose([
        Validators.required, // Field is required
        Validators.minLength(5), // Minimum length is 5 characters
        Validators.maxLength(30), // Maximum length is 30 characters
        this.validateEmail // Custom validation
      ])],
      // Username Input
      username: ['', Validators.compose([
        Validators.required, // Field is required
        Validators.minLength(3), // Minimum length is 3 characters
        Validators.maxLength(15), // Maximum length is 15 characters
        this.validateUsername // Custom validation
      ])],
      // Password Input
      password: ['', Validators.compose([
        Validators.required, // Field is required
        Validators.minLength(8), // Minimum length is 8 characters
        Validators.maxLength(35), // Maximum length is 35 characters
        this.validatePassword // Custom validation
      ])],
      // Confirm Password Input
      confirm: ['', Validators.required] // Field is required
    }, { validator: this.matchingPasswords('password', 'confirm') }); // Add custom validator to form for matching passwords
  }

  // Function to disable the registration form
  disableForm() {
    this.form.controls['email'].disable();
    this.form.controls['username'].disable();
    this.form.controls['password'].disable();
    this.form.controls['confirm'].disable();
  }

  // Function to enable the registration form
  enableForm() {
    this.form.controls['email'].enable();
    this.form.controls['username'].enable();
    this.form.controls['password'].enable();
    this.form.controls['confirm'].enable();
  }

  // Function to validate e-mail is proper format
  validateEmail(controls) {
    // Create a regular expression
    const regExp = new RegExp(/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/);
    // Test email against regular expression
    if (regExp.test(controls.value)) {
      return null; // Return as valid email
    } else {
      return { 'validateEmail': true } // Return as invalid email
    }
  }

  // Function to validate username is proper format
  validateUsername(controls) {
    // Create a regular expression
    const regExp = new RegExp(/^[a-zA-Z0-9]+$/);
    // Test username against regular expression
    if (regExp.test(controls.value)) {
      return null; // Return as valid username
    } else {
      return { 'validateUsername': true } // Return as invalid username
    }
  }

  // Function to validate password
  validatePassword(controls) {
    // Create a regular expression
    const regExp = new RegExp(/^(?=.*?[a-z])(?=.*?[A-Z])(?=.*?[\d])(?=.*?[\W]).{8,35}$/);
    // Test password against regular expression
    if (regExp.test(controls.value)) {
      return null; // Return as valid password
    } else {
      return { 'validatePassword': true } // Return as invalid password
    }
  }

  // Funciton to ensure passwords match
  matchingPasswords(password, confirm) {
    return (group: FormGroup) => {
      // Check if both fields are the same
      if (group.controls[password].value === group.controls[confirm].value) {
        return null; // Return as a match
      } else {
        return { 'matchingPasswords': true } // Return as error: do not match
      }
    }
  }

  // Function to submit form
 // Function to submit form
  onRegisterSubmit() {
  	this.processing = true;
  	this.disableForm();
  	// Create user object form user's inputs
    const user = {
      email: this.form.get('email').value, // E-mail input field
      username: this.form.get('username').value, // Username input field
      password: this.form.get('password').value // Password input field
    }
    
    this.authService.registerUser(user).subscribe(data => {
     if (!data.success) {
     	this.messageClass = 'alert alert-danger';
     	this.message = data.message;
     	this.processing = false;
     	this.enableForm();
     } else {
     	this.messageClass = 'alert alert-success';
     	this.message = data.message;
      this.userId = data.user._id;

      //Login User 
      const user = {
      username: this.form.get('username').value, // Username input field
      password: this.form.get('password').value // Password input field
    }

    // Function to send login data to API
    this.authService.login(user).subscribe(data => {
          this.authService.storeUserData(data.token, data.user)
          const myroom = {
            value: "My-Room", // input field
            user: this.userId,
            form: "sphere",
            privacy: "private"
          };
    
          const sessions = {
            value: "Sessions", // input field
            user: this.userId,
            form: "sphere",
            privacy: "private"
          };

          const favorites = {
            value: "Favorites", // input field
            user: this.userId,
            form: "sphere",
            privacy: "private"
          };

            const todo = {
            value: "ToDo", // input field
            user: this.userId,
            form: "sphere",
            privacy: "private"
          };

            const projects = {
            value: "Projects", // input field
            user: this.userId,
            form: "sphere",
            privacy: "private"
          };



          //Save Starting Data
        this.dataService.newThought(myroom).subscribe(data => {
            this.roomId = data.newId;
          this.dataService.newThought(sessions).subscribe(data => {
            this.sessionsId = data.newId;
                   this.dataService.newThought(favorites).subscribe(data => {
                     this.favoritesId = data.newId;
                        this.dataService.newThought(todo).subscribe(data => {
                          this.todoId = data.newId;
                          this.dataService.newThought(projects).subscribe(data => {
                            this.projectsId = data.newId;

                              //Create Session Links
                                      const sessionLink = {
                                      user: this.userId,
                                      scale: this.roomId,
                                      thought: this.sessionsId, 
                                      type: "meaning",
                                      position: 1
                                    };

                                      const favoritesLink = {
                                      user: this.userId,
                                      scale: this.roomId,
                                      thought: this.favoritesId, 
                                      type: "meaning",
                                      position: 2
                                    };
                                     const todoLink = {
                                      user: this.userId,
                                      scale: this.roomId,
                                      thought: this.todoId, 
                                      type: "meaning",
                                      position: 3
                                    };
                                    const sessionLinkb = {
                                      user: this.userId,
                                      scale: this.sessionsId,
                                      thought: this.roomId, 
                                      type: "context",
                                      position: 1
                                    };

                                      const favoritesLinkb = {
                                      user: this.userId,
                                      scale: this.favoritesId,
                                      thought: this.roomId, 
                                      type: "context",
                                      position: 2
                                    };
                                     const todoLinkb = {
                                      user: this.userId,
                                      scale: this.todoId,
                                      thought: this.roomId, 
                                      type: "context",
                                      position: 3
                                    };
                                      const projectLink = {
                                      user: this.userId,
                                      scale: this.projectsId,
                                      thought: this.roomId, 
                                      type: "before",
                                      position: 1
                                    };
                                      const projectLinkb = {
                                      user: this.userId,
                                      scale: this.roomId,
                                      thought: this.projectsId, 
                                      type: "after",
                                      position: 1
                                    };
                                      this.dataService.newLink(sessionLink).subscribe(data => {
                                        this.dataService.newLink(favoritesLink).subscribe(data => {
                                           this.dataService.newLink(todoLink).subscribe(data => {
                                             this.dataService.newLink(sessionLinkb).subscribe(data => {
                                                        this.dataService.newLink(favoritesLinkb).subscribe(data => {
                                                           this.dataService.newLink(todoLinkb).subscribe(data => {
                                                             this.dataService.newLink(projectLinkb).subscribe(data => {
                                                               this.dataService.newLink(projectLink).subscribe(data => {
                                    setTimeout(() => {
                                    this.router.navigate(['/login']); // Redirect to login view
                                    }, 500);
                                
                                       });
                                                                 
                                    });
                                  });
                                });
                            });
                          });
                      });
                    });
                  });
                });
              }); 
            });
        });
     });
          }
    });

  }

  // Function to check if e-mail is taken
  checkEmail() {
    // Function from authentication file to check if e-mail is taken
    this.authService.checkEmail(this.form.get('email').value).subscribe(data => {
      // Check if success true or false was returned from API
      if (!data.success) {
        this.emailValid = false; // Return email as invalid
        this.emailMessage = data.message; // Return error message
      } else {
        this.emailValid = true; // Return email as valid
        this.emailMessage = data.message; // Return success message
      }
    });
  }

  // Function to check if username is available
  checkUsername() {
    // Function from authentication file to check if username is taken
    this.authService.checkUsername(this.form.get('username').value).subscribe(data => {
      // Check if success true or success false was returned from API
      if (!data.success) {
        this.usernameValid = false; // Return username as invalid
        this.usernameMessage = data.message; // Return error message
      } else {
        this.usernameValid = true; // Return username as valid
        this.usernameMessage = data.message; // Return success message
      }
    });
  }


  ngOnInit() {
  }

}