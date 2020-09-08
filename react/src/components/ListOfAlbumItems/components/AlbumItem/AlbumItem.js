import React from 'react';
import PropTypes from 'prop-types';
import styles from './AlbumItem.css';

const AlbumItem = ({ name, spotifyLink, image, releaseDate, totalTracks, listOfArtists}) => {
  
  return(
    <li className='col-12 row trackItem'>
      <div className="row col-12">
        <div className="col-3"><img className="albumImage" src={image} alt="Album depicture"></img></div>
      </div>
      <div className='col-12 row'>
        <div className='col-3'>{name}</div>
        <div className='col-3'>{releaseDate}</div>
        <div className='col-3'>{totalTracks}</div>
        <div className="col-3 spotifyLink"><a href={spotifyLink}>Spotify Link</a></div>
      </div>
      <div className="col-12 row">
        <div className="albumArtists col-3">{listOfArtists}</div>
      </div>
      

    </li>
  )
}

AlbumItem.propTypes = {
  name: PropTypes.string.isRequired,
  spotifyLink: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  releaseDate: PropTypes.string.isRequired,
  totalTracks: PropTypes.number.isRequired,
  listOfArtists: PropTypes.string.isRequired,
}

export default AlbumItem;