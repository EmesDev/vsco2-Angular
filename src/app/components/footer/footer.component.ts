import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {

  logoPath: string;

  ngOnInit(): void {
    this.logoPath = '/assets/icons/vsco.png'
  }
}
