import { Component, OnInit } from '@angular/core';
import { ApispotifyService } from 'src/app/services/apispotify.service';
// import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  constructor(private spotify: ApispotifyService) {
    console.log('LISTOOON');

    this.spotify.getNewReleases();
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