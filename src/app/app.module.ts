import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatIconModule} from '@angular/material/icon';
import { SectionComponent } from './components/section/section.component';
import { ProfileComponent } from './pages/profile/profile.component';
import { FeedComponent } from './pages/feed/feed.component';
import { UserProfileComponent } from './pages/profile/components/user-profile/user-profile.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    UserProfileComponent,
    SectionComponent,
    ProfileComponent,
    FeedComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatIconModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
