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

@Component({
  selector: 'app-perspective',
  templateUrl: './perspective.component.html',
  styleUrls: ['./perspective.component.css']
})
export class PerspectiveComponent implements OnInit, AfterContentInit {
  label;
  panelOpenState: boolean = false;
  dimensions: Dimensions;
  perspectives: Perspective[];
  selectedPerspective: Perspective;
  user: User;

  constructor(private internalService: InternalService, private authService: AuthService) { }
  toggleLevel(levelDim: LevelDimension) {
    var newLevelDimensions: LevelDimension[] = [];
    this.selectedPerspective.dimensions.levelDimensions.forEach(dim => {
      if (dim.ObjID != levelDim.ObjID) {
        newLevelDimensions.push(dim);
      }
    });
    var newPerspective: Perspective = this.selectedPerspective;
    newPerspective.label = "custom Perspective";
    newPerspective.dimensions.levelDimensions = newLevelDimensions;
    console.log(newPerspective);
    this.internalService.changePerspective(newPerspective);
  }


  toggleDate(dateDim: DateDimension) {
    var newDateDimensions: DateDimension[] = [];
    this.selectedPerspective.dimensions.dateDimensions.forEach(dim => {
      if (dim.label != dateDim.label) {
        newDateDimensions.push(dim);
      }
    });
    var newPerspective: Perspective = this.selectedPerspective;
    newPerspective.label = "custom Perspective";
    newPerspective.dimensions.dateDimensions = newDateDimensions;
    console.log(newPerspective);
    this.internalService.changePerspective(newPerspective);
  }

  toggleNumber(numberDim: NumberDimension) {
    var newNumberDimensions: NumberDimension[] = [];
    this.selectedPerspective.dimensions.numberDimensions.forEach(dim => {
      if (dim.label != numberDim.label) {
        newNumberDimensions.push(dim);
      }
    });
    var newPerspective: Perspective = this.selectedPerspective;
    newPerspective.label = "custom Perspective";
    newPerspective.dimensions.numberDimensions = newNumberDimensions;
    console.log(newPerspective);
    this.internalService.changePerspective(newPerspective);
  }

  
  toggleTag(tagDim: TagDimension) {
    var newTagDimensions: TagDimension[] = [];
    this.selectedPerspective.dimensions.tagDimensions.forEach(dim => {
      if (dim.label != tagDim.label) {
        newTagDimensions.push(dim);
      }
    });
    var newPerspective: Perspective = this.selectedPerspective;
    newPerspective.label = "custom Perspective";
    newPerspective.dimensions.tagDimensions = newTagDimensions;
    console.log(newPerspective);
    this.internalService.changePerspective(newPerspective);
  }

  newPerspective() {
    var perspective = this.selectedPerspective;
    perspective.label = "specialCode!"
    this.internalService.changePerspective(perspective);
  }

  savePerspective() {
    var newUser: User = this.user;
    if(this.label){ this.selectedPerspective.label = this.label}
    newUser.startPerspectives.unshift(this.selectedPerspective);
    this.authService.editUser(newUser).subscribe(data => {});
  }
  changePerspective(perspective) {
    this.internalService.changePerspective(perspective);
  }

  ngOnInit() {
    this.label = new FormControl();
    this.internalService.selectedUserObs.subscribe(user => this.user = user);
    this.internalService.selectedPerspectivesObs.subscribe(perspectives => this.perspectives = perspectives)
    this.internalService.selectedDimensionsObs.subscribe(dimensions => this.dimensions = dimensions);

    this.internalService.selectedPerspectiveObs.subscribe(perspective => {
      console.log(perspective)
      if (perspective != null) { this.selectedPerspective = perspective }
      else {
        this.dimensions = this.internalService.selectedDimensions.getValue();
        this.selectedPerspective = {
          label: "New Perspective",
          dimensions: this.dimensions
        }
        console.log(this.dimensions);
      }
      console.log(this.selectedPerspective);
    });

  }

  ngAfterContentInit() {

  }
}
