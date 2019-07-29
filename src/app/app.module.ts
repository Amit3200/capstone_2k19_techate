import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes,Router } from '@angular/router';
import { AppComponent } from './app.component';
import { Navbar1Component } from './navbar1/navbar1.component';
import { LoginTeacherComponent } from './login-teacher/login-teacher.component';
import { TeacherHomepageComponent } from './teacher-homepage/teacher-homepage.component';
import { AttendaceMarkComponent } from './attendace-mark/attendace-mark.component';
import { StudentReportComponent } from './student-report/student-report.component';
import { MentorRequestTeacherComponent } from './mentor-request-teacher/mentor-request-teacher.component';
import { TeacherFeedbackComponent } from './teacher-feedback/teacher-feedback.component';
import { UploadSyllabusComponent } from './upload-syllabus/upload-syllabus.component';
import { CreateTestComponent } from './create-test/create-test.component';
import { ChatSystemComponent } from './chat-system/chat-system.component';
import { ShowResultsComponent } from './show-results/show-results.component';
import { ClassReportComponent } from './class-report/class-report.component';

const routes: Routes = [
  { path: '',component: LoginTeacherComponent},
  { path: 'teacherdashboard', component: TeacherHomepageComponent },
  { path: 'studentreport', component: StudentReportComponent },
  { path: 'mentorrequest', component: MentorRequestTeacherComponent },
  { path: 'attendancemark', component: AttendaceMarkComponent },
  { path: 'login', component: LoginTeacherComponent },
  { path: 'mentorfeedback', component: TeacherFeedbackComponent },
  { path: 'uploadsyllabus', component:UploadSyllabusComponent},
  { path: 'createtest', component:CreateTestComponent},
  { path: 'chatstudent',component:ChatSystemComponent },
  { path: 'showresults',component:ShowResultsComponent},
  { path: 'classreport',component:ClassReportComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    Navbar1Component,
    LoginTeacherComponent,
    TeacherHomepageComponent,
    AttendaceMarkComponent,
    StudentReportComponent,
    MentorRequestTeacherComponent,
    TeacherFeedbackComponent,
    UploadSyllabusComponent,
    CreateTestComponent,
    ChatSystemComponent,
    ShowResultsComponent,
    ClassReportComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor(router: Router) { 
        
    // to print only path eg:"/login"
}
 }
