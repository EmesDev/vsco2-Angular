import { Component, OnInit } from '@angular/core';
import { GalleryImagesService } from 'src/app/services/gallery-images/gallery-images.service';

interface Item {
  imageSrc: string;
}

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit{
  data: Item[] = [];

  constructor(private galleryImagesService: GalleryImagesService) {}

  ngOnInit(): void {
    this.searchImages();
    console.log(this.data)
  }

  searchImages() {
    this.galleryImagesService.getMyCollection().subscribe((data) => {
      for (let i = 0; i < data.media.length; i++) {
        const src = data.media[i].src;
        
        const medium = src.large2x;
        const item: Item = { imageSrc: medium };
        this.data.push(item);
      }
    });
  }
  
}
