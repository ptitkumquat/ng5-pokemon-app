import { Component, EventEmitter } from '@angular/core';
import { OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PokemonEquipeService } from '../pokemon-equipe.service';
import { Pokemon } from '../pokemon';
import { PokemonsService } from '../pokemons.service';
import { TypesService } from '../mock-types';
import { TypeEnum } from '../type-enum';
import { forEach } from '@angular/router/src/utils/collection';


@Component({
  selector: 'fight-team',
  templateUrl: './app/pokemons/combat/fightTeam.component.html',
  styleUrls: ['./app/pokemons/combat/fightTeam.component.css']
})
export class FightTeamComponent implements OnInit {

  private equipe: Pokemon[];
  private equipeAdv: Pokemon[];
  private compteur: number;
  private winner: Pokemon[];
  private coeff: number[] = [];
  private pokemon: Pokemon;

  constructor(
    private router: Router,
    private pokemonEquipeService: PokemonEquipeService,
    private pokemonEquipeAdvService: PokemonEquipeService,
    private pokemonService: PokemonsService,
    private mockType: TypesService
  ) { }

  ngOnInit() {
    this.pokemonEquipeAdvService = new PokemonEquipeService(this.pokemonService);
    this.equipe = this.pokemonEquipeService.getEquipe();
    this.equipeAdv = this.pokemonEquipeAdvService.getEquipe();
    this.beginFight();
  }

  beginFight() {
    this.winner = null;
    this.compteur = 2;
    this.pokemonEquipeService.createRandomEquip();
    this.pokemonEquipeAdvService.createRandomEquip();
  }

  rerollPokemon(pokemon: Pokemon, event: any) {
    event.stopPropagation();
    this.pokemonEquipeService.removePokemon(pokemon);
    this.pokemonEquipeService.generatePokemon();
    this.compteur -= 1;
  }

  combat(p1: Pokemon, p2: Pokemon) {
    if (this.isFirst(p1, p2)) {
      this.attack(p1, p2);
    }
    while (p1.hp > 0 && p2.hp > 0) {
      this.attack(p2, p1);
      if (p1.hp > 0)
        this.attack(p1, p2);
    }
  }

  async attack(attaquant: Pokemon, defenseur: Pokemon) {
    defenseur.hp -= attaquant.cp * this.getCoeffType(attaquant, defenseur) / (1 + defenseur.def / 25);
    console.log(defenseur.hp);
    await this.sleep(2000);
  }

  getCoeffType(p1: Pokemon, p2: Pokemon): number {
    this.coeff = [];
    p1.types.forEach((type) => {
      p2.types.forEach((type2) => {
        this.coeff.push(this.mockType.getEfficacite()[TypeEnum[type]][TypeEnum[type2]]);
      });
    });
    return this.coeff.reduce((a, c) => a * c);
  }

  async fullCombat() {
    this.compteur = 0;
    while (this.equipe.length > 0 && this.equipeAdv.length > 0) {
      await this.sleep(2000);
      this.combat(this.equipe[0], this.equipeAdv[0]);
      this.removeKo();
    }
    if (this.equipe.length == 0) {
      this.winner = this.equipe;
    }
    if (this.equipeAdv.length == 0) {
      this.winner = this.equipeAdv;
    }
  }

  sleep(milliseconds: number) {
    return new Promise(resolve => setTimeout(resolve, milliseconds))
  }

  removeKo() {
    this.equipe[0].hp > 0 ? this.equipeAdv.splice(0, 1) : this.equipe.splice(0, 1);
  }

  isFirst(p1: Pokemon, p2: Pokemon): boolean {
    return p1.speed > p2.speed;
  }

  progress(pokemon: Pokemon): string {
    const max = this.pokemonService.getPokemon(pokemon.id).hpMax;
    return pokemon.hp / max * 100 + '%';
  }
  
  detailPokemon(pokemon: Pokemon) {
    console.log("details du pokémon " + pokemon.name);
    let link = ['/pokemon', pokemon.id];
    this.router.navigate(link);
  }

}
