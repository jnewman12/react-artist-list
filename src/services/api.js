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
export function createArtist() {
  fetch(`${URL}/artists`, {
    method: 'POST',
    body: JSON.stringify({
      title: this.state.postTitle,
      body: this.state.postBody,
      link: this.state.postLink
    }),
    headers: {
      'content-type': 'application/json'
    }
  })
}

// edit
export function editArtist(id) {
  fetch(`${URL}/artists/${id}`, {
    method: 'PUT',
    body: JSON.stringify({
      title: this.state.postTitle,
      body: this.state.postBody,
      link: this.state.postLink
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
