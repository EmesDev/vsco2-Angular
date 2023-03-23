import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GalleryProfileComponent } from './gallery-profile.component';

describe('GalleryProfileComponent', () => {
  let component: GalleryProfileComponent;
  let fixture: ComponentFixture<GalleryProfileComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GalleryProfileComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GalleryProfileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
