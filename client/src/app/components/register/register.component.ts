import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';
import { DataService } from '../../services/data.service';
import { Thought } from '../../models/thought';
import { InternalService } from '../../services/internal.service';
import { PubRoom } from '../../models/pubRoom';

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
  startNetwork: Thought;
  plans :Thought;
  diary: Thought;


  projectsId;
  sessionsId;
  favoritesId;
  todoId;
  startId: string;
  userData;
  timeline; goals; projects;
  today; week; month; year; life;
  memory; feeling; all;
  infcl; publ; rooms; ptho;
  dauser;
  privateArray: any[];
  privateObj;

  firstFormGroup: FormGroup;
  secondFormGroup: FormGroup;
  thirdFormGroup: FormGroup;
  userRoom: PubRoom;
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
      if (!data['success']) {
        this.messageClass = 'alert alert-danger';
        this.message = data['message'];
        this.processing = false;
        this.enableForm();
      } else {
        this.messageClass = 'alert alert-success';
        this.message = data['message'];
        this.userId = data['user']._id;

        //Login User 
        const user = {
          username: this.firstFormGroup.get('username').value, // Username input field
          password: this.firstFormGroup.get('password').value // Password input field
        }

        // Function to send login data to API
        this.authService.login(user).subscribe(data => {
          this.authService.storeUserData(data['token'], data['user'])



          //Create UserRoom
          this.userRoom = {
            label: this.firstFormGroup.get('username').value + "'s-Room",
            admin: [this.userId],
            members: [],
            contents: [],
            dimensions: [{ label: "Creation Time", dimtype: "Date", val: Date.now.toString() }],
            activeUsers: [this.userId],
            visible: "open"
          }

          console.log(this.userRoom)
          this.dataService.newPubRoom(this.userRoom).subscribe(data => {
            this.userRoom = data['pubRoom'];
            console.log(this.userRoom)
            console.log(data);



            //add Public Room to Users Rooms
            const editUser = {
              _id: this.userId,
              rooms: [this.userRoom._id]
            };
            this.authService.editUser(editUser).subscribe(data => {


              //Load User and change Room
              this.internalService.loadUser();
            })
          });
        });
      }
    });

  }

  onNetworkSubmit() {
    const network: Thought = {  // rename as "User/Username or Persona"
      label: this.secondFormGroup.get('network').value,
      level: 0,
      color: "#FFFFFF",
      clicks: 0,
      showAs: "grid",
      user: this.userId,
      contexts: [],
      contents: [],
      dimensions: [],
      texture: "",
      form: "circle",
      privacy: "private",
      grid: { colspan: 0, rowspan: 0, x: 0, y: 0, rows: 3, cols: 7 }
    };


    this.dataService.newThought(network).subscribe(data => {
      this.startNetwork = data['thought'];
      const editUser = {
        _id: this.userId,
        private: [this.startNetwork._id]
      };
      this.authService.editUser(editUser).subscribe(data => {
           //Load User and change Room
           this.internalService.loadUser();
      });
    });
  }


  onStarterNetworkSubmit() {
    const diary: Thought = { 
      label: "Diary",
      level: 1,
      color: "#ccffcc",
      clicks: 0,
      showAs: "grid",
      user: this.userId,
      contexts: [this.startNetwork._id],
      contents: [],
      dimensions: [],
      texture: "",
      form: "circle",
      privacy: "private",
      grid: { colspan: 0, rowspan: 0, x: 0, y: 0, rows: 3, cols: 3 }
    };

    const plans: Thought = {
      label: "Plans",
      level: 1,
      color: "#99ccff",
      clicks: 0,
      showAs: "grid",
      user: this.userId,
      contexts: [this.startNetwork._id],
      contents: [],
      dimensions: [],
      texture: "",
      form: "circle",
      privacy: "private",
      grid: { colspan: 0, rowspan: 0, x: 0, y: 0, rows: 3, cols: 3 }
    };

    this.dataService.newThought(diary).subscribe(data => {
      this.diary = data['thought'];
      this.dataService.newThought(plans).subscribe(data => {
        this.plans = data['thought'];

        const goals: Thought = {
          label: "Goals",
          level: 2,
          color: "#99ddff",
          clicks: 0,
          showAs: "grid",
          user: this.userId,
          contexts: [this.plans._id, this.startNetwork._id],
          contents: [],
          dimensions: [],
          texture: "",
          form: "circle",
          privacy: "private",
          grid: { colspan: 0, rowspan: 0, x: 0, y: 0, rows: 3, cols: 7 }
        };
    
        this.dataService.newThought(goals).subscribe(data => {
          this.goals = data['thought'];

                  const editPlans = {
                    _id: this.plans._id,
                    editContents: [this.goals._id]
                  };
                  this.dataService.editThought(editPlans).subscribe(data => {

                    const editStartNetwork = {
                      _id: this.startNetwork._id,
                      editContents: [this.diary._id, this.plans._id]
                    };
                    this.dataService.editThought(editStartNetwork).subscribe(data => {
  

                        this.processing = true; // Lock form fields	
                        // Function to send blog object to backend

                        // Check if PUT request was a success or not
                        if (!data['success']) {
                          this.messageClass = 'alert alert-danger'; // Set error bootstrap class
                          this.message = data['message']; // Set error message
                          this.processing = false; // Unlock form fields
                        } else {
                          this.messageClass = 'alert alert-success'; // Set success bootstrap class
                          this.message = data['message']; // Set success message
                          // After two seconds, navigate back to blog page 
                        }
                      });
                      });
                    });
                  });
                });
           
    this.internalService.changeThought(this.startNetwork._id);
    this.router.navigate(['/viewer/']); // Redirect to Persona
  }
  // Function to check if e-mail is taken
  checkEmail() {
    // Function from authentication file to check if e-mail is taken
    this.authService.checkEmail(this.firstFormGroup.get('email').value).subscribe(data => {
      // Check if success true or false was returned from API
      if (!data['success']) {
        this.emailValid = false; // Return email as invalid
        this.emailMessage = data['message']; // Return error message
      } else {
        this.emailValid = true; // Return email as valid
        this.emailMessage = data['message']; // Return success message
      }
    });
  }

  // Function to check if username is available
  checkUsername() {
    // Function from authentication file to check if username is taken
    this.authService.checkUsername(this.firstFormGroup.get('username').value).subscribe(data => {
      // Check if success true or success false was returned from API
      if (!data['success']) {
        this.usernameValid = false; // Return username as invalid
        this.usernameMessage = data['message']; // Return error message
      } else {
        this.usernameValid = true; // Return username as valid
        this.usernameMessage = data['message']; // Return success message
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
      network: ['', Validators.required]
    });
    this.thirdFormGroup = this.formBuilder.group({

    });
  }

}