import {Component, Input, OnInit} from '@angular/core';
import {PokeDetail} from '../pokemon';
import {PokeShareInfoService} from '../poke-share-info.service';

@Component({
  selector: 'app-pokedetail',
  templateUrl: './pokedetail.component.html',
  styleUrls: ['./pokedetail.component.css'],
  providers: [PokeShareInfoService]
})
export class PokedetailComponent implements OnInit {
  @Input('detail')
  detail: PokeDetail;

  constructor(private pokeShareService: PokeShareInfoService) {
    this.pokeShareService.getObservable().subscribe(e => console.log('e' + e));
    console.log('init poke detail');
  }

  ngOnInit(): void {
    console.log('init poke detail nginit');
  }

}
