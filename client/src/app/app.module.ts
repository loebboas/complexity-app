import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { HomeComponent } from './components/home/home.component';
import { RegisterComponent } from './components/register/register.component';
import { AuthService } from './services/auth.service';
import { DataService } from './services/data.service';
import { LoginComponent } from './components/login/login.component';
import { ProfileComponent } from './components/profile/profile.component';
import { AuthGuard } from './guards/auth.guard';
import { NotAuthGuard } from './guards/notAuth.guard';
import { NewComponent } from './components/tools/new/new.component';
import { MaterialModule } from './material.module';
import { ViewerComponent } from './components/viewer/viewer.component';
import { InternalService } from './services/internal.service';
import { ToolbarComponent } from './components/toolbar/toolbar.component';
import { SearchComponent } from './components/tools/search/search.component';
import { EditComponent } from './components/tools/edit/edit.component';
import { CopyComponent } from './components/tools/copy/copy.component';
import { LinkComponent } from './components/tools/link/link.component';
import { DeleteComponent } from './components/tools/delete/delete.component';
import { DimensionComponent } from './components/tools/dimension/dimension.component';
import { TimelineComponent } from './components/views/timeline/timeline.component';
import { NetworkComponent } from './components/views/network/network.component';
import { GraphComponent } from './components/views/graph/graph.component';
import { GridComponent } from './components/views/grid/grid.component';
import { GridsterModule } from 'angular-gridster2';
import { GridsterConfigService } from './components/views/grid/gridster-config.service';
import { GraphGridComponent } from './components/views/grid/graph-grid/graph-grid.component';
import { TimelineGridComponent } from './components/views/grid/timeline-grid/timeline-grid.component';
import { NetworkGridComponent } from './components/views/grid/network-grid/network-grid.component';
import { GridGridComponent } from './components/views/grid/grid-grid/grid-grid.component';
import { HttpClientModule } from '@angular/common/http';
import { DrawNavbarService } from './services/draw-navbar.service';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    RegisterComponent,
    LoginComponent,
    ProfileComponent,
    NewComponent,
    ViewerComponent,
    ToolbarComponent,
    SearchComponent,
    EditComponent,
    CopyComponent,
    LinkComponent,
    DeleteComponent,
    DimensionComponent,
    TimelineComponent,
    NetworkComponent,
    GraphComponent,
    GridComponent,
    GraphGridComponent,
    TimelineGridComponent,
    NetworkGridComponent,
    GridGridComponent
  ],
  imports: [
    ReactiveFormsModule,
    FormsModule,
    AppRoutingModule,
    BrowserModule,
    HttpClientModule,
    MaterialModule,
    GridsterModule
  ],
  providers: [AuthService, AuthGuard, NotAuthGuard, DataService, InternalService, GridsterConfigService, DrawNavbarService],
  bootstrap: [AppComponent]
})
export class AppModule { }
