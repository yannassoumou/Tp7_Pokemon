import {Component, OnInit} from '@angular/core';
import {Pokemon} from '../pokemon';

@Component({
  selector: 'app-my-component',
  templateUrl: './my-component.component.html',
  styleUrls: ['./my-component.component.css']
})
export class MyComponentComponent implements OnInit {

  id: string = '';
  listPokemon: Pokemon [] = [];
  selectedPokeid: string;

  constructor() {
    this.listPokemon.push(new Pokemon('1','pikachu'));
    this.listPokemon.push(new Pokemon('2','ronflex'));
    this.listPokemon.push(new Pokemon('3','bullbazor'));
    this.listPokemon.push(new Pokemon('4','venuzor'));
    this.listPokemon.push(new Pokemon('5','charmandeur'));
  }

  ngOnInit(): void {
  }

}
