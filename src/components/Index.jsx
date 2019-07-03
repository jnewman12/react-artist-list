import React, { Component } from 'react';
import { getAll, deleteArtist } from '../services/api';

import { Link, History } from 'react-router-dom';

class Index extends Component {
  constructor() {
    super()
    this.state = {
      artists: []
    }
    // this.handleDelete = this.handleDelete.bind(this);
  }

  componentDidMount() {
    getAll().then((json) => {
      this.setState({artists: json});
    })
  }

  handleDelete = (id) => {
    deleteArtist(id).then(json => {
      this.props.history.push('/');
    })
  }

  render() {
    var artists = this.state.artists.map((artist) => {
      return(
        <li key={artist.id}>
          <img src={artist.image_url} alt=""/>
          <br/>
          <Link to={`artist/${artist.id}/edit`}>Edit {artist.name}</Link>
          <br/>
          <Link to={`artist/${artist.id}`}>View {artist.name}</Link>
          <br/>
          <a className='btn btn-danger' onClick={() => this.handleDelete(artist.id)}>delete {artist.name}</a>
        </li>
      )  
    });

    return (
      <div>
        <h1>List of all Artists</h1>
        <br/>
        <br/>

        <ul>
          { artists }
        </ul>
      </div>
    )
  }
}

export default Index;
