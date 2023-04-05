import { Component, OnInit } from '@angular/core';
import { GalleryImagesService } from 'src/app/services/gallery-images/gallery-images.service';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.scss']
})
export class UserProfileComponent implements OnInit {
  ProfilePath: any [];
  MenuPath: any;

  constructor(    private galleryImagesService: GalleryImagesService ) {
    // this.ProfilePath = '/assets/profile/profile-image-1.jpg'
    this.MenuPath = 'assets/icons/pontos-de-menu.png'

  }

  ngOnInit(): void {
  this.searchImage();
  console.log(this.ProfilePath);

  }

  searchImage() {
    this.galleryImagesService.getProfileImage().subscribe(ProfilePath=>{
      console.log(ProfilePath)
      this.ProfilePath = ProfilePath.media
    })

}

}
