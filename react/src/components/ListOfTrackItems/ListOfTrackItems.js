import React, {useState} from 'react';
import PropTypes from 'prop-types';
import TrackItem from './components/TrackItem/TrackItem';

export const ListOfTrackItems = ({fetchedTracks, searchTracks}) => {
  const [tracks, setTracks] = useState(fetchedTracks);
  
  return (
    <ul className='container'>
      {/* {tracks.map(track => 
        <TrackItem 
          name={track.name}
          spotifyLink={track.spotifyLink}
          duration={track.duration}
          popularity={track.popularity}
          albumName={track.albumName}
          albumSpotifyLink={track.albumSpotifyLink}
          artistName={track.artistName}
          artistSpotifyLink={track.artistSpotifyLink} />
      )} */}
    </ul>
  )
}