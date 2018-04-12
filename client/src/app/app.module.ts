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
import { NewComponent } from './components/new/new.component';
import { MaterialModule } from './material.module';
import { DraggableModule } from './draggable/draggable.module';
import { ViewerComponent } from './components/viewer/viewer.component';
import { InternalService } from './services/internal.service';
import { FooterComponent } from './components/footer/footer.component';


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
  ],
  imports: [
    ReactiveFormsModule,
    FormsModule,
    AppRoutingModule,
    BrowserModule,
    HttpModule,
    MaterialModule,
    DraggableModule
  ],
  providers: [AuthService, AuthGuard, NotAuthGuard, DataService, InternalService],
  bootstrap: [AppComponent]
})
export class AppModule { }
