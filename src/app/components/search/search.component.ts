import { Component } from '@angular/core';
import { ApispotifyService } from 'src/app/services/apispotify.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent {

  artists: any[]= [];

  constructor(private spotify: ApispotifyService) { }

  //Buscar
  search( searching:string ) {
    console.log(searching);
  
    this.spotify.getArtist(searching)
    .subscribe( (data: any) => {
      // console.log(data.artists.items);
      this.artists = data;
    })

  }

}
