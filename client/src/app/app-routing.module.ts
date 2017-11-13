import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core'; 
import { HomeComponent } from './components/home/home.component'; 
import { EverythingComponent } from './components/everything/everything.component';



const appRoutes: Routes = [
  { 
  	path: '', component: HomeComponent 
  },
  { path: 'everything', component: EverythingComponent 
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