import { Component, OnInit } from '@angular/core';
import { GalleryImagesService } from 'src/app/services/gallery-images/gallery-images.service';

interface Item {
  imageSrc: string;
}

@Component({
  selector: 'app-feed',
  templateUrl: './feed.component.html',
  styleUrls: ['./feed.component.scss']
})
export class FeedComponent  implements OnInit{

   data: Item[] = [];

  constructor(private galleryImagesService: GalleryImagesService) {}

  ngOnInit(): void {
    this.searchImages();
    console.log(this.data)
  }

  searchImages() {
    this.galleryImagesService.getImagens().subscribe((data) => {
      for (let i = 0; i < data.photos.length; i++) {
        const src = data.photos[i].src;
        const medium = src.large2x;

        const item: Item = { imageSrc: medium };
        this.data.push(item);
      }
    });
  }

}
