import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { HttpClient } from '@angular/common/http';

import {Student} from '../shared/models';
import { Lesson } from '../shared/models';
import { Exam } from '../shared/models';

@Injectable({
  providedIn: 'root'
})
export class ExamService {

  constructor() { }

  private lessons: Lesson[] = [
    { lessonCode: '01', lessonName: 'Riyaziyyat', classNumber: 9, teacherFirstName: 'Nərmin', teacherLastName: 'Süleymanova' },
    { lessonCode: '02', lessonName: 'Fizika', classNumber: 10, teacherFirstName: 'Nazim', teacherLastName: 'Qəhrəmanov' },
    { lessonCode: '03', lessonName: 'Kimya', classNumber: 11, teacherFirstName: 'Fidan', teacherLastName: 'Əliyeva' },
  ];

  private students: Student[] = [
    { studentID: 1, firstName: 'Əli', lastName: 'Kamilov', classNumber: 9 },
    { studentID: 2, firstName: 'Aysun', lastName: 'Qasımova', classNumber: 10 },
    { studentID: 2, firstName: 'Nigar', lastName: 'Musayeva', classNumber: 11 }
  ];

  private exams: Exam[] = [
    { examID: 1, studentID: 13579, examDate: new Date('2023-09-01'), grade: 4 },
    { examID: 2, studentID: 24680, examDate: new Date('2023-09-05'), grade: 5 },
    { examID: 3, studentID: 46805, examDate: new Date('2023-09-05'), grade: 5 },
  ];

  getStudents(): Observable<Student[]> {
    return of(this.students);
  }

  getLessons(): Observable<Lesson[]> {
    return of(this.lessons);
  }

  getExams(): Observable<Exam[]> {
    return of(this.exams);
  }
}
