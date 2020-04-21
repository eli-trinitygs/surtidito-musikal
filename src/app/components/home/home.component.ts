import { Component, OnInit } from '@angular/core';
import { ApispotifyService } from 'src/app/services/apispotify.service';
// import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  newSongs: any[] = [];

  loading: boolean;

  error: boolean;
  mensajeError: string;

  constructor(private spotify: ApispotifyService) {
  
    this.loading = true;

    this.error = false;


    this.spotify.getNewReleases()
    .subscribe( (data: any) => {
      // console.log(data.albums.items);
      this.loading = false;
      this.newSongs = data;
    }, 
    ( errorServicio ) => {

      this.loading = false;
      this.error = true;

      console.log(errorServicio);
      this.mensajeError = errorServicio.error.error.message;
    } )
  }

}



// export class HomeComponent implements OnInit {

//   paises: any[] = [];
  
//     constructor( private http: HttpClient) {
  
//       this.http.get('https://restcountries.eu/rest/v2/lang/es')
//       .subscribe( (resp: any) => {
//         this.paises = resp;
//         console.log(this.paises);
//       })
//      }
  
//     ngOnInit() {
//     }
  
//   }