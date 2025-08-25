import { RenderMode, ServerRoute } from '@angular/ssr';

export const serverRoutes: ServerRoute[] = [
  { path: 'about', renderMode: RenderMode.Prerender },
  { path: 'pricing', renderMode: RenderMode.Prerender },
  { path: 'contact', renderMode: RenderMode.Prerender },
  {
    path: 'pokemons/page/:page',
    renderMode: RenderMode.Prerender,
    async getPrerenderParams() {
      //Get first 10 pages
      const pages: { page: string }[] = [];
      for (let index = 0; index < 10; index++) {
        pages.push({ page: `${index}` });
      }
      return pages;
    },
  },
  {
    path: 'pokemons/:id',
    renderMode: RenderMode.Prerender,
    async getPrerenderParams() {
      return [{ id: 'aerodactyl' }];
    },
  },
  {
    path: '**',
    renderMode: RenderMode.Server,
  },
];
