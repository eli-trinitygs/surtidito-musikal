import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApispotifyService {

  constructor(private http: HttpClient) {
    console.log('Servcio de Spotify Listo :D');
    }
    getNewReleases() {
      const headers= new HttpHeaders({
        'Authorization': 'Bearer BQCvDrwr7fxK1eTdNg79k6L0os7lm4YQYswwkrcNFt_2WNsT5W6Vho2idRqcoXCbnMrs3X6hGAHZf9qCjFI'
      })
      
      return this.http.get('https://api.spotify.com/v1/browse/new-releases', {headers});
      
      // this.http.get('https://api.spotify.com/v1/browse/new-releases', {headers})
      // .subscribe(data => {
      //   console.log(data);
      // });
   }


   //Search
   getArtist(searching: string) {

    const headers= new HttpHeaders({
      'Authorization': 'Bearer BQCvDrwr7fxK1eTdNg79k6L0os7lm4YQYswwkrcNFt_2WNsT5W6Vho2idRqcoXCbnMrs3X6hGAHZf9qCjFI'
    })
    
    return this.http.get(`https://api.spotify.com/v1/search?q=${ searching }&type=artist&limit=15`, {headers});
    
   }
   
}
