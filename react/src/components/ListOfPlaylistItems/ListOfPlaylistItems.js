import React, {useState} from 'react';
import PropTypes from 'prop-types';
import PlaylistItem from './components/PlaylistItem/PlaylistItem';
import cover from '../../assets/Cover_of_Gorgorod.jpg';



export const ListOfPlaylistItems = ({fetchedPlaylists, searchPlaylists}) => {
  const [playlists, setPlaylists] = useState(fetchedPlaylists);
  
  return (
    <ul className='container'>
      {/* {playlists.map(playlist => 
        <PlaylistItem 
          name={playlist.name}
          spotifyLink={playlist.spotifyLink}
          image={playlist.image}
          ownerName={playlist.ownerName}
          tracksCount={playlist.tracksCount}
          />
      )} */}
    </ul>
  )
}
