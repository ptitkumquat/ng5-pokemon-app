import { Component, EventEmitter } from '@angular/core';
import { OnInit } from '@angular/core';

import { Pokemon } from './pokemon';
import { POKEMONS } from './mock-pokemons';

@Component({
  selector: 'pokemon-app',
  templateUrl: './app/app.component.html',
})
export class AppComponent implements OnInit {


  private pokemons: Pokemon[];
  private title: string = "Pokémons";

  private equipe: Pokemon[]=[];

  ngOnInit() {
    this.pokemons = POKEMONS;
  }


  selectPokemon(pokemon: Pokemon) {
    alert("JE TE CHOISIS, " + pokemon.name.toUpperCase() + " !!!!!!!");
  }

  addPokemon(pokemon: Pokemon) {
    if (this.equipe.length < 6) {
      this.equipe.push(pokemon);
    }
    else {
      alert("TON EQUIPE EST DEJA FULL !!!!");
    }
    console.log(this.equipe);
  }

  removePokemon(pokemon: Pokemon){
    let pokemonIndex = this.equipe.indexOf(pokemon);
    this.equipe.splice(pokemonIndex, 1);
  }
}