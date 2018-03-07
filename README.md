# complexity-app
Application for structuring and visualisation of complex concepts


** COMPLEXITY-APP PSEUDO-CODE **
________________________________________________________________________________________________________________________________________
I. BACKEND


///////////////////////// A. SCHEMAS 

const wordSchema = new Schema({                                   // Unique Word 
    language: String,                                             // English, German, etc. (Later: Autodetect)
    user: {type: Schema.Types.ObjectId, ref: 'User'},             // User
    type: String,                                                 // Sentence
    child: 
    label: String,                                                // Word 
    usesThisMonth: number,                                        // Number of Uses 
    clicks: number,                                               // Number of Clicks
});
    

const thoughtSchema = new Schema({				                        // Thought defined as a different set of values in a given set of Dimensions (=ThoughtLanguage)
    label: {type: Schema.Types.ObjectId, ref: 'Word'},                                                // Name of the Thought
    value: number,                                                // Numerical Value
    type: String,                                                 // Question, Page, !Expression!, Word, Date, Person
    form: String,                                                 // Add Later: 3D Representation form, standard = small sphere 
    texture: String,                                              // Add Later: Texture of the 3D Representation, standard = white
    user: {type: Schema.Types.ObjectId, ref: 'User'},		          // User
    context: {type: Schema.Types.ObjectId, ref: 'Thought'},
    posX: 0, 
    posY: 0,
    posZ: 0,
    process: {type: Schema.Types.ObjectId, ref: 'User'},          // Different Thoughts (in the same context) can be part of the same process
    group: {type: Schema.Types.ObjectId, ref: 'User'},            // Different Thoughts (in the same context) can be grouped
    inputTime: {type: Date, default: Date.now}                    // Format = tyyyymmddhhmmssms /*
    likes: number,                                                // Number of Likes (1 Star = -1, 2 Stars = +1, 3 Start = +3) 
    clicks: number,
    privacy: String,						  // Add Later: Level of Privacy, standard: private
});


