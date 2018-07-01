import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FooterComponent } from './components/footer/footer.component';
import { ResumeComponent } from './components/resume/resume.component';
import { ExperienceComponent } from './components/resume/experience/experience.component';
import { EducationComponent } from './components/resume/education/education.component';
import { TechSoupComponent } from './components/resume/tech-soup/tech-soup.component';
import { AboutComponent } from './components/about/about.component';
import { InterestsComponent } from './components/interests/interests.component';


import { AppRoutingModule } from './routes.module';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    ResumeComponent,
    ExperienceComponent,
    EducationComponent,
    TechSoupComponent,
    InterestsComponent,
    AboutComponent,
    InterestsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
