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
      pokemon.hp = pokemon.hpMax;
      this.equipe.push(pokemon);
    }
    else {
      alert("TON EQUIPE EST DEJA FULL !!!!");
    }
  }

  removePokemon(pokemon: Pokemon){
    let pokemonIndex = this.equipe.indexOf(pokemon);
    this.equipe.splice(pokemonIndex, 1);
  }

  createRandomEquip(){
    this.equipe.splice(0);
    for(let i=0; i<6 ; i++){
     this.generatePokemon();
    }
  }

    generatePokemon(){
      do{
        var id = Math.floor(Math.random()*151+1);
      } while(this.equipe.find((pokemon) => pokemon.id === id))
      this.addPokemon(this.pokemonsService.getPokemon(id));
    }
  
}