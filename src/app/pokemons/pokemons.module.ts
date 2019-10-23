import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PokemonRoutingModule } from './pokemon-routing.module';

import { ListPokemonComponent } from './list-pokemon.component';
import { DetailPokemonComponent } from './detail-pokemon.component';
import { BorderCardDirective } from './border-card.directive';
import { PokemonTypeColorPipe } from './pokemon-type-color.pipe';
import { PokemonsService } from './pokemons.service';
import { PokemonEquipeService } from './pokemon-equipe.service';
import { FightTeamComponent } from './combat/fightTeam.component';
import { TypesService } from './mock-types';

@NgModule({
	imports: [
        CommonModule,
        PokemonRoutingModule
	],
	declarations: [
		ListPokemonComponent,
		DetailPokemonComponent,
		BorderCardDirective,
		PokemonTypeColorPipe,
		FightTeamComponent
	],
	providers: [ 
		PokemonsService,
		PokemonEquipeService,
		TypesService
	]
})
export class PokemonsModule { }