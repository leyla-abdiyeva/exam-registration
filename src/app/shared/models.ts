export interface Lesson {
  lessonCode: string;
  lessonName: string;
  classNumber: number;
  teacherFirstName: string;
  teacherLastName: string;
}

export interface Student {
  studentID: number;
  firstName: string;
  lastName: string;
  classNumber: number;
}

export interface Exam {
  examID: number;
  studentID: number;
  examDate: Date;
  grade: number;
}
