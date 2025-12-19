import { Component, signal } from '@angular/core';
import { StudentService } from '../../services/student.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-students',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './student.html',
  styleUrl: './student.css',
})
export class StudentsComponent {
  students = signal<any[]>([]);
  selectedStudent = signal({ id: 0, name: '', class: '', section: '' });

  constructor(private studentService: StudentService) {
    this.loadStudents();
  }

  loadStudents() {
    this.studentService.getStudents().subscribe(data => this.students.set(data));
  }

  saveStudent() {
    const student = this.selectedStudent();

    if (student.id === 0) {
      this.studentService.addStudent(student).subscribe(newStudent => {
        this.students.update(studs => [...studs, newStudent]);
        this.resetForm();
      });
    } else {
      this.studentService.updateStudent(student).subscribe(updatedStudent => {
        this.students.update(studs =>
          studs.map(s => (s.id === updatedStudent.id ? updatedStudent : s))
        );
        this.resetForm();
      });
    }
  }

  editStudent(student: any) {
    this.selectedStudent.set({ ...student });
  }

  deleteStudent(id: number) {
    this.studentService.deleteStudent(id).subscribe(() => {
      this.students.update(studs => studs.filter(s => s.id !== id));
    });
  }

  resetForm() {
    this.selectedStudent.set({ id: 0, name: '', class: '', section: '' });
  }
}
