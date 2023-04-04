import { Component ,OnInit } from '@angular/core';
@Component({
  selector: 'app-modal-upload',
  templateUrl: './modal-upload.component.html',
  styleUrls: ['./modal-upload.component.scss']
})
export class ModalUploadComponent implements OnInit{
  closeBtnPath: string;
  uploadImgPath: string;
  // Guarda a referência do arquivo selecionado
  arquivo: File;
  
  // Guarda os bytes obtidos através da leitura
  // do this.arquivo - utilizado no preview
  arquivoPreview: any;



  openModalButton = document.querySelector('#open-modal.upload-icon');
  closeModalButton = document.querySelector('#close-modal');

  ngOnInit(): void {
    this.closeBtnPath = '/assets/icons/close.png'
    this.uploadImgPath = '/assets/icons/upload-modal.png'
  }

  closeModal(){
    console.log('Fechar modal')
    this.toggleModal();
    console.log(document.querySelector('#modal'))
    

  }

  toggleModal(){
    const modal = document.querySelector('#modal')!;
    const   fade = document.querySelector('#fade')!;
    
    modal.classList.toggle('hide')
    fade.classList.toggle('hide')
    
  }
}
