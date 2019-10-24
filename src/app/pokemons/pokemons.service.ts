import { Injectable } from '@angular/core';
import { Pokemon } from './pokemon';
import { POKEMONS } from './mock-pokemons';


@Injectable()
export class PokemonsService {

    // Retourne tous les pokémons
    getPokemons(): Pokemon[] {
        return POKEMONS;
    }

    // Retourne le pokémon avec l'identifiant passé en paramètre
    getPokemon(id: number): Pokemon {
        let pokemons = this.getPokemons();

        for (let index = 0; index < pokemons.length; index++) {
            if (id === pokemons[index].id) {
                return this.clonePokemon(pokemons[index]);
            }
        }
    }

    clonePokemon(pokemon: Pokemon): Pokemon{
        return Object.assign({}, pokemon);
    }

    
}