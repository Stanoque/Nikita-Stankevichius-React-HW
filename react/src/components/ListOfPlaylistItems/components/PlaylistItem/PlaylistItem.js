import React from 'react';
import PropTypes from 'prop-types';
import styles from './PlaylistItem.css';

const PlaylistItem = ({ name, spotifyLink, image, ownerName, tracksCount}) => {
  
  return(
    <li className='col-12 row playlistItem'>
      <div className="row col-12">
        <div className="col-3"><img className="albumImage" src={image} alt="Album depicture"></img></div>
      </div>
      <div className='col-12 row'>
        <div className='col-3'>{name}</div>
        <div className='col-3'>{ownerName}</div>
        <div className='col-3'>{tracksCount}</div>
        <div className="col-3 spotifyLink"><a href={spotifyLink}>Spotify Link</a></div>
      </div>

    </li>
  )
}

PlaylistItem.propTypes = {
  name: PropTypes.string.isRequired,
  spotifyLink: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  ownerName: PropTypes.string.isRequired,
  tracksCount: PropTypes.number.isRequired,
}

export default PlaylistItem;