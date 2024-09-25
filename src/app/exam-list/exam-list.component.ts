import {ChangeDetectionStrategy, Component, OnInit} from '@angular/core';
import {CommonModule, DatePipe} from "@angular/common";
import {FormBuilder, FormGroup, ReactiveFormsModule, Validators} from "@angular/forms";

import {ExamService} from "../services/exam.service";
import {Exam} from "../shared/models";

@Component({
  selector: 'app-exam-list',
  standalone: true,
  imports: [
    DatePipe,
    CommonModule,
    ReactiveFormsModule
  ],
  templateUrl: './exam-list.component.html',
  styleUrl: './exam-list.component.css',
})
export class ExamListComponent implements OnInit {
  examForm!: FormGroup;
  exams: Exam[] = [];

  constructor(private fb: FormBuilder, private examService: ExamService) {
  }

  ngOnInit(): void {
    this.examForm = this.fb.group({
      examID: [null, [Validators.required]],
      studentID: [null, [Validators.required]],
      examDate: [null, [Validators.required]],
      grade: [null, [Validators.required]],
    });

    this.examService.getExams().subscribe(data => {
      this.exams = data;
    });
  }

  onSubmit(): void {
    if (this.examForm.valid) {
      const newExam: Exam = this.examForm.value;
      this.exams.push(newExam);
      this.examForm.reset();
    }
    ;
  }
}
