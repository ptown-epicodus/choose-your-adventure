import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { StoryDetailComponent } from './story-detail/story-detail.component';
import { StoriesComponent } from './stories/stories.component';
import { routing } from './app.routing';


@NgModule({
  declarations: [
    AppComponent,
    WelcomeComponent,
    StoryDetailComponent,
    StoriesComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    routing
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
