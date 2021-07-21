import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { PokemonInit, AllPokemonResponse, PokemonDetails, pokemonShort, PokemonSpecies, EvolutionChain, Chain } from '../models/pokemon-detail';
import { TypesDetails } from '../models/type-details';
import { GenerationDetails } from '../models/generation-details';
import { forkJoin } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PokemonService {
  private api_url = 'https://pokeapi.co/api/v2';
  loadingScroll: boolean;
  model = '1';
  evolutions = [];

  constructor(private http: HttpClient) { }

  // Get list of pokemons by number
  getPokeNumber(next_url?: string) {
    let url = '';

    next_url ? (url = next_url, this.loadingScroll = true) : url = `${this.api_url}/pokemon?limit=10&offset=0`;

    return this.http.get<AllPokemonResponse>(url).pipe(map(this.getPokemonsListInfo));
    
  }

  getPokemonsListInfo(res: AllPokemonResponse) {
    const pokemonList: PokemonInit[] = res.results.map( pokemon => {

      const urlArr = pokemon.url.split('/');
      const id  = urlArr[6];
      const pic = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${ id }.png`;

      return { id, pic, name: pokemon.name }
    });

    return {pokemonList, next: res.next};

  }

  // Get list of pokemons by type
  getPokeType(type: string) {
    const url = `${this.api_url}/type/${type}`;
    return this.http.get<TypesDetails>(url).pipe(map(this.getPokeInfoByType));
  }

  getPokeInfoByType(res: TypesDetails) {
    const pokemonList: PokemonInit[] = res.pokemon.map( pokemon => {

      const urlArr = pokemon.pokemon.url.split('/');
      const id  = urlArr[6];
      const pic = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${ id }.png`;

      return { id, pic, name: pokemon.pokemon.name };
    });

    return {pokemonList, total: res.pokemon.length, damage: res.damage_relations };

  }

  // Get list pokemons by generation
  getPokeGeneration(genNum: string) {
    const url = `${this.api_url}/generation/${genNum}`;
    return this.http.get<GenerationDetails>(url).pipe(map(this.getPokeInfoByGen));

  }

  getPokeInfoByGen(res: GenerationDetails) {
    const pokemonList: PokemonInit[] = res.pokemon_species.map( pokemon => {

      const urlArr = pokemon.url.split('/');
      const id  = urlArr[6];
      const pic = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${ id }.png`;

      return { id, pic, name: pokemon.name };
    });

    return {pokemonList, total: res.pokemon_species.length, main_region: res.main_region };

  }

  // Get single pokemon information
  getPokeDetails(id: string) {
    const url1 = `${this.api_url}/pokemon/${id}/`;
    const pokemon1 = this.http.get<any>(url1).pipe(map(this.getAllPokeInfo));
    const url2 = `${this.api_url}/pokemon-species/${id}/`;
    const pokemon2 = this.http.get<any>(url2).pipe(map(this.getPokemonSpecieInfo));

    return forkJoin([pokemon1, pokemon2]);

  }

  // Search pokemon by number or name
  searchPokemon(term: string) {
    const url = `${this.api_url}/pokemon/${term}/`;
    // this.getPokeDetails(term).subscribe();
    return this.http.get<any>(url).pipe(map(pokemon => {
      const pokemonBasic: PokemonInit = {
        id: pokemon.id.toString(),
        name: pokemon.name,
        pic: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${ pokemon.id }.png`
      }
      return pokemonBasic;
    } ));

  }

  getAllPokeInfo(pokemon: PokemonDetails) {
    let result: pokemonShort;

    if (pokemon) {
      const pokemonBasic: PokemonInit = {
        id: pokemon.id.toString(),
        name: pokemon.name,
        pic: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${ pokemon.id }.png`
      }

      result = {
        pokemonBasic,
        moves: pokemon.moves,
        stats: pokemon.stats,
        weight: pokemon.weight, 
        height: pokemon.height,
        types: pokemon.types,
        abilities: pokemon.abilities 
      };

    }

    return result;
  }

  getPokemonSpecieInfo(result: PokemonSpecies) {
    const pokemon: any = {
      evolution_chain: result.evolution_chain,
      generation: result.generation,
      shape: result.shape
    }
    return pokemon;
  }

  getEvolutionChain(url: string) {

    return this.http.get<EvolutionChain>(url).pipe(map(res => {
      this.evolutions = [] 

      this.getEvolution(res.chain);

      return this.evolutions;
    }))

  }

  getEvolution(chain: Chain) {
    const urlArr = chain.species.url.split('/');
    const id  = urlArr[6];
    const pic = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${ id }.png`;
    this.evolutions.push({ id, pic, name: chain.species.name })

    if (chain.evolves_to.length) {
      this.getEvolution(chain.evolves_to[0]);
    }

  }
}
