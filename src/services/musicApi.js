export const getArtists = (artist, page = 1) => {
  return fetch(`http://musicbrainz.org/ws/2/artist?query=${artist}&fmt=json&limit=25&offset=${(page - 1) * 25}`, {
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

export const getReleases = (id, page = 1) => {
  return fetch(`http://musicbrainz.org/ws/2/release?artist=${id}&fmt=json&offset=${(page - 1) * 25}`, {
    method: 'GET',
    headers: { 'Content-Type': 'application/json' },
  })
    .then(res => {
      if(!res.ok) throw 'Could not get releases';

      return res.json();
    });
};

export const getRecordings = (id) => {
  return fetch(`http://musicbrainz.org/ws/2/recording?release=${id}&fmt=json&limit=100`, {
    method: 'GET',
    headers: { 'Content-Type': 'application/json' },
  })
    .then(res => {
      if(!res.ok) throw 'Could not get recordings';

      return res.json();
    });
};

export const getLyrics = (artist, song) => {
  return fetch(`https://api.lyrics.ovh/v1/${artist}/${song}`, {
    method: 'GET',
    headers: { 'Content-Type': 'application/json' },
  })
    .then(res => {
      if(!res.ok) throw 'Could not get lyrics';

      return res.json();
    });
};
