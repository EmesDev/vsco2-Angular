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
import { HttpClientModule } from '@angular/common/http';
import { GalleryComponent } from './components/gallery/gallery.component';
import { GalleryProfileComponent } from './pages/profile/components/gallery-profile/gallery-profile.component';
import { FooterComponent } from './components/footer/footer.component';
import { HomeComponent } from './pages/home/home.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    UserProfileComponent,
    SectionComponent,
    ProfileComponent,
    FeedComponent,
    GalleryComponent,
    GalleryProfileComponent,
    FooterComponent,
    HomeComponent,
    

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatIconModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
