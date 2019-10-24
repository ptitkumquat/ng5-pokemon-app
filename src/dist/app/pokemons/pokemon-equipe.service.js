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
var pokemons_service_1 = require("./pokemons.service");
var PokemonEquipeService = /** @class */ (function () {
    function PokemonEquipeService(pokemonsService) {
        this.pokemonsService = pokemonsService;
        this.equipe = [];
    }
    PokemonEquipeService.prototype.selectPokemon = function (pokemon) {
        alert("JE TE CHOISIS, " + pokemon.name.toUpperCase() + " !!!!!!!");
    };
    PokemonEquipeService.prototype.getEquipe = function () {
        return this.equipe;
    };
    PokemonEquipeService.prototype.addPokemon = function (pokemon) {
        if (this.equipe.length < 6) {
            pokemon.hp = pokemon.hpMax;
            this.equipe.push(pokemon);
        }
        else {
            alert("TON EQUIPE EST DEJA FULL !!!!");
        }
    };
    PokemonEquipeService.prototype.removePokemon = function (pokemon) {
        var pokemonIndex = this.equipe.indexOf(pokemon);
        this.equipe.splice(pokemonIndex, 1);
    };
    PokemonEquipeService.prototype.createRandomEquip = function () {
        this.equipe.splice(0);
        for (var i = 0; i < 6; i++) {
            this.generatePokemon();
        }
    };
    PokemonEquipeService.prototype.generatePokemon = function () {
        do {
            var id = Math.floor(Math.random() * 151 + 1);
        } while (this.equipe.find(function (pokemon) { return pokemon.id === id; }));
        this.addPokemon(this.pokemonsService.getPokemon(id));
    };
    PokemonEquipeService = __decorate([
        core_1.Injectable(),
        __metadata("design:paramtypes", [pokemons_service_1.PokemonsService])
    ], PokemonEquipeService);
    return PokemonEquipeService;
}());
exports.PokemonEquipeService = PokemonEquipeService;
//# sourceMappingURL=pokemon-equipe.service.js.map