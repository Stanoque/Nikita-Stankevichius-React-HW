import React, {useState} from 'react';
import PropTypes from 'prop-types';
import ArtistItem from './components/ArtistItem/ArtistItem';

export const ListOfArtistItems = ({fetchedArtists, searchArtists}) => {
  const [artists, setArtists] = useState(fetchedArtists);
  
  return (
    <ul className='container'>
      {/* {artists.map(artist => 
        <ArtistItem name={artist.name} spotifyLink={artist.spotifyLink} genres={artist.genres} image={artist.image} />
      )} */}
    </ul>
  )
}
