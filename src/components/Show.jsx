import React, { Component } from 'react';
import { getArtist } from '../services/api';
import { Link } from 'react-router-dom';

class Show extends Component {
  constructor() {
    super();
    this.state = {
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
        name: artist.name,
        description: artist.description,
        topTrack: artist.top_track,
        imageUrl: artist.image_url
      });
    })
  }


  render() {
    return (
      <div>
        <h3>Name: {this.state.name}</h3>
        <p>Description: {this.state.description}</p>
        <p>Top Track: {this.state.topTrack}</p>
        <img src={`${this.state.imageUrl}`}/>
        <br/>
        <Link to='/'>Go Back</Link>
      </div>  
    )
  }
}

export default Show;