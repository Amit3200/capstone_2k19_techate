import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { Navbar1Component } from '../navbar1/navbar1.component';
import { LoginTeacherComponent } from '../login-teacher/login-teacher.component';
import { TeacherHomepageComponent } from '../teacher-homepage/teacher-homepage.component';
import { AttendaceMarkComponent } from '../attendace-mark/attendace-mark.component';
import { StudentReportComponent } from '../student-report/student-report.component';
import { MentorRequestTeacherComponent } from '../mentor-request-teacher/mentor-request-teacher.component';

const routes: Routes = [
  { path: 'teacherdashboard', component: TeacherHomepageComponent },
  { path: 'studentreport', component: StudentReportComponent },
  { path: 'mentorrequest', component: MentorRequestTeacherComponent },
  { path: 'attendancemark', component: AttendaceMarkComponent },
  { path: 'login', component: LoginTeacherComponent }
];
@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  declarations: [],
  exports: [ RouterModule ]
})
export class AppRoutingModule { }
