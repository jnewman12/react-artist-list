import React, { Component } from 'react';
import { getArtist, editArtist } from '../services/api';

class Edit extends Component {
  constructor() {
    super();
    this.state = {
      id: '',
      name: '',
      description: '',
      topTrack: '',
      imageUrl: ''
    }
  }

  componentDidMount = () => {
    var id = this.props.match.params.id;
    var self = this;

    getArtist(id).then(function(json) {
      var artist = json;
      self.setState({
        id: id,
        name: artist.name,
        description: artist.description,
        topTrack: artist.top_track,
        imageUrl: artist.image_url
      });
    })
  }

  updateName = (e) => {
    this.setState({name: e.target.value})
  }

  updateDescription = (e) => {
    this.setState({description: e.target.value})
  }

  updateTopTrack = (e) => {
    this.setState({topTrack: e.target.value})
  }

  updateImageUrl = (e) => {
    this.setState({imageUrl: e.target.value})
  }

  handleSubmit = (e) => {
    e.preventDefault();
    var url = 'https://shielded-fjord-54456.herokuapp.com/artists';
    var self = this;

    fetch(`${url}/${self.state.id}`, {
      method: 'PUT',
      body: JSON.stringify({
        name: self.state.name,
        description: self.state.description,
        top_track: self.state.topTrack,
        image_url: self.state.imageUrl
      }),
      headers: {
        'content-type': 'application/json'
      }
    }).then(function() {
      window.location = '/'
    })
  }

  render() {
    return (
      <div>
        <h4>Edit {this.state.name}</h4>
        <form onSubmit={this.handleSubmit}>
          <label>Name of Artist</label><br/>
          <input value={this.state.name} onChange={this.updateName} required={true} />
          <br/>

          <label>Description of Artist</label><br/>
          <input value={this.state.description} onChange={this.updateDescription} required={true} />
          <br/>

          <label>Top Track</label><br/>
          <input value={this.state.topTrack} onChange={this.updateTopTrack} required={true} />
          <br/>

          <label>Image URL</label><br/>
          <input value={this.state.imageUrl} onChange={this.updateImageUrl} required={true} />
          <br/>

          <input type="submit" value="Edit Artist"/>
        </form>
      </div>
    )
  }
}

export default Edit;