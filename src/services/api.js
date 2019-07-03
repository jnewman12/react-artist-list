var URL = 'https://shielded-fjord-54456.herokuapp.com'

// index
export function getArtists() {
  return fetch(`${URL}/artists`).then(function(res) {
    return res.json();
  })
}

// show
export function getArtist(id) {
  return fetch(`${URL}/artists/${id}`).then(function(res) {
    return res.json();
  })
}

// create
export function createArtist(artist) {
  fetch(`${URL}/artists`, {
    method: 'POST',
    body: JSON.stringify({
      name: artist.name,
      description: artist.description,
      top_track: artist.topTrack,
      image_url: artist.imageUrl
    }),
    headers: {
      'content-type': 'application/json'
    }
  })
}

// edit
export function editArtist(artist) {
  fetch(`${URL}/artists/${artist.id}`, {
    method: 'PUT',
    body: JSON.stringify({
      name: artist.name,
      description: artist.description,
      top_track: artist.topTrack,
      image_url: artist.imageUrl
    }),
    headers: {
      'content-type': 'application/json'
    }
  })
}

// delete
export function deleteArtist(id) {
  return fetch(`${URL}/artists/${id}`, {
    method: 'delete'
  }).then(function(res) {
    return res.json()
  });
}
