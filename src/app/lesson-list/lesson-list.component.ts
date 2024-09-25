import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, ReactiveFormsModule, Validators} from '@angular/forms';
import {CommonModule} from "@angular/common";

import {ExamService} from "../services/exam.service";
import {Lesson} from "../shared/models";


@Component({
  selector: 'app-lesson-list',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule
  ],
  templateUrl: './lesson-list.component.html',
  styleUrls: ['./lesson-list.component.css'],
})
export class LessonListComponent implements OnInit {
  lessons: Lesson[] = [];
  lessonForm!: FormGroup;

  constructor(private examService: ExamService, private fb: FormBuilder) {
  }

  ngOnInit(): void {
    this.lessonForm = this.fb.group({
      lessonCode: ['', Validators.required],
      lessonName: ['', Validators.required],
      classNumber: [null, Validators.required],
      teacherFirstName:
        ['', Validators.required],
      teacherLastName:
        ['', Validators.required],
    })
    ;

    this.examService.getLessons().subscribe((data) => {
      this.lessons = data;
    });
  }

  addLesson(): void {
    if (this.lessonForm.valid) {
      const newLesson: Lesson = this.lessonForm.value;
      this.lessons.push(newLesson);
      this.lessonForm.reset();
    }
  }
}
