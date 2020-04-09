import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { HomepageComponent } from './homepage/homepage.component';
import { TdfComponent } from './tdf/tdf.component';
import { ReacformComponent } from './reacform/reacform.component';


const routes: Routes = [
  {
    path:'',
    component:HomepageComponent
  },
  {
    path:'register',
    component:RegisterComponent
  },
  {
    path:'login',
    component:LoginComponent
  },
  {
    path:'tdform',
    component:TdfComponent
  },
  {
    path:'rform',
    component:ReacformComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
