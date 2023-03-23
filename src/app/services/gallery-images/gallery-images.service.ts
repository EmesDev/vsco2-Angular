import { HttpClient, HttpHandler, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {  Observable, throwError } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class GalleryImagesService {
  key: string = 'i06U8TAKLdXGTPhUIaZ04q2NCm7HSPbTRYJuoU7GMQuXWidYhomZqGrP'

  constructor(private httpClient: HttpClient) { }

  getImagens(): Observable<any>{
    const headers = new HttpHeaders({
      'Authorization': `${this.key}`
    })

    const requestOptions = {headers: headers}

    return this.httpClient.get<any>('https://api.pexels.com/v1/curated?per_page=40', requestOptions)
    .pipe()
    
  }

}
