import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { Student } from './student';
import { StudentComponent } from './student/student.component';
import { StudentDisplayComponent } from './student-display/student-display.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { AuthGuard } from './auth.guard';
import { LogoutComponent } from './logout/logout.component'
import { LoginPageGuard } from './login-page.guard';
const routes: Routes = [
  {path:'',redirectTo: 'home', pathMatch: 'full',canActivate:[AuthGuard]},
  {path:'login',component:LoginComponent,canActivate:[LoginPageGuard]},
  {path:'home',component:HomeComponent,
    children:[
      {path:'',component:StudentComponent,canActivate:[AuthGuard]},
      {path:'enterDatail',component:StudentComponent,canActivate:[AuthGuard]},
      {path:'showData',component:StudentDisplayComponent,canActivate:[AuthGuard]}  
  ],
  canActivate:[AuthGuard]},
  {path:'logout',component:LogoutComponent,canActivate:[AuthGuard]},
  {path: '**', component: HomeComponent,canActivate:[AuthGuard]}  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
