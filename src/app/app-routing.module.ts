import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { RegisterComponent } from './register/register.component';
import { NavbarComponent } from './navbar/navbar.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { RegisterSuccessComponent } from './register-success/register-success.component';
import { UpdateSuccessComponent } from './update-success/update-success.component';


const routes: Routes = [
  {path:'', redirectTo:'/home', pathMatch:'full'},
  {path: 'sidenav',component:NavbarComponent},
  {path:'home', component:HomeComponent},
  {path:'register', component:RegisterComponent},
  {path: 'about', component:AboutUsComponent},
  {path: 'register-success', component: RegisterSuccessComponent},
  {path: "update-success", component: UpdateSuccessComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
