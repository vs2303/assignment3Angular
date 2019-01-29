import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { Student } from './student';
import { StudentComponent } from './student/student.component';
import { StudentDisplayComponent } from './student-display/student-display.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { AuthGuard } from './auth.guard';
import { LogoutComponent } from './logout/logout.component'
const routes: Routes = [
  {path:'enterDatail',component:StudentComponent},
  {path:'showData',component:StudentDisplayComponent},
  {path:'login',component:LoginComponent},
  {path:'home',component:HomeComponent,canActivate:[AuthGuard]},
  {path:'logout',component:LogoutComponent},
  {path:'',component:HomeComponent,canActivate:[AuthGuard]}
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
