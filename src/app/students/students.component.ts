import { Component, OnInit, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { StudentsService } from '../../services/students.service';
import { GetStudent } from '../../models/student.model';
import { provideHttpClient } from '@angular/common/http';

providers: [
  provideHttpClient()
]

@Component({
  selector: 'app-students',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './students.component.html',
  styleUrls: ['./students.component.scss']
})
export class StudentsComponent implements OnInit {

  students = signal<GetStudent[]>([]);

  constructor(
    private router: Router,
    private studentsService: StudentsService
  ) {}

  ngOnInit(): void {
    this.loadStudents();
  }

  loadStudents() {
    this.studentsService.getStudents().subscribe({
      next: (data) => {
        this.students.set(data);
      },
      error: (err) => {
        console.error(err);
      }
    });
  }

  navigateToAddStudent(): void {
    this.router.navigate(['/students/create']);
  }

  deleteStudent(studentId: string): void {
    this.studentsService.deleteStudent(studentId).subscribe({
      next: () => {
        const updated = this.students().filter(s => s.id !== studentId);
        this.students.set(updated);
      },
      error: (err) => {
        console.error(err);
      }
    });
  }
}
