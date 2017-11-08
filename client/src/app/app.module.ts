import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
<<<<<<< HEAD
import { ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http'; 
=======
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
>>>>>>> 4b9ac8810f505e5804a1f7def4e486b3cc3d62f2
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { HomeComponent } from './components/home/home.component';
<<<<<<< HEAD
import { ViewEncapsulation } from '@angular/core';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { RegisterComponent } from './components/register/register.component';
import { AuthService } from './services/auth.service';
=======
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { RegisterComponent } from './components/register/register.component';
import { AuthService } from './services/auth.service';
import { BlogService } from './services/blog.service';
import { LoginComponent } from './components/login/login.component';
import { ProfileComponent } from './components/profile/profile.component';
import { FlashMessagesModule } from 'angular2-flash-messages';
import { AuthGuard } from './guards/auth.guard';
import { NotAuthGuard } from './guards/notAuth.guard';
import { BlogComponent } from './components/blog/blog.component';
import { EditBlogComponent } from './components/blog/edit-blog/edit-blog.component';
import { DeleteBlogComponent } from './components/blog/delete-blog/delete-blog.component';
import { PublicProfileComponent } from './components/public-profile/public-profile.component';
>>>>>>> 4b9ac8810f505e5804a1f7def4e486b3cc3d62f2

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    DashboardComponent,
<<<<<<< HEAD
    RegisterComponent
=======
    RegisterComponent,
    LoginComponent,
    ProfileComponent,
    BlogComponent,
    EditBlogComponent,
    DeleteBlogComponent,
    PublicProfileComponent
>>>>>>> 4b9ac8810f505e5804a1f7def4e486b3cc3d62f2
  ],
  imports: [
    BrowserModule,
    HttpModule,
<<<<<<< HEAD
    AppRoutingModule,
    ReactiveFormsModule
  ],
  providers: [AuthService],
=======
    ReactiveFormsModule,
    FormsModule,
    AppRoutingModule,
    FlashMessagesModule
  ],
  providers: [AuthService, AuthGuard, NotAuthGuard, BlogService],
>>>>>>> 4b9ac8810f505e5804a1f7def4e486b3cc3d62f2
  bootstrap: [AppComponent]
})
export class AppModule { }
