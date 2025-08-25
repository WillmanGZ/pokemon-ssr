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

@Component({
  selector: 'pokemons-page',
  imports: [PokemonListComponent],
  templateUrl: './pokemons-page.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class PokemonsPageComponent implements OnInit, OnDestroy {
  public isLoading = signal(true);
  private appRef = inject(ApplicationRef);
  private $appState = this.appRef.isStable.subscribe((isStable) => {
    console.log(isStable);
  });

  ngOnInit(): void {
    setTimeout(() => {
      this.isLoading.set(false);
    }, 1500);
  }
  
  ngOnDestroy(): void {
    this.$appState.unsubscribe();
  }
}
