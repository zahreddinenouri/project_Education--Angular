import {  NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddCourseComponent } from './add-course/add-course.component';
import { AddEventComponent } from './add-event/add-event.component';
import { CoursComponent } from './cours/cours.component';
import { CoursesComponent } from './courses/courses.component';
import { EventComponent } from './event/event.component';
import { EventsComponent } from './events/events.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';


const routes: Routes = [
  {path:'login',component:LoginComponent},
  {path:'signup',component:SignupComponent},
  {path:'coures',component:CoursComponent},
  {path:'courses',component:CoursesComponent},
  {path:'event',component:EventComponent},
  {path:'events',component:EventsComponent},
  {path:'addCoures',component:AddCourseComponent},
  {path:'addEvent',component:AddEventComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
  
 }
