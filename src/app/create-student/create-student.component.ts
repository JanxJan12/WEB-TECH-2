
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

interface StudentForm {
  studentId: string;
  firstName: string;
  lastName: string;
  email: string;
  age: number | null;
  gpa: number | null;
  enrollmentStatus: string;
}

@Component({
  selector: 'app-create-student',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './create-student.component.html',
  styleUrls: ['./create-student.component.scss']
})
export class CreateStudentComponent {
  studentForm: StudentForm = {
    studentId: '',
    firstName: '',
    lastName: '',
    email: '',
    age: null,
    gpa: null,
    enrollmentStatus: ''
  };

  enrollmentStatuses = [
    'Enrolled',
    'On Leave',
    'Graduated',
    'Withdrawn'
  ];

  constructor(private router: Router) {}

  onSubmit(): void {
    // Validate form
    if (this.isFormValid()) {
      // Here you would typically call a service to save the student
      console.log('Creating student:', this.studentForm);
      
      // Navigate back to students list
      this.router.navigate(['/students']);
    } else {
      alert('Please fill in all required fields');
    }
  }

  onBack(): void {
    this.router.navigate(['/students']);
  }

  isFormValid(): boolean {
    return !!(
      this.studentForm.studentId &&
      this.studentForm.firstName &&
      this.studentForm.lastName &&
      this.studentForm.email &&
      this.studentForm.age &&
      this.studentForm.gpa !== null &&
      this.studentForm.enrollmentStatus
    );
  }
}
