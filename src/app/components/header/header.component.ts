import { Component, EventEmitter, OnInit, Output, TemplateRef, ViewChild } from '@angular/core';
import { ModalUploadComponent } from '../modal-upload/modal-upload.component';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  // @ViewChild('modal') private modalContent: TemplateRef<ModalUploadComponent>

 



  IconPathSearch: any;
  IconPathUpload: any;
  IconPathMenu: any;
  IconPathLogo: any;



  constructor() {

  }

  ngOnInit(): void {
    this.montarIcons()

  }


  montarIcons() {
    this.IconPathSearch = '/assets/icons/procurar.png'
    this.IconPathUpload = '/assets/icons/link.png'
    this.IconPathMenu = '/assets/icons/menu.png'

  }

  openModal() {
    this.toggleModal()

  }

  toggleModal() {

    const modal = document.querySelector("#modal")!;
    const fade = document.querySelector('#fade')!;
    modal.classList.toggle('hide')
    fade.classList.toggle('hide')

    

  }

}
