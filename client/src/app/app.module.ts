import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
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
import { DraggableModule } from './draggable/draggable.module';
import { ViewerComponent } from './components/viewer/viewer.component';
import { InternalService } from './services/internal.service';
import { FooterComponent } from './components/footer/footer.component';
import { SearchComponent } from './components/tools/search/search.component';
import { EditComponent } from './components/tools/edit/edit.component';
import { CopyComponent } from './components/tools/copy/copy.component';
import { LinkComponent } from './components/tools/link/link.component';
import { DeleteComponent } from './components/tools/delete/delete.component';
import { MatNativeDateModule } from '@angular/material';
import { DimensionComponent } from './components/tools/dimension/dimension.component';


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
    FooterComponent,
    SearchComponent,
    EditComponent,
    CopyComponent,
    LinkComponent,
    DeleteComponent,
    DimensionComponent
  ],
  imports: [
    ReactiveFormsModule,
    FormsModule,
    AppRoutingModule,
    BrowserModule,
    HttpModule,
    MaterialModule,
    DraggableModule,
    MatNativeDateModule
  ],
  providers: [AuthService, AuthGuard, NotAuthGuard, DataService, InternalService],
  bootstrap: [AppComponent]
})
export class AppModule { }
