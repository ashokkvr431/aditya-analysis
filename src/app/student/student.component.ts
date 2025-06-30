import { Component, OnInit } from '@angular/core';
import { Student } from './student.model';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html'
})
export class StudentComponent implements OnInit {
  student!: Student;
  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.http.get<any>('http://10.70.9.204:4002/api/student/login').subscribe(res => {
      this.student = res.result[0];
    });
    const stored = localStorage.getItem('student');
    if (stored) {
      this.student = JSON.parse(stored);
    }
  }
}
