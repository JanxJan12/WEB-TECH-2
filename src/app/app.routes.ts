import { Routes } from '@angular/router';
import { PrelimExamComponent } from './prelim-exam/prelim-exam.component';
import { StudentsComponent } from './students/students.component';
import { CreateStudentComponent } from './create-student/create-student.component';

export const routes: Routes = [
  {
    path: 'prelim-exam',
    component: PrelimExamComponent
  },
  {
    path: 'students/create',          // ✅ MORE SPECIFIC FIRST
    component: CreateStudentComponent
  },
  {
    path: 'students',
    component: StudentsComponent
  },
  {
    path: '',
    redirectTo: 'students',
    pathMatch: 'full'
  },
  {
    path: '**',
    redirectTo: 'students'
  }
];