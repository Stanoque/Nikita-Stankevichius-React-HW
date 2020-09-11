import React, {useState, useEffect} from 'react';
import PropTypes from 'prop-types';
import TrackItem from './components/TrackItem/TrackItem';

const TRACK_TYPE = 'track';

export const ListOfTrackItems = ({fetchedTracks, searchTracks, tokenType, accessToken, queryValues, limit}) => {
  const [tracks, setTracks] = useState(fetchedTracks);
  
  useEffect(() => {
    searchTracks(queryValues, TRACK_TYPE, tokenType, accessToken, limit);
  }, [limit]);

  useEffect(() => {
    setTracks(fetchedTracks);
  }, [fetchedTracks])
 

  return (
    <ul className='container'>
      {tracks.map(track => 
        <TrackItem 
          name={track.name}
          spotifyLink={track.href}
          duration={track.duration_ms}
          popularity={track.popularity}
          albumName={track.album.name}
          albumSpotifyLink={track.album.href}
          artistName={track.artists[0].name}
          artistSpotifyLink={track.artists[0].href} />
      )}
    </ul>
  )
}