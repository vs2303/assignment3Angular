import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { Student } from './student';
import { StudentComponent } from './student/student.component';
import { StudentDisplayComponent } from './student-display/student-display.component';

const routes: Routes = [
  {path:'enterDatail',component:StudentComponent},
  {path:'showData',component:StudentDisplayComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
