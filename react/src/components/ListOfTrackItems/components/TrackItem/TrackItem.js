import React from 'react';
import PropTypes from 'prop-types';
import styles from './TrackItem.css';

const TrackItem = ({ name, spotifyLink, duration, popularity, albumName, albumSpotifyLink, artistName, artistSpotifyLink }) => {
  
  const parseDuration = (duration) => {

    const seconds = Math.trunc((duration/100) % 60);
    const minutes = Math.trunc(((duration/100) - seconds)/600);

    
    
    return `${minutes}:${seconds}`;
  }
  const parsedDuration = parseDuration(duration);

  return(
    <li className='col-12 row trackItem'>
      <div className='col-12 row'>
        <div className='col-3 name'>{name}</div>
        <div className='col-3 duration'>{parsedDuration}</div>
        <div className='col-3 popularity'>{`${popularity}/5`}</div>
        <div className="col-3 spotifyLink"><a href={spotifyLink}>Spotify Link</a></div>
      </div>
      
      <div className="row col-12">
        <div className="col-6">{albumName}</div>
        <div className="col-6"><a href={albumSpotifyLink}>{`${albumName} Spotify Link`}</a></div>
      </div>
      <div className="row col-12">
        <div className="col-6">{artistName}</div>
        <div className="col-6"><a href={artistSpotifyLink}>{`${artistName} Spotify Link`}</a></div>
      </div>
    </li>
  )
}

TrackItem.propTypes = {
  name: PropTypes.string.isRequired,
  spotifyLink: PropTypes.string.isRequired,
  duration: PropTypes.number.isRequired,
  popularity: PropTypes.number.isRequired,
  albumName: PropTypes.string.isRequired,
  albumSpotifyLink: PropTypes.string.isRequired,
  artistName: PropTypes.string.isRequired,
  artistSpotifyLink: PropTypes.string.isRequired,
}

export default TrackItem;