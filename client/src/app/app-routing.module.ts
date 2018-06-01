import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core'; 
import { RegisterComponent } from './components/register/register.component';
import { LoginComponent } from './components/login/login.component';
import { AuthGuard } from './guards/auth.guard';
import { NotAuthGuard } from './guards/notAuth.guard';
import { ViewerComponent } from './components/viewer/viewer.component';


const appRoutes: Routes = [

  { path: 'register', component: RegisterComponent, canActivate: [NotAuthGuard] 
  },  
  { path: 'login', component: LoginComponent, canActivate: [NotAuthGuard] 
  },
  { path: 'viewer', component: ViewerComponent 
  },
  { path: 'viewer/:id', component: ViewerComponent 
  },
  {
  	path: '**', component: ViewerComponent
  }
  ];


@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(appRoutes)],
  providers: [],
  bootstrap: [],
  exports: [RouterModule]
})

export class AppRoutingModule { }