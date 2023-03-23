import { AfterContentChecked, Component, OnInit } from '@angular/core';
import { GalleryImagesService } from 'src/app/services/gallery-images/gallery-images.service';


@Component({
  selector: 'app-gallery',
  templateUrl:'./gallery.component.html',
  styleUrls: ['./gallery.component.scss'] 
})
export class GalleryComponent implements OnInit {
  data: any [];

  constructor(private galleryImagesService: GalleryImagesService  ){
    this.galleryImagesService.getImagens()
  }
 

  ngOnInit(): void { 
    this.searchImages()
  }
  

  searchImages() {
    this.galleryImagesService.getImagens().subscribe(data=>{
      console.log(data)
      this.data = data.photos
    })

  }
  

  
}
