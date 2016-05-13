import * as Rx from 'rxjs';

function get(url) {
  return Rx.Observable.fromPromise(
    fetch(url)
    .then(res => res.json())
  );
}

export function getArtists(query) {
  return get(`https://api.spotify.com/v1/search?q=${ query }&type=artist`);
}
