import { Pipe, PipeTransform } from '@angular/core';


/*
* Affiche la couleur correspondant au type du pokémon.
* prend en argument le type du pokémon.
* exemple d'utilisation : 
*  {{ pokemon.type | pokemonTypeColor }}
*/

@Pipe({ name: 'pokemonTypeColor' })
export class PokemonTypeColorPipe implements PipeTransform {
    transform(type: string): string {

        let color: string;

        switch(type) {
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
            default:
                color = 'grey';
                break;
        }

        return 'chip ' + color;

    }
}
