import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
//MAP
import { map } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})


export class ApispotifyService {

  constructor(private http: HttpClient) {
    console.log('Servcio de Spotify Listo :D');
    }

    getQuery( query: string ) {
      const url = `https://api.spotify.com/v1/${query}`;

      const headers= new HttpHeaders({
        'Authorization': 'Bearer BQAIdz1GWA1PFCRjIOqJ4NMi2ReT3K9HLo0MnbUUg1QacWXQ-qaFAGqTOL_C_jk6nl2p7NwbojKrSoESUcc'
      })
      return this.http.get(url, { headers });
    }


    getNewReleases() {
      // const headers= new HttpHeaders({
      //   'Authorization': 'Bearer BQCvDrwr7fxK1eTdNg79k6L0os7lm4YQYswwkrcNFt_2WNsT5W6Vho2idRqcoXCbnMrs3X6hGAHZf9qCjFI'
      // })
      return this.getQuery('browse/new-releases?limit=15')
      .pipe(map( data => data['albums'].items));
      // return this.http.get('https://api.spotify.com/v1/browse/new-releases', {headers})
      //         .pipe(map( data => data['albums'].items));
      
      // this.http.get('https://api.spotify.com/v1/browse/new-releases', {headers})
      // .subscribe(data => {
      //   console.log(data);
      // });
   }


   //Search
   getArtists(searching: string) {
      // const headers= new HttpHeaders({
      // 'Authorization': 'Bearer BQCvDrwr7fxK1eTdNg79k6L0os7lm4YQYswwkrcNFt_2WNsT5W6Vho2idRqcoXCbnMrs3X6hGAHZf9qCjFI'})
      return this.getQuery(`search?q=${ searching }&type=artist&limit=15`)
      .pipe(map (data => data['artists'].items));
    
    // return this.http.get(`https://api.spotify.com/v1/search?q=${ searching }&type=artist&limit=15`, {headers})
    //       .pipe( map ( data => data['artists'].items));
    
   }

   //unicoArtista
   getArtist(id: string) {
    
    return this.getQuery(`artists/${id}`);
 }

 //ver los tracks
 getTopTracks (id: string) {
   return this.getQuery(`artists/${id}/top-tracks?country=us`)
   .pipe(map(data => data['tracks']));
 }
   
}
