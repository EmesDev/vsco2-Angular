import { Component, OnInit } from '@angular/core';
import { GalleryImagesService } from 'src/app/services/gallery-images/gallery-images.service';

@Component({
  selector: 'app-gallery-profile',
  templateUrl: './gallery-profile.component.html',
  styleUrls: ['./gallery-profile.component.scss']
})
export class GalleryProfileComponent implements OnInit{

  data: any [];

  constructor(private galleryImagesService: GalleryImagesService  ){
    this.galleryImagesService.getImagens()
  }
 

  ngOnInit(): void { 
    this.searchImages()
  }
  

  searchImages() {
    this.galleryImagesService.getMyCollection().subscribe(data=>{
      console.log(data)
      this.data = data.media
    })

}
}
