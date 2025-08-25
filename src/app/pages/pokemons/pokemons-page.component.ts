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

@Component({
  selector: 'pokemons-page',
  imports: [PokemonListComponent],
  templateUrl: './pokemons-page.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class PokemonsPageComponent implements OnInit {
  private pokemonsService = inject(PokemonsService);

  /*  public isLoading = signal(true);
  private appRef = inject(ApplicationRef);
  private $appState = this.appRef.isStable.subscribe((isStable) => {
    console.log(isStable);
  });
 */

  ngOnInit(): void {
    /* setTimeout(() => {
      this.isLoading.set(false);
    }, 1500); */
    this.loadPokemons();
  }

  public loadPokemons(page = 0) {
    this.pokemonsService.loadPage(page).subscribe((pokemons) => {});
  }
}
