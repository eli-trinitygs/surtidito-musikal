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
        'Authorization': 'Bearer BQCkRWIsKDP-NKm6HZh6BegLRf35GkD0aFZ8gEOu_bDqnZpljPdXEDYmmUI4uGMdqsngqCVHCBaP7y_LlWM'
      })
      
      this.http.get('https://api.spotify.com/v1/browse/new-releases', {headers})
      .subscribe(data => {
        console.log(data);
      });
   }
}
