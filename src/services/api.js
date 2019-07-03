var URL = 'https://shielded-fjord-54456.herokuapp.com'

// index
export function getAll() {
  return fetch(`${URL}/artists`).then(function(res) {
    return res.json();
  })
}

// show
// export function getOne() {

// }

// // create
// export function create() {

// }

// // edit
// export function edit() {

// }

// delete
export function deleteArtist(id) {
  return fetch(`${URL}/artists/${id}`, {
    method: 'delete'
  }).then(function(response) {
    return response.json()
  });
}