/* Date Format & Timestamps (Only Somehow relevant yet)
Date Format:
I want a Format for Timestamps which will allow me to represent all thinkable Timestamps. 
t=timescale (p = prehistoric, before Year 0000, n=now, Year 0000 - 9999, f = future, after Year 9999)
y = FourNumber Code Specifying the Year / Year Arrange. For prehistoric and Future instead of 4Decimalnumbers, I suggest to either use factors (eg.2169 = 2^169 (should be a billion?)) or a more complex code (e.g. heximal, whereby abcd are factors).
With Factors p2169 would mean a billion Years ago, whereby n2169 would mean the year 2169.

Timestamps:
Inputtime will later be only the first Timestamp on an array of Timestamps, which each change being a new timestamp. Part of the ChangeTracker-System*

/* LinkTypes
It probably makes sense to add a Schema with LinkTypes, so that User can define their own LinkTypes. At the moment they are hardcoded though an the following:

0. Type, Scale, Standard Position, OldName, Color
1. Meaning, Ordinal, X0Y0, Mid, RedViolet
2. Context, Ordinal, X0Y1, top, YellowGreen
2. Before, Ordinal, X-1Y0, left, BlueGreen
3. After, Ordinal, X1Y0, right, RedOrange
4. Linked, Nominal, X1Y1, topright, Red
5. Time, Intervall, X-1Y1, topleft, Blue


-----------------------------------------------------------------------------------------------------------------------------------------

///////////////////////// B. Routes

Add: Thought, Link
Edit: Thought, Link
Delete: Thought, Link
Get: Thought, Thought-Links(Load Links (inkl. Objects) where scale == specificThought)


_________________________________________________________________________________________________________________________________________
II. FRONTEND


///////////////////////// A. COMPONENTS
1. NAVBAR
Logo = HomeButton
2D/3D Chooser 								//Add Later: First 2D is enough, since the Logic is the same.

LoggedIn,
  Username's-Room --> OnClick:  Favorites, Todo, NewThought		//Erste Version
  Logical-Room, --> OnClick: FriendsList, Timeline,  			//Add Later
  Projects --> OnClick: ShowRelatedObjects(RestrictedChanges)		//Same Functions as Username's-Room
  Other (Valoo)								//Don't even show yet

NotLoggedIn, 
  Login,
  Register,

SearchBox
  Standard: Site-Now, Options: My-Room, Logical-Room.Users, My-Projects
  TwoWayDataBinding: FindCloseThoughtByEnterValue in Links, ShowValue and ScaleObjectValue


2. HOME
//2D:
Bootstrap-Grid (vgl. Username's Room)
Complexity-App 
My-Room, Logical-Room, Projects 
(+ OnClick: Show Text)

//3D (Add Later)
Complexity-App: X=0, Y=+1, Z=0
My-Room, Logical-Room, Projecty: X=1-3, Y=0, Z=0
OnClick: ZoomIn, PopOver: Show Text (-> Click: GoTo Component)
OnDoubleClick: GoTo Component


3. USERNAME'S-ROOM

Var ChosenThought 					//The Thought that is being visualised, can be defined by Link, standard = Username's-Room

Load ChosenThought					//Example: Username's-Room
Load ChosenThought RelatedObjects=Links 		//Related Objects = Links+LinkThoughts; Example: 3 Links: (LinkType=Meaning), 3 LinkThoughts(Memory, Favorites, Todo)
Load Links RelatedObjects=Links2			//Reladed Objects of the loaded LinkThoughts; Example: Memory has a Link to Session(meaning, 1) and Favorites(Link,0) 

Analyse Data 				// Analyse the loaded Links 
Count: For Each LinkType 		// Only for directly Related Objects
  LinkTypes.length +1			// Example: 1 Linktype			
  Number of Links 		  	// For now, this is being used to choose the displayMode (How big the Scale needs to be)
  PositionalVariance(LinkType)    	// Later: In Intervallscale the Variance of the positional Values could be used to choose the Size of the Scale 

//2D

Linktypes Visualisation
/* Types of Links
0. Type, Scale, Standard Position, OldName, Color
1. Meaning, Ordinal, X0Y0, Mid, RedViolet
2. Context, Ordinal, X0Y1, top, YellowGreen
2. Was, Ordinal, X-1Y0, left, BlueGreen
3. Is, Ordinal, X1Y0, right, RedOrange
4. Linked, Nominal, X1Y1, topright, Red
5. Time, Intervall, X-1Y1, topleft, Blue

/* 2D Visualisation/Bootstrap-Grid:

<Screen>
	<Column 0>	<Title: Chosen Thought/Scale Label>		</ Column0>
	
	<Column 2>	<row1: X-1Y1> 	<row2: X0Y1>	<row3: X1Y1>	</Column2>

	<Column 3>	<row1: X-1Y0>	<row2: X0Y0>	<row3: X1Y0>	</Column3>

	<Column 4>	<row1: X-1Y-1>	<row2: X0Y-1>	<row3: X1Y-1>	</Column4>
</ Screen>

Assign DisplayMode to Array,
Assign LinksOfLinks to Array 
Create VisualArray 			// Array of Data, that should be visualised. Example: 
{
 { 	thought: "Username's Room", 
	DisplayMode:XAY0, 
	links: {
	{ 	type: meaning, 
		thought: "Memory", 
		position:1, 
		sublinks: {
	 	{	type: meaning, thought: "Sessions", position:1 }, 
		{ 	type: linked, thought: "Favorites", position:0 } 
	}, 
	{	type: meaning, 
		thought: "Favorites", 
		position:2
	}
	{	type: meaning, 
		thought: "Todo", 
		position:3
	}
 },
 
}

//VISUALISATION CODE:

ChosenThought = Username's-Room,  	//The Thought that is being seen
ChosenCell(s) = [(X0Y0)]			//Array of the Cells, in which Data should be shown (linkTypes)

ChosenCell(s): Make them Bigger
Other Cells: Show barely visible Add-Buttons(hover:visible, Click: AddLinkDependingOnCell)

if LinkNumber<=3:
Display: horizontally
-> Make X0Y0 wider and show three rows with linkthought as title and subLinks as Hideable Listelements (clickable) 

if 4 =< LinkNumber >= 10:  
Display: vertically
Cell X0Y0: 50% bigger Size, Show ListElements as vertical List (subLinks while hovering)

if LinkNumber>6 => 80% bigger, Show Scrollable ListElements

//INTERACTION

Drag&Drop: 
Move Position in same Scale = Change Position
Move Position from One Scale to Other: Ask: (Link, Move, Copy)

Add: 	Add Thought and Link depending on which Cell you Click. 
	Searchbox; if Thought is found possibility to link.

Delete: Delete always only Link, except if no Links with this Thought as Scale exist, then delete Thought

//3D
OnEnter: 
  AddSecondLvlNavbar --> Memory, Favorites, Todo
  AddSideBar --> Add, Edit, Delete, ChangeAchses, ChangeView

Visualise 3D like 2D (Z=0). 
Later: Different Dimensions.

4. PROJECTS
OnEnter: Load Projects

//2D
Show Projects (3x3)
ClickOn: Load Project as ChosenThought (same as Username's-Room)

//3D
Show Projects (Grid, X/Y = Position)
OnClick(ProjectKESB) Load ProjectKESB




---->
<----------------- ExampleData (Simple)

<--- Thoughts

{ 
_id: thought1,
value: "Welcome to the Complexity App"
niveau: "ordinal"
}
{ 
_id: thought2,
value: "My Complexity"
niveau: "ordinal"
}
{ 
_id: thought3,
value: "Logical-Room"
niveau: "nominal"
}
{ 
_id: thought4,
value: Projects
niveau: "nominal"
}
{ 
_id: thought5,
value: "Memory"
niveau: "ordinal"
}
{ 
_id: thought6,
value: "Favorites"
niveau: "ordinal"
}
{ 
_id: thought7,
value: "Todo"
niveau: "ordinal"
}
{ 
_id: thought8,
value: "Sessions"
niveau: "intervall"
}
{ 
_id: thought9,
value: "KESB"
niveau: "ordinal"
}
<--- Links
{ 
_id: link1,
scale: thought1,
thought: thought2,
type: "meaning",
position: 1
}
{ 
_id: link2,
scale: thought1,
thought: thought3,
type: "meaning",
position: 2
}
{ 
_id: link3,
scale: thought1,
thought: thought4,
type: "meaning",
position: 3
}
{ 
_id: link4,
scale: thought2,
thought: thought5,
type: "meaning",
position: 1
}
{ 
_id: link5,
scale: thought2,
thought: thought6,
type: "meaning",
position: 2
}
{ 
_id: link6,
scale: thought2,
thought: thought7,
type: "meaning",
position: 3
}
_id: link7,
scale: thought5,
thought: thought8,
type: "meaning",
position: 1
}
_id: link8,
scale: thought4,
thought: thought9,
type: "meaning",
position: 1
}