import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit{
  IconPath: string;

  constructor() {
    this.IconPath = '/assets/icons/vsco.png'

  }

  ngOnInit(): void {
    
  }

}
