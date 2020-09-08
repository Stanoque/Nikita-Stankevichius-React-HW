import React, {useState, useEffect} from 'react';
import PropTypes from 'prop-types';
import PlaylistItem from './components/PlaylistItem/PlaylistItem';
import cover from '../../assets/Cover_of_Gorgorod.jpg';

const PLAYLIST_TYPE = 'playlist';

export const ListOfPlaylistItems = ({fetchedPlaylists, searchPlaylists, tokenType, accessToken}) => {
  const [playlists, setPlaylists] = useState(fetchedPlaylists);
  
  console.log(playlists);
  useEffect(() => {
    searchPlaylists(['Oxxxymiron'], PLAYLIST_TYPE, tokenType, accessToken, 3);
  }, []);

  useEffect(() => {
    setPlaylists(fetchedPlaylists);
  }, [fetchedPlaylists])
 


  return (
    <ul className='container'>
      {playlists.map(playlist => 
        <PlaylistItem 
          name={playlist.name}
          spotifyLink={playlist.href}
          image={playlist.images[0].url}
          ownerName={playlist.owner.display_name}
          tracksCount={playlist.tracks.total}
          />
      )}
    </ul>
  )
}
