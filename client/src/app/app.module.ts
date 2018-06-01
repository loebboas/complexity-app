import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { RegisterComponent } from './components/register/register.component';
import { AuthService } from './services/auth.service';
import { DataService } from './services/data.service';
import { LoginComponent } from './components/login/login.component';
import { AuthGuard } from './guards/auth.guard';
import { NotAuthGuard } from './guards/notAuth.guard';
import { NewComponent } from './components/tools/new/new.component';
import { MaterialModule } from './material.module';
import { ViewerComponent } from './components/viewer/viewer.component';
import { InternalService } from './services/internal.service';
import { ToolbarComponent } from './components/toolbar/toolbar.component';
import { SearchComponent } from './components/tools/search/search.component';
import { EditComponent } from './components/tools/edit/edit.component';
import { DimensionComponent } from './components/tools/dimension/dimension.component';
import { GridsterModule } from 'angular-gridster2';
import { HttpClientModule } from '@angular/common/http';
import { DrawNavbarService } from './services/draw-navbar.service';
import { DrawViewerService } from './services/draw-viewer.service';
import { PerspectiveComponent } from './components/perspective/perspective.component';



import {OverlayModule} from '@angular/cdk/overlay';
import {A11yModule} from '@angular/cdk/a11y';
import {CommonModule} from '@angular/common';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    RegisterComponent,
    LoginComponent,
    NewComponent,
    ViewerComponent,
    ToolbarComponent,
    SearchComponent,
    EditComponent,
    DimensionComponent,
    PerspectiveComponent
  ],
  imports: [
    ReactiveFormsModule,
    FormsModule,
    AppRoutingModule,
    BrowserModule,
    HttpClientModule,
    MaterialModule,
    GridsterModule,
    BrowserModule,
    OverlayModule,
    A11yModule,
    CommonModule
  ],
  providers: [AuthService, AuthGuard, NotAuthGuard, DataService, InternalService, DrawNavbarService, DrawViewerService],
  bootstrap: [AppComponent]
})
export class AppModule { }
