import { Component, OnInit, AfterContentInit } from '@angular/core';
import { InternalService } from '../../services/internal.service';
import { Dimensions } from '../../models/Dimensions/dimensions';
import { Perspective } from '../../models/perspective';
import { LevelDimension } from '../../models/Dimensions/levelDimension';
import { DateDimension } from '../../models/Dimensions/dateDimension';
import { User } from '../../models/user';
import { AuthService } from '../../services/auth.service';
import { NumberDimension } from '../../models/Dimensions/numberDimension';
import { TagDimension } from '../../models/Dimensions/tagDimension';
import { FormControl } from '@angular/forms';
import { Thought } from '../../models/thought';
import { DataService } from '../../services/data.service';

@Component({
  selector: 'app-perspective',
  templateUrl: './perspective.component.html',
  styleUrls: ['./perspective.component.css']
})
export class PerspectiveComponent implements OnInit, AfterContentInit {
  label;
  panelOpenState: boolean = false;
  allDimensions: Dimensions;
  selectedDimensions: Dimensions;
  perspectives: Perspective[];
  selectedPerspective: Perspective;
  user: User;
  selectedContext: Thought;

  constructor(private internalService: InternalService, private authService: AuthService, private dataService: DataService) { }
  toggleLevel(levelDim: LevelDimension) {
    var newLevelDimensions: LevelDimension[] = [];
    var addIt = false;
    this.selectedPerspective.dimensions.levelDimensions.forEach(dim => {
      if (dim.objId != levelDim.objId) {
        newLevelDimensions.push(dim);
      } else addIt = true;
    });
    if (addIt) newLevelDimensions.push(levelDim);
    var newPerspective: Perspective = this.selectedPerspective;
    newPerspective.dimensions.levelDimensions = newLevelDimensions;
    console.log(newPerspective);
    this.allDimensions.levelDimensions.find(leveldim => levelDim == leveldim).selected = !this.allDimensions.levelDimensions.find(leveldim => levelDim == leveldim).selected;
    this.internalService.changePerspective(newPerspective);
  }


  toggleDate(dateDim: DateDimension) {
    var newDateDimensions: DateDimension[] = [];
    var addIt = false;
    this.selectedPerspective.dimensions.dateDimensions.forEach(dim => {
      if (dim.label != dateDim.label) {
        newDateDimensions.push(dim);
      } else addIt = true;
    });
    var newDateDimensions: DateDimension[] = [];
    
    if (addIt) newDateDimensions.push(dateDim);
    var newPerspective: Perspective = this.selectedPerspective;
    newPerspective.dimensions.dateDimensions = newDateDimensions;
    console.log(newPerspective);
    this.allDimensions.dateDimensions.find(leveldim => dateDim == leveldim).selected = !this.allDimensions.dateDimensions.find(leveldim => dateDim == leveldim).selected;
    this.internalService.changePerspective(newPerspective);
  }

  toggleNumber(numberDim: NumberDimension) {
    var newNumberDimensions: NumberDimension[] = [];
    var found = false;
    this.selectedPerspective.dimensions.numberDimensions.forEach(dim => {
      if (dim.label != numberDim.label) {
        newNumberDimensions.push(dim);
      } else found = true;
    });
    if (found) newNumberDimensions.push(numberDim)
    var newPerspective: Perspective = this.selectedPerspective;
    newPerspective.dimensions.numberDimensions = newNumberDimensions;
    console.log(newPerspective);
    this.allDimensions.numberDimensions.find(leveldim => numberDim == leveldim).selected = !this.allDimensions.numberDimensions.find(leveldim => numberDim == leveldim).selected;
    this.internalService.changePerspective(newPerspective);
  }


  toggleTag(tagDim: TagDimension) {
    var newTagDimensions: TagDimension[] = [];
    var found = false;
    this.selectedPerspective.dimensions.tagDimensions.forEach(dim => {
      if (dim.label != tagDim.label) {
        newTagDimensions.push(dim);
      } else found = true;
    });
    if (found) newTagDimensions.push(tagDim)
    var newPerspective: Perspective = this.selectedPerspective;
    newPerspective.label = "custom Perspective";
    newPerspective.dimensions.tagDimensions = newTagDimensions;
    console.log(newPerspective);
    this.allDimensions.tagDimensions.find(leveldim => tagDim == leveldim).selected = !this.allDimensions.tagDimensions.find(leveldim => tagDim == leveldim).selected;
  
    this.internalService.changePerspective(newPerspective);
  }

  newPerspective() {
    var perspective = this.selectedPerspective;
    perspective.label = "specialCode!"
    this.internalService.changePerspective(perspective);
  }

  savePerspective() {
    var newPerspective: Perspective = this.selectedPerspective
    if (this.label.value) { this.selectedPerspective.label = this.label.value }
    newPerspective.dimensions = this.selectedDimensions;
    this.dataService.newPerspective(newPerspective).subscribe(data => {
      this.selectedPerspective._id = data['perspective']._id;
      var newUser: User = this.user;

      if (!newUser.starterPerspectives) newUser.starterPerspectives = [];
      newUser.starterPerspectives.unshift(this.selectedPerspective._id);
      if (!newUser.lastPerspectives) newUser.lastPerspectives = [];
      newUser.lastPerspectives.unshift(this.selectedPerspective._id);
      this.authService.editUser(newUser).subscribe(data => { });
    })
  }
  changePerspective(perspective) {
    this.internalService.changePerspective(perspective);
  }

  ngOnInit() {
    this.label = new FormControl();
    this.internalService.selectedUserObs.subscribe(user => this.user = user);
    this.internalService.selectedContextObs.subscribe(context => this.selectedContext = context);

    this.internalService.allDimensionsObs.subscribe(alldims => {
      this.allDimensions = alldims;
      this.selectedDimensions = alldims;
    });
    this.internalService.selectedPerspectivesObs.subscribe(perspectives => this.perspectives = perspectives);
    this.internalService.selectedPerspectiveObs.subscribe(perspective => {
      console.log(perspective);
      if (perspective != null) { this.selectedPerspective = perspective }
      else {
        var copyDimensions: Dimensions = this.allDimensions;
      
          this.selectedPerspective = {
            label: "New Perspective",
            dimensions: copyDimensions
         
        }
      }
      });
  }

  ngAfterContentInit() {

  }
}
