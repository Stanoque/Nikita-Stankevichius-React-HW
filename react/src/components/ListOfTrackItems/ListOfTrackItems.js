import React, {useState} from 'react';
import PropTypes from 'prop-types';
import TrackItem from './components/TrackItem/TrackItem';

const TRACKS = [
  {
    name: 'Полигон',
    spotifyLink: 'https://open.spotify.com/track/3XLJ9TyGlsGm5URctB4FiO', 
    duration: 22000, 
    popularity: 4.5, 
    albumName: 'Горгород', 
    albumSpotifyLink: 'https://open.spotify.com/album/5dcOqAlvA3vzP3dPGBZ04E', 
    artistName: 'Oxxxymiron', 
    artistSpotifyLink: 'https://open.spotify.com/artist/1gCOYbJNUa1LBVO5rlx0jB'
  },
  {
    name: 'Beware',
    spotifyLink: 'https://open.spotify.com/track/13IzfJ0sPE8hdKJ7jO9umU', 
    duration: 27000, 
    popularity: 4.5, 
    albumName: 'Ex Military', 
    albumSpotifyLink: 'https://open.spotify.com/album/22NtKAfmX3WeI3bil5gWzc', 
    artistName: 'Death Grips', 
    artistSpotifyLink: 'https://open.spotify.com/artist/5RADpgYLOuS2ZxDq7ggYYH'
  },
  {
    name: 'All Star',
    spotifyLink: 'https://open.spotify.com/track/19fm0eNKTeg1JbHCHwPhLe', 
    duration: 20000, 
    popularity: 4.5, 
    albumName: 'Rat Race', 
    albumSpotifyLink: 'https://open.spotify.com/track/19fm0eNKTeg1JbHCHwPhLe', 
    artistName: 'Smashmouth', 
    artistSpotifyLink: 'https://open.spotify.com/artist/2iEvnFsWxR0Syqu2JNopAd'
  },
]


const ListOfTrackItems = () => {
  const [tracks, setTracks] = useState(TRACKS);
  
  return (
    <ul className='container'>
      {tracks.map(track => 
        <TrackItem 
          name={track.name}
          spotifyLink={track.spotifyLink}
          duration={track.duration}
          popularity={track.popularity}
          albumName={track.albumName}
          albumSpotifyLink={track.albumSpotifyLink}
          artistName={track.artistName}
          artistSpotifyLink={track.artistSpotifyLink} />
      )}
    </ul>
  )
}

export default ListOfTrackItems;