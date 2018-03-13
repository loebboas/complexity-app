# complexity-app
Application for structuring and visualisation of complex concepts


** COMPLEXITY-APP PSEUDO-CODE **
________________________________________________________________________________________________________________________________________
I. BACKEND


///////////////////////// A. SCHEMAS 

// User Model Definition
const userSchema = new Schema({
  email: { type: String, required: true, unique: true, lowercase: true, validate: emailValidators },
  username: { type: String, required: true, unique: true, lowercase: true, validate: usernameValidators },
  password: { type: String, required: true, validate: passwordValidators }
});

const thoughtSchema = new Schema({
    value: String,
    context: [{type: Schema.Types.ObjectId, ref: 'Thought'}],
    perspective: [{type: Schema.Types.ObjectId, ref: 'Thought'}],
    meaning: [{type: Schema.Types.ObjectId, ref: 'Thought'}],
    position: String,
    time: String,
    form: String,
    texture: String,
    privacy: String,
    user: {type: Schema.Types.ObjectId, ref: 'User'},
    inputTime: {type: Date, default: Date.now}
});


-----------------------------------------------------------------------------------------------------------------------------------------

///////////////////////// B. Routes

Add: Thoughts
Edit: Thoughts
Delete: Thoughts
Get: Perspectives of Thoughts where Label == SearchInput && context=ChosenContext

_________________________________________________________________________________________________________________________________________
II. FRONTEND


///////////////////////// A. COMPONENTS
1. NAVBAR
Logo = HomeButton

LoggedIn,
  Username's-Room --> OnClick:  Favorites, Todo, NewThought		//Erste Version
  Public, --> OnClick: FriendsList, Timeline,  			//Add Later
  Projects --> OnClick: ShowRelatedObjects(RestrictedChanges)		//Same Functions as Username's-Room
  Other (Valoo)								//Don't even show yet

NotLoggedIn, 
  Login,
  Register,

SearchBox
  Standard: Site-Now, Options: My-Room, Logical-Room.Users, My-Projects
  TwoWayDataBinding: FindCloseThoughtByEnterValue in Links, ShowValue and ScaleObjectValue



2. LOGIN
Form: Username/Email; Password; LoginButton
GoTo MyRoom


2. REGISTER
Email, Username, Password,
Save User; 
Save Objects: My-Room, Memories, Favorites, Plans
Save User.MyRoom = My-Room_ID


2. HOME

LoadThought WHERE (If SearchInput == Label; If IDinURL == Thought_ID; else User.MyRoom == Thought._ID ) save as ChoseThought
  ChosenThought.context = Complexity-App
  ChosenThought.perspective = Welcome, About
  ActivePerspective = Welcome

LOAD RelatedObjects
    LOAD allThoughts WHERE context = ActivePerspective //Login(c: Welcome, p: Welcome )


3. USERNAME'S-ROOM

Var ChosenThought 					//The Thought that is being visualised, standard = My-Room

LOAD Thought WHERE Label/ID = ChosenThought
  ChosenThought.context = All Contexts of chosen Thought					//standard: Complexity-App
  ChosenThought.perspective = All Perspectives of chosen Thought  //standard: My-RoomP

LOAD RelatedObjects
    LOAD allThoughts WHERE context = ChosenThought.perspective //standard = Memory(c:My-RoomP, p:MemoryP), Favorites(c:My-RoomP), Todo

Analyse Data 				        // Analyse allThoughts
Choose Visualisation Mode   // Very simple Mode only in the beginning.
Visualise                   
