import React from 'react';
import PropTypes from 'prop-types';
import styles from './ArtistItem.css';

const ArtistItem = ({ name, spotifyLink, genres, image }) => {
  return(
    <li className='col-12 row artistItem'>
      <div className='col-12 row'>
        <div className='col-3 name'>
          {name}
        </div>
        <div className='col-9 link'>
          <a href={spotifyLink}>Spotify Link</a>
        </div>
      </div>
      <div className='col-12 row'>
        <div className='col-3'>
          <img className='image' alt='Artist depicture' src={image}></img>
        </div>
        <div className='col-9 genres'>
          {genres}
        </div>
      </div>
    </li>
  )
}

ArtistItem.propTypes = {
  name: PropTypes.string.isRequired,
  spotifyLink: PropTypes.string.isRequired,
  genres: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
}

export default ArtistItem;