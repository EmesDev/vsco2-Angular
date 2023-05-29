import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  animate,
  style,
  transition,
  trigger,
  AnimationEvent,
} from '@angular/animations';

interface Item {
  imageSrc: string;
}

@Component({
  selector: 'app-gallery-lightbox',
  templateUrl: './gallery-lightbox.component.html',
  styleUrls: ['./gallery-lightbox.component.scss'],
  animations: [
    trigger('animation', [
      transition('void => visible', [
        style({ transform: 'scale(0.5)' }),
        animate('150ms', style({ transform: 'scale(1)' })),
      ]),
      transition('visible => void', [
        style({ transform: 'scale(1)' }),
        animate('110ms', style({ transform: 'scale(0.5)' })),
      ]),
    ]),
    trigger('animation2', [
      transition(':leave', [
        style({opacity: 1}),
        animate('50ms', style({opacity: 0.2}))
      ])
    ])
  ],
})
export class GalleryLightboxComponent implements OnInit {
  @Input() galleryData: Item[] = [];
  @Input() showCount = false;
  @Output() clicked = new EventEmitter<number>(); // this is the output event that emits data to the parent


  previewImage = false;
  showMask = false;
  currentLightboxImage: Item = this.galleryData[0];
  currentIndex = 0;
  controls = true;
  totalImageCount = 0;
  page = 1;


  constructor() {}

  ngOnInit(): void {
    this.totalImageCount = this.galleryData.length;
  }

  async onScroll() {
   await this.clicked.emit(this.page);
    this.page++
    console.log(this.page)

  }

  onPreviewImage(index: number): void {
    this.showMask = true;
    this.previewImage = true;
    this.currentIndex = index;
    console.log(this.galleryData[index]);
    this.totalImageCount = this.galleryData.length;
    this.currentLightboxImage = this.galleryData[index];
  }

  onAnimationEnd(event: AnimationEvent) {
    if (event.toState === 'void') {
      this.showMask = false
    }
  }

  onClosePreview(){
    this.previewImage = false
  }

  next(): void{
    this.currentIndex = this.currentIndex + 1;
    if(this.currentIndex > this.galleryData.length - 1){
      this.currentIndex = 0
   }
   this.currentLightboxImage = this.galleryData[this.currentIndex]
  }

  prev():void{
    this.currentIndex = this.currentIndex - 1
    if(this.currentIndex < 0){
      this.currentIndex = this.galleryData.length - 1
    }
    this.currentLightboxImage = this.galleryData[this.currentIndex]

  }
  }
