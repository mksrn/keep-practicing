import { NgModule} from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LandingComponent } from './landing/landing.component';
import { LogInComponent } from './log-in/log-in.component';
import { RegisterComponent } from './register/register.component';

const appRoutes : Routes = [
  { path: '', redirectTo : '/login' , pathMatch : 'full'},
  { path : 'login', component : LogInComponent},
  { path : 'register', component : RegisterComponent},
  { path : 'landing', component : LandingComponent}
];

@NgModule({
  imports : [RouterModule.forRoot(appRoutes)],
  exports : [RouterModule]
})
export class AppRoutingModule {

}