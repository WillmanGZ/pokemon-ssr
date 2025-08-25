import {
  ApplicationRef,
  ChangeDetectionStrategy,
  Component,
  inject,
  OnDestroy,
  OnInit,
  signal,
} from '@angular/core';
import { PokemonListComponent } from '../../pokemons/components/pokemon-list/pokemon-list.component';
import { PokemonsService } from '../../pokemons/services/pokemons.service';
import { SimplePokemon } from '../../pokemons/interfaces/simple-pokemon.interface';

@Component({
  selector: 'pokemons-page',
  imports: [PokemonListComponent],
  templateUrl: './pokemons-page.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class PokemonsPageComponent implements OnInit {
  private pokemonsService = inject(PokemonsService);
  public pokemons = signal<SimplePokemon[]>([]);

  ngOnInit(): void {
    this.loadPokemons();
  }

  public loadPokemons(page = 0) {
    this.pokemonsService.loadPage(page).subscribe((pokemons) => {
      this.pokemons.set(pokemons);
    });
  }
}
