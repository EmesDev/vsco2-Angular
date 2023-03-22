import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.scss']
})
export class UserProfileComponent implements OnInit {
  ProfilePath: string;

  constructor() {
    this.ProfilePath = '/assets/profile/profile-image-1.jpg'

  }

  ngOnInit(): void {
    
  }

}
