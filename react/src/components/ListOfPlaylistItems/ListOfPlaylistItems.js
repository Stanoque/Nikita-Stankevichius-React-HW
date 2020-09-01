import React, {useState} from 'react';
import PropTypes from 'prop-types';
import PlaylistItem from './components/PlaylistItem/PlaylistItem';
import cover from '../../assets/Cover_of_Gorgorod.jpg';


const PLAYLISTS = [
  {
    name: 'Rap and Stuff',
    spotifyLink: 'https://open.spotify.com/album/5dcOqAlvA3vzP3dPGBZ04E',
    image: cover,
    ownerName: 'Me',
    tracksCount: 10,
  }
]


const ListOfPlaylistItems = () => {
  const [playlists, setPlaylists] = useState(PLAYLISTS);
  
  return (
    <ul className='container'>
      {playlists.map(playlist => 
        <PlaylistItem 
          name={playlist.name}
          spotifyLink={playlist.spotifyLink}
          image={playlist.image}
          ownerName={playlist.ownerName}
          tracksCount={playlist.tracksCount}
          />
      )}
    </ul>
  )
}

export default ListOfPlaylistItems;