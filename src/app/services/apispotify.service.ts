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
        'Authorization': 'Bearer BQBB3H2QK_Q3ncGZG6RCbZk71ynzIKhD-hbRb1L-Te9J3ZzDlj1nYOkn9eYFVQ2LMBkPuwiODYveUoEca1E'
      })
      
      return this.http.get('https://api.spotify.com/v1/browse/new-releases', {headers});
      
      // this.http.get('https://api.spotify.com/v1/browse/new-releases', {headers})
      // .subscribe(data => {
      //   console.log(data);
      // });
   }
}
