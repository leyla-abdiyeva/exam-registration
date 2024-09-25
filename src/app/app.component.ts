import {Component} from '@angular/core';
import {RouterLink, RouterLinkActive} from '@angular/router';
import {RouterModule, Router} from '@angular/router';

import {StudentListComponent} from "./student-list/student-list.component";
import {LessonListComponent} from "./lesson-list/lesson-list.component";
import {ExamListComponent} from "./exam-list/exam-list.component";
import {HeaderComponent} from "./shared/header/header.component";


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterModule,
    StudentListComponent,
    LessonListComponent,
    ExamListComponent,
    RouterLink,
    RouterLinkActive,
    HeaderComponent,

  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'homeworkexam-registration-app';

  constructor(private router: Router) {
  }

  navigateTo(path: string): void {
    this.router.navigate([path]);
  }
}
