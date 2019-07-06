import React, { Component } from 'react';
import { createArtist } from '../services/api';

class Create extends Component {
  constructor() {
    super();
    this.state = {
      name: '',
      description: '',
      topTrack: '',
      imageUrl: ''
    }
  }

  handleName = (e) => {
    this.setState({ name: e.target.value })
  }

  handleDescription = (e) => {
    this.setState({ description: e.target.value })
  }

  handleTopTrack = (e) => {
    this.setState({ topTrack: e.target.value })
  }

  handleImageUrl = (e) => {
    this.setState({ imageUrl: e.target.value })
  }

  handleSubmit = (e) => {
    e.preventDefault()
    createArtist(this.state).then(function(artist) {
      window.location = '/';
    })
  }

  render() {
    return(
      <div>
        <h1>Add Artist</h1>
        <br/>
        <form onSubmit={this.handleSubmit}>
          <label>Artist Name</label>
          <br/>
          <input onChange={this.handleName} value={this.state.name} required={true}/>
          <br/>

          <label>Artist Description</label>
          <br/>
          <input onChange={this.handleDescription} value={this.state.description} required={true}/>
          <br/>

          <label>Artist Top Track</label>
          <br/>
          <input onChange={this.handleTopTrack} value={this.state.topTrack} required={true}/>
          <br/>

          <label>Artist Image URL</label>
          <br/>
          <input onChange={this.handleImageUrl} value={this.state.imageUrl} required={true}/>
          <br/>
          <br/>
          <input type='submit' value='Add Artist' className='btn btn-primary' />
        </form>
      </div>  
    )
  }
}

export default Create;