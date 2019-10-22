import { Injectable } from '@angular/core';
import { Pokemon } from './pokemon';
import { POKEMONS } from './mock-pokemons';
import { PokemonsService } from './pokemons.service';

@Injectable()
export class PokemonEquipeService {

    private equipe: Pokemon[]=[];

constructor(private pokemonsService: PokemonsService){}

selectPokemon(pokemon: Pokemon) {
    alert("JE TE CHOISIS, " + pokemon.name.toUpperCase() + " !!!!!!!");
  }

  getEquipe():Pokemon[]{
      return this.equipe;
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