import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './component/header/header.component';
import { SearchSectionComponent } from './component/search-section/search-section.component';
import { WelcomeComponent } from './component/welcome/welcome.component';
import { CoursComponent } from './component/cours/cours.component';
import { SubscribeComponent } from './component/subscribe/subscribe.component';
import { EventComponent } from './component/event/event.component';
import { BestTutorsComponent } from './component/best-tutors/best-tutors.component';
import { NewsComponent } from './component/news/news.component';
import { FooterComponent } from './component/footer/footer.component';
import { SignupComponent } from './component/signup/signup.component';
import { LoginComponent } from './component/login/login.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CoursesComponent } from './component/courses/courses.component';
import { EventsComponent } from './component/events/events.component';
import { AddCourseComponent } from './component/add-course/add-course.component';
import { AddEventComponent } from './component/add-event/add-event.component';
import { AdminComponent } from './component/admin/admin.component';
import { HomeComponent } from './component/home/home.component';
import { TeacherTableComponent } from './component/teacher-table/teacher-table.component';
import { CoursesTableComponent } from './component/courses-table/courses-table.component';
import { EventTableComponent } from './component/event-table/event-table.component';
import { TutorsComponent } from './component/tutors/tutors.component';
import { TeacherComponent } from './component/teacher/teacher.component';
import { TeacherInfoComponent } from './component/teacher-info/teacher-info.component';
import { CoursInfoComponent } from './component/cours-info/cours-info.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SearchSectionComponent,
    WelcomeComponent,
    CoursComponent,
    SubscribeComponent,
    EventComponent,
    BestTutorsComponent,
    NewsComponent,
    FooterComponent,
    SignupComponent,
    LoginComponent,
    CoursesComponent,
    EventsComponent,
    AddCourseComponent,
    AddEventComponent,
    AdminComponent,
    HomeComponent,
    TeacherTableComponent,
    CoursesTableComponent,
    EventTableComponent,
    TutorsComponent,
    TeacherComponent,
    TeacherInfoComponent,
    CoursInfoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
