import { Component } from '@angular/core';
import { GalleryImagesService } from 'src/app/services/gallery-images/gallery-images.service';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.scss'] 
})
export class GalleryComponent {
  constructor(private galleryImagesService: GalleryImagesService ){}
  images: any;

  ngOnInit(): void { 
    this.images = this.galleryImagesService.getImagens()
    
  }
  
  getima(){
    return  this.galleryImagesService.getImagens()
  }
  
}
