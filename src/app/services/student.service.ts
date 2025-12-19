import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { AuthService } from './auth.service';

@Injectable({ providedIn: 'root' })
export class StudentService {
  private apiUrl = 'http://localhost:5091/api/students';

  constructor(private http: HttpClient, private auth: AuthService) {}

  private getAuthHeaders() {
    return {
      headers: new HttpHeaders({
        Authorization: `Bearer ${this.auth.getToken() || ''}`
      })
    };
  }

  getStudents(): Observable<any[]> {
    return this.http.get<any[]>(this.apiUrl, this.getAuthHeaders());
  }

  addStudent(student: any) {
    return this.http.post<any>(this.apiUrl, student, this.getAuthHeaders());
  }

  updateStudent(student: any) {
    return this.http.put<any>(`${this.apiUrl}/${student.id}`, student, this.getAuthHeaders());
  }

  deleteStudent(id: number) {
    return this.http.delete<any>(`${this.apiUrl}/${id}`, this.getAuthHeaders());
  }
}
