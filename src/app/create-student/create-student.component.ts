import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { StudentsService } from '../../services/students.service';

@Component({
  selector: 'app-create-student',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './create-student.component.html',
  styleUrls: ['./create-student.component.scss']
})
export class CreateStudentComponent {

  studentForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private studentsService: StudentsService,
    private router: Router
  ) {
    this.studentForm = this.fb.group({
      first_name: ['', Validators.required],
      last_name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      age: ['', Validators.required],
      course: ['', Validators.required],
      year_level: ['', Validators.required],
      gap: ['', Validators.required],
      enrollment_status: ['enrolled']
    });
  }

  createStudent() {

    if (this.studentForm.invalid) {
      this.studentForm.markAllAsTouched();
      return;
    }

    this.studentsService.createStudent(this.studentForm.value).subscribe({
      next: () => {
        alert('Student created successfully!');
        this.router.navigate(['/students']);
      },
      error: (err) => {
        console.error(err);
      }
    });
  }
}
