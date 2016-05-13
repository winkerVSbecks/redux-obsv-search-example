import * as Rx from 'rxjs';
import { getArtists } from '../api';

export const INIT_SEARCH = 'INIT_SEARCH';
export const SEARCH = 'SEARCH';
export const SEARCH_PENDING = 'SEARCH_PENDING';
export const SEARCH_FULFILLED = 'SEARCH_FULFILLED';
export const SEARCH_ABORTED = 'SEARCH_ABORTED';

export function initSearch() {
  return actions => {
    const search$ = actions.ofType('SEARCH')
      .debounceTime(400)
      .map(a => a.payload)
      .filter(q => q)
      .flatMap(q => getArtists(q))
      .map(res => res.artists? res.artists.items : [])
      .map(artists => artists.map(reShapeArtist))
      .map(artists => ({
        type: SEARCH_FULFILLED,
        payload: artists,
      }))
      .takeUntil(actions.ofType('STOP_SEARCH'))

    return search$;
  };
}

export function search(q) {
  return {
    type: SEARCH,
    payload: q,
  };
}

export function stopSearch(q) {
  return { type: SEARCH_ABORTED };
}

function reShapeArtist({ name, popularity, images }) {
  const image = images.length > 0 ? images[0].url :
        'https://placehold.it/128?text=N%2FA';

  return { name, popularity, image };
}
