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
import { FooterComponent } from './components/footer/footer.component';
import { HomeComponent } from './pages/home/home.component';
import { StoryComponent } from './pages/story/story.component';
import { ModalUploadComponent } from './components/modal-upload/modal-upload.component';
import { GalleryLightboxComponent } from './components/gallery-lightbox/gallery-lightbox.component';
import { CommonModule } from '@angular/common';
import { GalleryImagesService } from './services/gallery-images/gallery-images.service';
import { InfiniteScrollModule } from 'ngx-infinite-scroll';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    UserProfileComponent,
    SectionComponent,
    ProfileComponent,
    FeedComponent,
    GalleryComponent,
    FooterComponent,
    HomeComponent,
    StoryComponent,
    ModalUploadComponent,
    GalleryLightboxComponent,
    

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatIconModule,
    CommonModule,
    InfiniteScrollModule,
    HttpClientModule
    
  ],
  providers: [GalleryImagesService],
  bootstrap: [AppComponent]
})
export class AppModule { }
