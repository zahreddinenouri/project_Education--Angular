import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { SearchSectionComponent } from './search-section/search-section.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { CoursComponent } from './cours/cours.component';
import { SubscribeComponent } from './subscribe/subscribe.component';
import { EventComponent } from './event/event.component';
import { BestTutorsComponent } from './best-tutors/best-tutors.component';
import { NewsComponent } from './news/news.component';
import { FooterComponent } from './footer/footer.component';
import { SignupComponent } from './signup/signup.component';
import { LoginComponent } from './login/login.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CoursesComponent } from './courses/courses.component';
import { EventsComponent } from './events/events.component';
import { AddCourseComponent } from './add-course/add-course.component';
import { AddEventComponent } from './add-event/add-event.component';

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
    AddEventComponent
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
