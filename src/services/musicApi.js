export const getArtists = (artist) => {
  return fetch(`http://musicbrainz.org/ws/2/artist?query=${artist}&fmt=json&limit=25`, {
    method: 'GET',
    headers: { 'Content-Type': 'application/json' },
  })
    .then(res => {
      if(!res.ok) throw 'Could not get artists';

      return res.json();
    })
    .then(json => {
      json.artists = json.artists.map(artist => ({
        id: artist.id,
        name: artist.name,
        disambiguation: artist.disambiguation
      }));
      return json;
    });
};

export const getReleases = (id) => {
  return fetch(`http://musicbrainz.org/ws/2/release?artist=${id}&fmt=json`, {
    method: 'GET',
    headers: { 'Content-Type': 'application/json' },
  })
    .then(res => {
      if(!res.ok) throw 'Could not get releases';

      return res.json();
    });
};
