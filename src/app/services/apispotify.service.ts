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
        'Authorization': 'Bearer BQDDKJyegOYcapQV5EIeLU8zgRQmNI7qLv-mDvhenHkghsaKICl0vYmRxosUBBzxSQ_tVBZQ0LMufUkUG-0'
      })
      
      return this.http.get('https://api.spotify.com/v1/browse/new-releases', {headers});
      
      // this.http.get('https://api.spotify.com/v1/browse/new-releases', {headers})
      // .subscribe(data => {
      //   console.log(data);
      // });
   }
}
