import { Component, OnInit } from '@angular/core';
import { Albums, IAlbum } from '../albums.service';

@Component({
  selector: 'app-albums',
  templateUrl: './albums.component.html',
  styleUrls: ['./albums.component.sass']
})
export class AlbumsComponent implements OnInit {
  private albums: IAlbum[];
  constructor(private albumsService: Albums) { }

  ngOnInit() {
   this.albumsService.getAlbums().subscribe(
     data => {
       this.albums = data.sort((a, b) => a.albumId - b.albumId).slice(0, 3);
     }
   );
  }

}
