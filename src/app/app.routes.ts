import {NgModule} from "@angular/core";
import {RouterModule, Routes} from '@angular/router';

import {StudentListComponent} from "./student-list/student-list.component";
import {LessonListComponent} from "./lesson-list/lesson-list.component";
import {ExamListComponent} from "./exam-list/exam-list.component";
import {HeaderComponent} from "./shared/header/header.component";

export const routes: Routes =
  [
    {path: 'students', component: StudentListComponent},
    {path: 'lessons', component: LessonListComponent},
    {path: 'exams', component: ExamListComponent},
    {path: 'header', component: HeaderComponent},
    {path: '', redirectTo: '/students', pathMatch: 'full'},
    {path: '**', redirectTo: '/students'}
  ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule {
}
