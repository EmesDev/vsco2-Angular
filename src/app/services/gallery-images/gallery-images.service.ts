import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environment';


@Injectable({
  providedIn: 'root'
})
export class GalleryImagesService {
  key: string = environment.pexelsApiKey

  constructor(private httpClient: HttpClient) { }

  getImagens(): Observable<any> {
    const headers = new HttpHeaders({
      'Authorization': `${this.key}`
    })

    const requestOptions = { headers: headers }

    return this.httpClient.get<any>('https://api.pexels.com/v1/curated?per_page=40', requestOptions)
      .pipe()

  }

  getImagensPage(page:number): Observable<any> {
    const headers = new HttpHeaders({
      'Authorization': `${this.key}`
    })

    const requestOptions = { headers: headers }
    console.log(page)

    return this.httpClient.get<any>(`https://api.pexels.com/v1/curated?page=${page}&per_page=80`, requestOptions)
      .pipe()

  }

  getMyCollection(): Observable<any> {
    const headers = new HttpHeaders({
      'Authorization': `${this.key}`
    })

    const requestOptions = { headers: headers }

    return this.httpClient.get<any>('https://api.pexels.com/v1/collections/kxtwkgc', requestOptions)
      .pipe()

  }

  getProfileImage(): Observable<any> {
    const headers = new HttpHeaders({
      'Authorization': `${this.key}`
    })

    const requestOptions = { headers: headers }

    return this.httpClient.get<any>('https://api.pexels.com/v1/collections/xwyemrw', requestOptions)
      .pipe()

  }

}
