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
var mock_pokemons_1 = require("./mock-pokemons");
var ListPokemonComponent = /** @class */ (function () {
    function ListPokemonComponent(router) {
        this.router = router;
        this.title = "Pokémons";
        this.equipe = [];
    }
    ListPokemonComponent.prototype.ngOnInit = function () {
        this.pokemons = mock_pokemons_1.POKEMONS;
    };
    ListPokemonComponent.prototype.detailPokemon = function (pokemon) {
        console.log("details du pokémon " + pokemon.name);
        var link = ['/pokemon', pokemon.id];
        this.router.navigate(link);
    };
    ListPokemonComponent.prototype.selectPokemon = function (pokemon) {
        alert("JE TE CHOISIS, " + pokemon.name.toUpperCase() + " !!!!!!!");
    };
    ListPokemonComponent.prototype.addPokemon = function (pokemon) {
        if (this.equipe.length < 6) {
            this.equipe.push(pokemon);
        }
        else {
            alert("TON EQUIPE EST DEJA FULL !!!!");
        }
        console.log(this.equipe);
    };
    ListPokemonComponent.prototype.removePokemon = function (pokemon) {
        var pokemonIndex = this.equipe.indexOf(pokemon);
        this.equipe.splice(pokemonIndex, 1);
    };
    ListPokemonComponent = __decorate([
        core_1.Component({
            selector: 'list-pokemon',
            templateUrl: './app/list-pokemon.component.html',
        }),
        __metadata("design:paramtypes", [router_1.Router])
    ], ListPokemonComponent);
    return ListPokemonComponent;
}());
exports.ListPokemonComponent = ListPokemonComponent;
//# sourceMappingURL=list-pokemon.component.js.map