/// COMPLEXITY-APP README

I. INTRODUCTION

The Complexity-Application is a project by Boas Loeb. For more Information contact loebboas[-|@|-]gmail.com. 



II. APP-CONCEPT

Main Modules:
app (root)
    Angular (framework)
    Material    (ui elements)
    vis.js  (graph, network, timeline)
    gridster    (grid)
    jsonwebToken (login)


App-Components

App
    Sidenav: 

    Navbar: height: 45%;
        html:
            Graph:
                Nodes: 
                    Popular Thoughts/Rooms (Stars, decoration, Group 0)
                    InfinityCloudNode (Sun, Special) 
                    SelectedRoomNode (Planet, Group 1)
                    userNode  (UserOnPlanet?, Group 3)
                    ?Thoughts: (UserContent, Group 4)
                    ?PubThoughts: (RoomContent, Group 2)
        ts:
            Events:
                onKeydown.delete:
                    changeTool: delete
                click/dblClick:
                    Group 0 (Background Thoughts/Rooms)
                        click: showLabel
                        dblClick: ChangeRoom
                    Group 1,2 (SelectedRoom, RoomContent)
                        click: draw/delete Content, changeSelectedNode
                        dblClick: ChangeSelectedThoughtPublic
                    Group 3,4 (UserNode, UserContent)
                        click: draw/delete Content, changeSelectedNode
                        dblClick: ChangeSelectedThoughtPrivate
            onInit: 
                subscribe: publicRooms
                LoggedIn:
                    userNode = User.label
                    subscribe: SelectedRoom, SelectedThought, SelectedNode
                LoggedOut:
                    userNode = Guest
                    subscribe: selectedRoom
        css: 
    
    routerOutlet:  height: 45%
        Home:
            html:
            ts:
            css:        
        Login:
        Register:
        Viewer:
            html: 
                if: selectedThought.showAs = grid, load gridComponent
                    Grid:
                        html: GridsterGrid, ngFor Content of selectedThought.Contents 
                            if content.showAs = grid, load grid-gridComponent
                        ts:
                        Events: 
                            DragAndDrop => ChangeOrder in Context
                            Click: openToolbar
                            AddNew
                        css:


                if: selectedThought.showAs = network, load NetworkComponent
                if: selectedThought.showAs = graph, load graphComponent
                if: selectedThought.showAs = timeline, load timelineComponent
            ts:
            css: 

    toolbar: height: 10%
        html:
        ts:
        css: 

Interfaces:
    User
    Thought
    PubThought
    PubRoom

Services
    AuthService
        Register
        LogedIn/LogedOut
        getUser
    DataService
        getRooms: Get all Public Rooms
        getPubContent: Get Content of Room
        getPubRoom
    InternalService
        pubRooms: BehaviourSubject: all Public Rooms (Search/Navbar)
        selectedRoom: BehaviourSubject: default(Welcome)
            changeRoom: changeSelectedRoom, changeSelectedThought
        selectedThought: 
        selectedNode:



// V. 0.0.4

-- Modules Added:
App.module,  
Material.module	
App-routing.module	
Draggable.Module	

--Components Added:
Home	
Login	
Register	
Navbar	
Memories	
Favorites	
Profile	

--Services Added:
Auth.service	
api.service	

--Guard Added:
Auth.Guard	
NoAuth.Guard	


I. INTRODUCTION