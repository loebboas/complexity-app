import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { HomeComponent } from './components/home/home.component';
import { EverythingComponent } from './components/everything/everything.component';
import { RegisterComponent } from './components/register/register.component';
import { AuthService } from './services/auth.service';
import { DataService } from './services/data.service';
import { LoginComponent } from './components/login/login.component';
import { ProfileComponent } from './components/profile/profile.component';
import { FlashMessagesModule } from 'angular2-flash-messages';
import { AuthGuard } from './guards/auth.guard';
import { NotAuthGuard } from './guards/notAuth.guard';
import { NewComponent } from './components/new/new.component';
import { SomethingComponent } from './components/something/something.component';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    EverythingComponent,
    RegisterComponent,
    LoginComponent,
    ProfileComponent,
    NewComponent,
    SomethingComponent
  ],
  imports: [
    ReactiveFormsModule,
    FormsModule,
    AppRoutingModule,
    BrowserModule,
    HttpModule,
    FlashMessagesModule
  ],
  providers: [AuthService, AuthGuard, NotAuthGuard, DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
