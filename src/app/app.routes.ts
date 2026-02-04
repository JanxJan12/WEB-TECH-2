import { Routes } from '@angular/router';
import { PrelimExamComponent } from "./prelim-exam/prelim-exam.component";
import { StudentsComponent} from "./students/students.component"
import { CreateStudentComponent } from "./create-student/create-student.component";

export const routes: Routes = [
    {
  path: 'prelim-exam',
  component: PrelimExamComponent
},{
  path: 'students',
  component:StudentsComponent
}, {
    path: 'students/create',
    component: CreateStudentComponent
  },
    {
    path: '**',
    redirectTo: '/students'
  }

];


