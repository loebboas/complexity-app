import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core'; 
import { HomeComponent } from './components/home/home.component'; 
import { MyroomComponent } from './components/myroom/myroom.component';
import { MemoriesComponent } from './components/memories/memories.component';
import { FavoritesComponent } from './components/favorites/favorites.component';
import { PlansComponent } from './components/plans/plans.component';
import { RegisterComponent } from './components/register/register.component';
import { LoginComponent } from './components/login/login.component';
import { ProfileComponent } from './components/profile/profile.component';
import { AuthGuard } from './guards/auth.guard';
import { NotAuthGuard } from './guards/notAuth.guard';
import { NewComponent } from './components/new/new.component';


const appRoutes: Routes = [
  { 
  	path: '', component: HomeComponent 
  },
  { path: 'myroom', component: MyroomComponent, canActivate: [AuthGuard] 
  },
  { path: 'favorites/:id', component: FavoritesComponent, canActivate: [AuthGuard] 
  },
  { path: 'memories', component: MemoriesComponent, canActivate: [AuthGuard] 
  },
  { path: 'favorites', component: FavoritesComponent, canActivate: [AuthGuard] 
  },
  { path: 'plans', component: PlansComponent, canActivate: [AuthGuard] 
  },
  { path: 'new', component: NewComponent, canActivate: [AuthGuard] 
  },
  { path: 'register', component: RegisterComponent, canActivate: [NotAuthGuard] 
  },  
  { path: 'login', component: LoginComponent, canActivate: [NotAuthGuard] 
  },
  { path: 'profile', component: ProfileComponent, canActivate: [AuthGuard] 
  },
  {
  	path: '**', component: HomeComponent
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