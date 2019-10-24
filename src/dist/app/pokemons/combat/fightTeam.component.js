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
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var pokemon_equipe_service_1 = require("../pokemon-equipe.service");
var pokemons_service_1 = require("../pokemons.service");
var mock_types_1 = require("../mock-types");
var type_enum_1 = require("../type-enum");
var FightTeamComponent = /** @class */ (function () {
    function FightTeamComponent(router, pokemonEquipeService, pokemonEquipeAdvService, pokemonService, mockType) {
        this.router = router;
        this.pokemonEquipeService = pokemonEquipeService;
        this.pokemonEquipeAdvService = pokemonEquipeAdvService;
        this.pokemonService = pokemonService;
        this.mockType = mockType;
        this.coeff = [];
    }
    FightTeamComponent.prototype.ngOnInit = function () {
        this.pokemonEquipeAdvService = new pokemon_equipe_service_1.PokemonEquipeService(this.pokemonService);
        this.equipe = this.pokemonEquipeService.getEquipe();
        this.equipeAdv = this.pokemonEquipeAdvService.getEquipe();
        this.beginFight();
    };
    FightTeamComponent.prototype.beginFight = function () {
        this.winner = null;
        this.compteur = 2;
        this.pokemonEquipeService.createRandomEquip();
        this.pokemonEquipeAdvService.createRandomEquip();
    };
    FightTeamComponent.prototype.rerollPokemon = function (pokemon, event) {
        event.stopPropagation();
        this.pokemonEquipeService.removePokemon(pokemon);
        this.pokemonEquipeService.generatePokemon();
        this.compteur -= 1;
    };
    FightTeamComponent.prototype.combat = function (p1, p2) {
        if (this.isFirst(p1, p2)) {
            this.attack(p1, p2);
        }
        while (p1.hp > 0 && p2.hp > 0) {
            this.attack(p2, p1);
            if (p1.hp > 0)
                this.attack(p1, p2);
        }
    };
    FightTeamComponent.prototype.attack = function (attaquant, defenseur) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        defenseur.hp -= attaquant.cp * this.getCoeffType(attaquant, defenseur) / (1 + defenseur.def / 25);
                        console.log(defenseur.hp);
                        return [4 /*yield*/, this.sleep(2000)];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    FightTeamComponent.prototype.getCoeffType = function (p1, p2) {
        var _this = this;
        this.coeff = [];
        p1.types.forEach(function (type) {
            p2.types.forEach(function (type2) {
                _this.coeff.push(_this.mockType.getEfficacite()[type_enum_1.TypeEnum[type]][type_enum_1.TypeEnum[type2]]);
            });
        });
        return this.coeff.reduce(function (a, c) { return a * c; });
    };
    FightTeamComponent.prototype.fullCombat = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        this.compteur = 0;
                        _a.label = 1;
                    case 1:
                        if (!(this.equipe.length > 0 && this.equipeAdv.length > 0)) return [3 /*break*/, 3];
                        return [4 /*yield*/, this.sleep(2000)];
                    case 2:
                        _a.sent();
                        this.combat(this.equipe[0], this.equipeAdv[0]);
                        this.removeKo();
                        return [3 /*break*/, 1];
                    case 3:
                        if (this.equipe.length == 0) {
                            this.winner = this.equipe;
                        }
                        if (this.equipeAdv.length == 0) {
                            this.winner = this.equipeAdv;
                        }
                        return [2 /*return*/];
                }
            });
        });
    };
    FightTeamComponent.prototype.sleep = function (milliseconds) {
        return new Promise(function (resolve) { return setTimeout(resolve, milliseconds); });
    };
    FightTeamComponent.prototype.removeKo = function () {
        this.equipe[0].hp > 0 ? this.equipeAdv.splice(0, 1) : this.equipe.splice(0, 1);
    };
    FightTeamComponent.prototype.isFirst = function (p1, p2) {
        return p1.speed > p2.speed;
    };
    FightTeamComponent.prototype.progress = function (pokemon) {
        var max = this.pokemonService.getPokemon(pokemon.id).hpMax;
        return pokemon.hp / max * 100 + '%';
    };
    FightTeamComponent.prototype.detailPokemon = function (pokemon) {
        console.log("details du pokémon " + pokemon.name);
        var link = ['/pokemon', pokemon.id];
        this.router.navigate(link);
    };
    FightTeamComponent = __decorate([
        core_1.Component({
            selector: 'fight-team',
            templateUrl: './app/pokemons/combat/fightTeam.component.html',
            styleUrls: ['./app/pokemons/combat/fightTeam.component.css']
        }),
        __metadata("design:paramtypes", [router_1.Router,
            pokemon_equipe_service_1.PokemonEquipeService,
            pokemon_equipe_service_1.PokemonEquipeService,
            pokemons_service_1.PokemonsService,
            mock_types_1.TypesService])
    ], FightTeamComponent);
    return FightTeamComponent;
}());
exports.FightTeamComponent = FightTeamComponent;
//# sourceMappingURL=fightTeam.component.js.map