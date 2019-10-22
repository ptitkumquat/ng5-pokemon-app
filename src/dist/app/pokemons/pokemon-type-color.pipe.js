"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
/*
* Affiche la couleur correspondant au type du pokémon.
* prend en argument le type du pokémon.
* exemple d'utilisation :
*  {{ pokemon.type | pokemonTypeColor }}
*/
var PokemonTypeColorPipe = /** @class */ (function () {
    function PokemonTypeColorPipe() {
    }
    PokemonTypeColorPipe.prototype.transform = function (type) {
        var color;
        switch (type) {
            case 'Feu':
                color = 'orange darken-1';
                break;
            case 'Eau':
                color = 'blue lighten-1';
                break;
            case 'Plante':
                color = 'green lighten-1';
                break;
            case 'Insecte':
                color = 'lime darken-2';
                break;
            case 'Normal':
                color = 'brown lighten-4';
                break;
            case 'Vol':
                color = 'blue lighten-4';
                break;
            case 'Poison':
                color = 'deep-purple accent-1';
                break;
            case 'Fée':
                color = 'pink lighten-4';
                break;
            case 'Psy':
                color = 'purple accent-3';
                break;
            case 'Electrik':
                color = 'yellow accent-4';
                break;
            case 'Combat':
                color = 'deep-orange darken-4';
                break;
            case 'Sol':
                color = 'brown lighten-1';
                break;
            case 'Acier':
                color = ' blue-grey lighten-4';
                break;
            case 'Roche':
                color = 'brown lighten-3';
                break;
            default:
                color = 'grey';
                break;
        }
        return 'chip ' + color;
    };
    PokemonTypeColorPipe = __decorate([
        core_1.Pipe({ name: 'pokemonTypeColor' })
    ], PokemonTypeColorPipe);
    return PokemonTypeColorPipe;
}());
exports.PokemonTypeColorPipe = PokemonTypeColorPipe;
//# sourceMappingURL=pokemon-type-color.pipe.js.map