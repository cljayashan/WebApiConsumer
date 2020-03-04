import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ListStudentComponent } from './list-student/list-student.component';
import { AddNewStudentComponent } from './add-new-student/add-new-student.component';

const routes: Routes = [
  { path: 'list', component: ListStudentComponent },
  { path: 'addnew', component: AddNewStudentComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
