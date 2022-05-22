import {  NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddCourseComponent } from './component/add-course/add-course.component';
import { AddEventComponent } from './component/add-event/add-event.component';
import { AdminComponent } from './component/admin/admin.component';
import { CoursInfoComponent } from './component/cours-info/cours-info.component';
import { CoursComponent } from './component/cours/cours.component';
import { CoursesComponent } from './component/courses/courses.component';
import { EventComponent } from './component/event/event.component';
import { EventsComponent } from './component/events/events.component';
import { HomeComponent } from './component/home/home.component';
import { LoginComponent } from './component/login/login.component';
import { SignupComponent } from './component/signup/signup.component';
import { TeacherInfoComponent } from './component/teacher-info/teacher-info.component';
import { TeacherComponent } from './component/teacher/teacher.component';
import { TutorsComponent } from './component/tutors/tutors.component';


const routes: Routes = [
  {path:'login',component:LoginComponent},
  {path:'signup',component:SignupComponent},
  {path:'coures',component:CoursComponent},
  {path:'courses',component:CoursesComponent},
  {path:'event',component:EventComponent},
  {path:'events',component:EventsComponent},
  {path:'addCoures',component:AddCourseComponent},
  {path:'addEvent',component:AddEventComponent},
  {path:'admin',component:AdminComponent},
  {path:"",component:HomeComponent},
  {path:'tutors',component:TutorsComponent},
  {path:'teacher',component:TeacherComponent},
  {path:'teacherInfo/:id',component:TeacherInfoComponent},
  {path:'coursInfo/:id',component:CoursInfoComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
  
 }
