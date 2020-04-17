import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';



@Component({
  selector: 'app-tarjetas',
  templateUrl: './tarjetas.component.html',
  styleUrls: ['./tarjetas.component.css']
})
export class TarjetasComponent implements OnInit {

@Input() items: any[]= [];

  constructor(private router: Router) { }

  ngOnInit() {}

  viewArtist( item: any ) {
    // console.log(item);
    let artistId;
    
    if ( item.type === 'artist') {
      artistId = item.id;
    } 
    else {
      artistId = item.artists[0].id;
        }
        // console.log(artistId);
        this.router.navigate(['/artist', artistId]);
  }

}
