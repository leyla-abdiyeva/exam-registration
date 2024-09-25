import { Component, OnInit } from '@angular/core';
import {CommonModule} from "@angular/common";
import {FormBuilder, FormGroup, ReactiveFormsModule, Validators} from "@angular/forms";

import {ExamService} from "../services/exam.service";
import {Lesson, Student} from "../shared/models";

@Component({
  selector: 'app-student-list',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './student-list.component.html',
  styleUrl: './student-list.component.css'
})
export class StudentListComponent implements OnInit {
  studentForm!: FormGroup;
  students: Student[] = [];

  constructor(private examService: ExamService, private fb: FormBuilder) {
  }

  ngOnInit(): void {
    this.studentForm = this.fb.group({
      studentID: ['', [Validators.required]],
      firstName: ['', [Validators.required]],
      lastName: ['', [Validators.required]],
      classNumber: ['', [Validators.required, Validators.min(1), Validators.max(11)]],
    });

    this.examService.getStudents().subscribe(data => {
      this.students = data;
    });
  }

  onSubmit(): void {
    if (this.studentForm.valid) {
      const newStudent: Student = this.studentForm.value;
      this.students.push(newStudent);
      this.studentForm.reset();
    }
  }
}
