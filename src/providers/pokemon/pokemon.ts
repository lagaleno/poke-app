import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

/*
  Generated class for the PokemonProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class PokemonProvider {
	
  pokeApiUrl = 'https://pokeapi.co/api/v2/';

  constructor(public http: HttpClient) {
    console.log('Hello PokemonProvider Provider');
  }

  getPokemon(id):Observable<any>{
    return this.http.get(this.pokeApiUrl+'pokemon/'+id).map(res=> res);
  }
}
