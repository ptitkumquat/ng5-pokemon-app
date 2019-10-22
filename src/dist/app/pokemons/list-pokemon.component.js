"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var pokemons_service_1 = require("./pokemons.service");
var pokemon_equipe_service_1 = require("./pokemon-equipe.service");
var ListPokemonComponent = /** @class */ (function () {
    function ListPokemonComponent(router, pokemonsService, pokemonEquipeService) {
        this.router = router;
        this.pokemonsService = pokemonsService;
        this.pokemonEquipeService = pokemonEquipeService;
        this.title = "Pokémons";
        this.equipe = [];
    }
    ListPokemonComponent.prototype.ngOnInit = function () {
        this.pokemons = this.pokemonsService.getPokemons();
        this.equipe = this.pokemonEquipeService.getEquipe();
    };
    ListPokemonComponent.prototype.detailPokemon = function (pokemon) {
        console.log("details du pokémon " + pokemon.name);
        var link = ['/pokemon', pokemon.id];
        this.router.navigate(link);
    };
    ListPokemonComponent.prototype.selectPokemon = function (pokemon) {
        this.pokemonEquipeService.selectPokemon(pokemon);
    };
    ListPokemonComponent.prototype.addPokemon = function (pokemon, event) {
        event.stopPropagation();
        this.pokemonEquipeService.addPokemon(pokemon);
    };
    ListPokemonComponent.prototype.removePokemon = function (pokemon) {
        this.pokemonEquipeService.removePokemon(pokemon);
    };
    ListPokemonComponent = __decorate([
        core_1.Component({
            selector: 'list-pokemon',
            templateUrl: './app/pokemons/list-pokemon.component.html',
            styleUrls: ['./app/pokemons/list-pokemon.component.css']
        }),
        __metadata("design:paramtypes", [router_1.Router,
            pokemons_service_1.PokemonsService,
            pokemon_equipe_service_1.PokemonEquipeService])
    ], ListPokemonComponent);
    return ListPokemonComponent;
}());
exports.ListPokemonComponent = ListPokemonComponent;
//# sourceMappingURL=list-pokemon.component.js.map