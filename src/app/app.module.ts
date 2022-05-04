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
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
