import { Component,  Input, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';


interface Item {
  imageSrc: string
}

@Component({
  selector: 'app-gallery-lightbox',
  templateUrl: './gallery-lightbox.component.html',
  styleUrls: ['./gallery-lightbox.component.scss']
})
export class GalleryLightboxComponent implements OnInit {
  @Input() galleryData: Item[] = [];
  @Input() showCount = false;

  previewImage = false;
  showMask = false;
  currentLightboxImage: Item = this.galleryData[0];
  currentIndex = 0;
  controls = true;
  totalImageCount = 0;

  constructor( ) {
    this.totalImageCount = this.galleryData.length;
  }

  ngOnInit(): void {
    
  }

  onPreviewImage(index: number):void {
    this.showMask = true
    this.previewImage = true
    this.currentIndex = index;
    console.log(this.galleryData[index])
    this.currentLightboxImage = this.galleryData[index]

  }


}
