import React, {useState, useEffect} from 'react';
import PropTypes from 'prop-types';
import ArtistItem from './components/ArtistItem/ArtistItem';

const ARTIST_TYPE = 'artist';

export const ListOfArtistItems = ({fetchedArtists, searchArtists, accessToken, tokenType}) => {
  const [artists, setArtists] = useState(fetchedArtists);
  
  useEffect(() => {
    searchArtists(['oxxxy', 'miron'], ARTIST_TYPE, tokenType, accessToken, 3);
  }, []);

  useEffect(() => {
    setArtists(fetchedArtists);
  }, [fetchedArtists])

  return (
    <ul className='container'>
      {artists.map(artist => 
        <ArtistItem 
          name={artist.name} 
          spotifyLink={artist.href} 
          genres={artist.genres} 
          image={artist.images[0] ? artist.images[0].url : null} />
      )}
    </ul>
  )
}
