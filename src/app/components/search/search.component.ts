import { Component } from '@angular/core';
import { ApispotifyService } from 'src/app/services/apispotify.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent {

  artists: any[]= [];
  loading: boolean;

  constructor(private spotify: ApispotifyService) { }

  //Buscar
  search( searching:string ) {
    console.log(searching);
  
    this.loading = true;

    this.spotify.getArtist(searching)
    .subscribe( (data: any) => {
      // console.log(data.artists.items);
      this.artists = data;
      this.loading = false;
    })

  }

}
