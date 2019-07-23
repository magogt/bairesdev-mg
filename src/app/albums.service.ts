import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})

export class Albums {

  constructor(private http: HttpClient) { }

  public getAlbums() {
    return this.http.get<IAlbum[]>('https://jsonplaceholder.typicode.com/photos');
  }

  public getPhotos(albumId: number, count: number) {

  }
}


export interface IAlbum {
  albumId: number;
  id: number;
  title: number;
  url: string;
  thumbnailUrl: string;
}
