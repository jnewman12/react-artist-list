import React, { Component } from 'react';
import { createArtist } from '../services/api';

class Create extends Component {
  constructor() {
    super()
    this.state = {
      name: '',
      description: '',
      topTrack: '',
      imageUrl: ''
    }
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
    e.preventDefault()
    var self = this;
    fetch('https://shielded-fjord-54456.herokuapp.com/artists', {
      method: 'POST',
      body: JSON.stringify({
        name: self.state.name,
        description: self.state.description,
        top_track: self.state.topTrack,
        image_url: self.state.imageUrl
      }),
      headers: {
        'content-type': 'application/json'
      }
    }).then(function(res) {
      window.location = '/';
    })
  }

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <label>Name of Artist</label><br/>
          <input value={this.state.name} onChange={this.updateName} required={true} />
          <br/>

          <label>Description of Artist</label><br/>
          <input value={this.state.postLink} onChange={this.updateDescription} required={true} />
          <br/>

          <label>Top Track</label><br/>
          <input value={this.state.topTrack} onChange={this.updateTopTrack} required={true} />
          <br/>

          <label>Image URL</label><br/>
          <input value={this.state.imageUrl} onChange={this.updateImageUrl} required={true} />
          <br/>

          <input type="submit" value="Add artist"/>
        </form>
      </div>
    )  
  }
}

export default Create;
