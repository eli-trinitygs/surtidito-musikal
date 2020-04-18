import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApispotifyService } from 'src/app/services/apispotify.service';




@Component({
  selector: 'app-artist',
  templateUrl: './artist.component.html',
  styleUrls: ['./artist.component.css']
})
export class ArtistComponent implements OnInit {

  artist: any = {};

  loadingArtist: boolean;

  constructor(private router: ActivatedRoute,
              private spotify: ApispotifyService ) {

                this.loadingArtist = true;

    this.router.params.subscribe( params => {
      // console.log(params['params']);
      this.getArtist(params['id']);
    })
   }

  ngOnInit() {}

  getArtist( id: string) {

    this.loadingArtist = true;

    this.spotify.getArtist(id)
      .subscribe( artist => {
        console.log(artist);
        this.artist = artist;

        this.loadingArtist = false;
      })
  }

}
