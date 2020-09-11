import React, {useState, useEffect} from 'react';
import PropTypes from 'prop-types';
import ArtistItem from './components/ArtistItem/ArtistItem';

const ARTIST_TYPE = 'artist';

export const ListOfArtistItems = ({fetchedArtists, searchArtists, accessToken, tokenType, queryValues, limit}) => {
  const [artists, setArtists] = useState(fetchedArtists);
  
  useEffect(() => {
    searchArtists(queryValues, ARTIST_TYPE, tokenType, accessToken, limit);
  }, [limit]);

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
