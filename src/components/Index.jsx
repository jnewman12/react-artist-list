import React, { Component } from 'react';
import { getArtists, deleteArtist } from '../services/api';

import { Link, Redirect } from 'react-router-dom';

class Index extends Component {
  constructor() {
    super()
    this.state = {
      artists: [],
      redirect: false
    }
  }

  componentDidMount() {
    getArtists().then((json) => {
      this.setState({artists: json});
    })
  }

  handleDelete = (id) => {
    deleteArtist(id).then((json) => {
      window.location = '/'
    })
  }

  render() {
    var artists = this.state.artists.map((artist) => {
      return(
        <li key={artist.id} style={{paddingBottom:'50px'}}>
          <img src={artist.image_url} alt=""/>
          <br/>
          <Link to={`artists/${artist.id}/edit`}>Edit {artist.name}</Link>
          <br/>
          <Link to={`artists/${artist.id}`}>View {artist.name}</Link>
          <br/>
          <a className='btn btn-danger' onClick={() => this.handleDelete(artist.id)}>delete {artist.name}</a>
          <br/>
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
