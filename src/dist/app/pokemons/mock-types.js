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
var TypesService = /** @class */ (function () {
    function TypesService() {
        this.pokemonTypes = [
            [0.5, 1, 1, 0.5, 0.5, 2, 0.5, 2, 1, 1, 1, 1, 1, 2, 1, 1, 1, 1],
            [2, 1, 1, 1, 1, 0.5, 1, 2, 0.5, 2, 1, 0.5, 0.5, 2, 1, 0.1, 2, 0.5],
            [0.5, 1, 2, 1, 1, 0.1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
            [1, 1, 0.5, 0.5, 1, 1, 2, 1, 1, 1, 0.5, 1, 1, 2, 2, 1, 1, 1],
            [1, 1, 0.5, 2, 0.5, 1, 1, 1, 1, 1, 0.5, 1, 1, 1, 0.1, 1, 1, 2],
            [0.5, 2, 2, 1, 1, 1, 0.5, 1, 1, 1, 1, 0.5, 1, 1, 1, 1, 2, 1],
            [2, 1, 0.5, 0.5, 1, 1, 0.5, 2, 2, 1, 2, 1, 1, 0.5, 1, 1, 1, 1],
            [0.5, 1, 2, 0.5, 1, 1, 0.5, 0.5, 1, 1, 2, 1, 1, 1, 2, 1, 1, 2],
            [0.5, 0.5, 1, 1, 1, 0.5, 0.5, 1, 1, 1, 2, 0.5, 2, 1, 1, 0.5, 2, 0.5],
            [0.5, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0.5, 1, 0.1, 1, 1],
            [0.5, 1, 0.5, 2, 1, 1, 0.5, 1, 0.5, 1, 0.5, 0.5, 1, 2, 2, 1, 1, 0.5],
            [0.1, 1, 1, 1, 1, 2, 1, 1, 1, 1, 2, 0.5, 1, 0.5, 0.5, 0.5, 1, 1],
            [0.5, 2, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2, 0.5, 1, 1, 1, 0.1, 1],
            [0.5, 0.5, 1, 1, 1, 1, 2, 2, 2, 1, 1, 1, 1, 1, 0.5, 1, 1, 2],
            [2, 1, 1, 1, 2, 1, 2, 1, 0.5, 1, 0.5, 2, 1, 2, 1, 1, 1, 0.1],
            [1, 1, 1, 1, 1, 1, 1, 1, 1, 0.1, 1, 1, 2, 1, 1, 2, 0.5, 1],
            [1, 0.5, 1, 1, 1, 0.5, 1, 1, 1, 1, 1, 1, 2, 1, 1, 2, 0.5, 1],
            [0.5, 2, 1, 1, 0.5, 1, 1, 1, 2, 1, 2, 1, 1, 0.5, 1, 1, 1, 1]
        ];
    }
    TypesService.prototype.getEfficacite = function () {
        return this.pokemonTypes;
    };
    TypesService = __decorate([
        core_1.Injectable(),
        __metadata("design:paramtypes", [])
    ], TypesService);
    return TypesService;
}());
exports.TypesService = TypesService;
//# sourceMappingURL=mock-types.js.map