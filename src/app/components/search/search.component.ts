import { Component,  } from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent {

  constructor() { }

  search(searching:string) {
    console.log(searching);
    
  }

}
