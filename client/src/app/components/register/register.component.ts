import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';
import { DataService } from '../../services/data.service';
import { Thought } from '../../models/thought';
import { InternalService } from '../../services/internal.service';

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
  startId;
  userData;
  timeline; goals; projects; diary;
  today; week; month; year; life; 
  memory; feeling; all;
  infcl; publ; rooms; ptho;
  dauser;

  firstFormGroup: FormGroup;
  secondFormGroup: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private authService: AuthService,
    private dataService: DataService,
    private router: Router,
    private internalService: InternalService
   ) {
  }

  // Function to create registration form
  

  // Function to disable the registration form
  disableForm() {
    this.firstFormGroup.controls['email'].disable();
    this.firstFormGroup.controls['username'].disable();
    this.firstFormGroup.controls['password'].disable();
    this.firstFormGroup.controls['confirm'].disable();
  }

  // Function to enable the registration form
  enableForm() {
    this.firstFormGroup.controls['email'].enable();
    this.firstFormGroup.controls['username'].enable();
    this.firstFormGroup.controls['password'].enable();
    this.firstFormGroup.controls['confirm'].enable();
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
  onRegisterSubmit() {
  	this.processing = true;
    this.disableForm();
    
  //Create Starter Object

  	// Create user object form user's inputs
    const user = {
      email: this.firstFormGroup.get('email').value, // E-mail input field
      username: this.firstFormGroup.get('username').value, // Username input field
      password: this.firstFormGroup.get('password').value // Password input field
     
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
      username: this.firstFormGroup.get('username').value, // Username input field
      password: this.firstFormGroup.get('password').value // Password input field
    }

    // Function to send login data to API
    this.authService.login(user).subscribe(data => {
          this.authService.storeUserData(data.token, data.user)
     
        });
      }
    });
    
  }
    
   onPersonaSubmit() { 
      //CREATE APP OBJECTS LVL -2
    
    const infcl = {
      label: "Infinity Cloud", 
      level: -2,
      user: this.userId,
      dimensions: [],
      showAs: "grid",
      privacy: "locked"
    };
    
    this.dataService.newThought(infcl).subscribe(data => {
      this.infcl = data.newId;
          //CREATE APP OBJECTS LVL -1

          const dauser = {
            label: this.firstFormGroup.get('username').value, 
            level: -1,
            user: this.userId,
            dimensions: [],
            contexts: [{ _id: this.infcl }],
            showAs: "grid",
            privacy: "locked"
          };
        
          this.dataService.newThought(dauser).subscribe(data => {
            this.dauser = data.newId;

        
          const rooms = {
            label: "Public Rooms", 
            level: -1,
            user: this.userId,
            showAs: "grid",
            dimensions: [],
            contexts: [{ _id: this.infcl }],
            privacy: "locked"
          };

          const ptho = {
            label: "Popular Thoughts", // input field
            level: -1,
            user: this.userId,
            showAs: "grid",
            dimensions: [],
            contexts: [{ _id: this.infcl }],
            privacy: "locked"
          };

          
             //CREATE APP OBJECTS LVL 0

             const compApp = {
              label: this.secondFormGroup.get('persona').value, 
              level: 0,
              user: this.userId,
              dimensions: [],
              contexts: [{ _id: this.dauser }, { _id: this.infcl }],
              showAs: "grid",
              privacy: "locked"
            };

         
                   this.dataService.newThought(rooms).subscribe(data => {
                     this.rooms = data.newId;
                        this.dataService.newThought(ptho).subscribe(data => {
                          this.ptho = data.newId;
                          this.dataService.newThought(compApp).subscribe(data => {
                            this.startId = data.newId;  
                        
                            const editInf = {
                              _id: this.infcl,
                              editContexts: [{_id: this.infcl }],
                              editContents: [{ _id: this.dauser }, { _id: this.rooms }, { _id: this.ptho }]
                            };
                            this.dataService.editThought(editInf).subscribe(data => {
        
                              const editdauser = {
                                _id: this.dauser,
                                editContents: [{ _id: this.startId }]
                              };
                              this.dataService.editThought(editdauser).subscribe(data => {

                                
        //LEVEL 1

          const memories = {
              label: "Memories", 
              level: 1,
              user: this.userId,
              showAs: "grid",
              dimensions: [],
              contexts: [{ _id: this.startId }],
              privacy: "locked"
            };
  
            const myroom = {
              label: "My Room",  
              level: 1,
              user: this.userId,
              showAs: "grid",
              dimensions: [],
              contexts: [{ _id: this.startId }],
              privacy: "locked"
            };
  
              const todo = {
              label: "Plans",  
              level: 1,
              user: this.userId,
              showAs: "grid",
              dimensions: [],
              contexts: [{ _id: this.startId }],
              privacy: "locked"
            };
  
          this.dataService.newThought(memories).subscribe(data => {
            this.sessionsId = data.newId;
                   this.dataService.newThought(myroom).subscribe(data => {
                     this.favoritesId = data.newId;
                        this.dataService.newThought(todo).subscribe(data => {
                          this.todoId = data.newId;
                          
           
                        

                          //LEVEL 2
                        
          const diary = {
            label: "Diary",  
            level: 2,
            user: this.userId,
            showAs: "grid",
            dimensions: [],
            contexts: [{ _id: this.sessionsId }, { _id: this.startId }],
            privacy: "locked"
          };

          const timeline = {
            label: "Unstructured",   
            level: 2,
            user: this.userId,
            showAs: "list",
            dimensions: [],
            contexts: [{ _id: this.sessionsId }, { _id: this.startId }],
            privacy: "locked"
          };

          const goals = {
            label: "Goals",   
            level: 2,
            user: this.userId,
            showAs: "grid",
            dimensions: [],
            contexts: [{ _id: this.todoId }, { _id: this.startId }],
            privacy: "locked"
          };

          const projects = {
            label: "Projects",  
            level: 2,
            user: this.userId,
            showAs: "grid",
            dimensions: [],
            contexts: [{ _id: this.todoId }, { _id: this.startId }],
            privacy: "locked"
          };
          this.dataService.newThought(timeline).subscribe(data => {
            this.timeline = data.newId;
                   this.dataService.newThought(diary).subscribe(data => {
                     this.diary = data.newId;
                        this.dataService.newThought(goals).subscribe(data => {
                          this.goals = data.newId;
                          this.dataService.newThought(projects).subscribe(data => {
                            this.projects = data.newId;

                            const editThought = {
                              _id: this.startId,
                              editContents: [{ _id: this.sessionsId }, { _id: this.favoritesId }, { _id: this.todoId }]
                            };
                            this.dataService.editThought(editThought).subscribe(data => {

                            const editPlans = {
                              _id: this.todoId,
                              editContents: [{ _id: this.goals }, { _id: this.projects }]
                             };
                             const editMemories = {
                              _id: this.sessionsId,
                              editContents: [{ _id: this.timeline }, { _id: this.diary }]
                             };
                        this.dataService.editThought(editPlans).subscribe(data => {
                          this.dataService.editThought(editMemories).subscribe(data => {


                            //LEVEL 3: GOALS

            const today = {
            label: "Today",   
            level: 3,
            user: this.userId,
            showAs: "list",
            dimensions: [],
            contexts: [{ _id: this.goals }, { _id: this.todoId }, { _id: this.startId }],
            privacy: "locked"
          };

          const week = {
            label: "This Week",    
            level: 3,
            user: this.userId,
            showAs: "list",
            dimensions: [],
            contexts: [{ _id: this.goals }, { _id: this.todoId }, { _id: this.startId }],
            privacy: "locked"
          };
          const month = {
            label: "This Month",    
            level: 3,
            user: this.userId,
            showAs: "list",
            dimensions: [],
            contexts: [{ _id: this.goals }, { _id: this.todoId }, { _id: this.startId }],
            privacy: "locked"
          };

          const year = {
            label: "This Year",    
            level: 3,
            user: this.userId,
            showAs: "list",
            dimensions: [],
            contexts: [{ _id: this.goals }, { _id: this.todoId }, { _id: this.startId }],
            privacy: "locked"
          };
          const life = {
            label: "Lifetime",    
            level: 3,
            user: this.userId,
            showAs: "list",
            dimensions: [],
            contexts: [{ _id: this.goals }, { _id: this.todoId }, { _id: this.startId }],
            privacy: "locked"
          };    
          const all = {
            label: "Goals - Timeline",   
            level: 3,
            user: this.userId,
            showAs: "timeline",
            dimensions: [],
            contexts: [{ _id: this.goals }, { _id: this.todoId },{ _id: this.startId }],
            privacy: "locked"
          };    
                  this.dataService.newThought(today).subscribe(data => {
                  this.today = data.newId;
                    this.dataService.newThought(week).subscribe(data => {
                    this.week = data.newId;
                      this.dataService.newThought(month).subscribe(data => {
                        this.month = data.newId;
                          this.dataService.newThought(year).subscribe(data => {
                          this.year = data.newId;
                            this.dataService.newThought(life).subscribe(data => {
                            this.life = data.newId;
                            this.dataService.newThought(all).subscribe(data => {
                              this.all = data.newId;
                            const editGoals = {
                              _id: this.goals,
                              editContents: [{ _id: this.today }, { _id: this.week }, { _id: this.month }, { _id: this.year }, { _id: this.life }, { _id: this.all }]                          
                             };
                            this.dataService.editThought(editGoals).subscribe(data => {
                 
                     //LEVEL 3: Diary

                     const feelings = {
                      label: "Feelings", 
                      level: 3,
                      user: this.userId,
                      showAs: "list",
                      dimensions: [],
                      contexts: [{ _id: this.diary }, { _id: this.sessionsId },{ _id: this.startId }],
                      privacy: "locked"
                    };
          
                    const memory = {
                      label: "Happenings", // input field
                      level: 3,
                      user: this.userId,
                      showAs: "list",
                      dimensions: [],
                      contexts: [{ _id: this.diary }, { _id: this.sessionsId },{ _id: this.startId }],
                      privacy: "locked"
                    };

                    this.dataService.newThought(feelings).subscribe(data => {
                      this.feeling = data.newId;
                        this.dataService.newThought(memory).subscribe(data => {
                        this.memory = data.newId;

                        const editDiary = {
                          _id: this.diary,
                          editContents: [{ _id: this.feeling }, { _id: this.memory }]
                         };
                        this.dataService.editThought(editDiary).subscribe(data => {
                          const editUser = {
                            _id: this.userId,
                            editStarter: this.startId,
                            editUnstructured: this.timeline,
                            editGoals: this.all,
                            editFeelings: this.feeling,
                            editHappenings: this.memory
                           };
                           console.log(editUser);
                           this.authService.editUser(editUser).subscribe(data => {
                              this.processing = true; // Lock form fields	
                              // Function to send blog object to backend
                                
                              // Check if PUT request was a success or not
                              if (!data.success) {
                                this.messageClass = 'alert alert-danger'; // Set error bootstrap class
                                this.message = data.message; // Set error message
                                this.processing = false; // Unlock form fields
                              } else {
                                this.messageClass = 'alert alert-success'; // Set success bootstrap class
                                this.message = data.message; // Set success message
                                // After two seconds, navigate back to blog page 
                            } 
                        
                            this.internalService.loadThoughts();
                            this.internalService.changeThought(this.startId);
                            console.log(this.messageClass)
                            setTimeout(() => {
                            this.router.navigate(['/viewer']); // Redirect to viewer
                            
                                    }, 1500);
                                 
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

  // Function to check if e-mail is taken
  checkEmail() {
    // Function from authentication file to check if e-mail is taken
    this.authService.checkEmail(this.firstFormGroup.get('email').value).subscribe(data => {
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
    this.authService.checkUsername(this.firstFormGroup.get('username').value).subscribe(data => {
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
    this.firstFormGroup = this.formBuilder.group({
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
      ])],
      // Confirm Password Input
      confirm: ['', Validators.required] // Field is required
    }, { validator: this.matchingPasswords('password', 'confirm') }); // Add custom validator to form for matching passwords

    this.secondFormGroup = this.formBuilder.group({
      persona: ['', Validators.required]
    });
  }

}