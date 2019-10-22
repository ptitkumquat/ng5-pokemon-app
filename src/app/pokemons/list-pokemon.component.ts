import { Component, EventEmitter } from '@angular/core';
import { OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Pokemon } from './pokemon';
import { PokemonsService } from './pokemons.service';
import { PokemonEquipeService } from './pokemon-equipe.service';

@Component({
  selector: 'list-pokemon',
  templateUrl: './app/pokemons/list-pokemon.component.html',
})
export class ListPokemonComponent implements OnInit {


  private pokemons: Pokemon[];
  private title: string = "Pokémons";
  private equipe: Pokemon[]=[];


  constructor(
    private router: Router, 
    private pokemonsService: PokemonsService,
    private pokemonEquipeService: PokemonEquipeService
    ){}

  ngOnInit() {
    this.pokemons = this.pokemonsService.getPokemons();
    this.equipe = this.pokemonEquipeService.getEquipe();
  }

  detailPokemon(pokemon: Pokemon) {
      console.log("details du pokémon "+ pokemon.name);
      let link = ['/pokemon', pokemon.id];
      this.router.navigate(link);
  }

      selectPokemon(pokemon: Pokemon){
        this.pokemonEquipeService.selectPokemon(pokemon);
      }

      addPokemon(pokemon: Pokemon){
        this.pokemonEquipeService.addPokemon(pokemon);
      }

      removePokemon(pokemon: Pokemon){
        this.pokemonEquipeService.removePokemon(pokemon);
      }
  // selectPokemon(pokemon: Pokemon) {
  //   alert("JE TE CHOISIS, " + pokemon.name.toUpperCase() + " !!!!!!!");
  // }

  // addPokemon(pokemon: Pokemon) {
  //   if (this.equipe.length < 6) {
  //     this.equipe.push(pokemon);
  //   }
  //   else {
  //     alert("TON EQUIPE EST DEJA FULL !!!!");
  //   }
  //   console.log(this.equipe);
  // }

  // removePokemon(pokemon: Pokemon){
  //   let pokemonIndex = this.equipe.indexOf(pokemon);
  //   this.equipe.splice(pokemonIndex, 1);
  // }
}