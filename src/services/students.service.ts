import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { GetStudent, CreateStudentPayload } from '../models/student.model';

import { Observable } from 'rxjs'

@Injectable({
  providedIn: 'root'
})
export class StudentsService {

  private apiUrl = 'http://localhost:3000/students'; // adjust if needed

  constructor(private http: HttpClient) {}

  getStudents(): Observable<GetStudent[]> {
    return this.http.get<GetStudent[]>(this.apiUrl);
  }

  createStudent(payload: CreateStudentPayload): Observable<GetStudent> {
    return this.http.post<GetStudent>(this.apiUrl, payload);
  }

  deleteStudent(studentId: string): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${studentId}`);
  }
}
