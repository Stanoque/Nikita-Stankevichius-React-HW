import React, {useState} from 'react';
import PropTypes from 'prop-types';
import ArtistItem from './components/ArtistItem/ArtistItem';
import artistImage_1 from '../../assets/minog.jpg';
import artistImage_2 from '../../assets/mc_ride.jpg';
import artistImage_3 from '../../assets/smashmouth.jpg';

const ARTISTS = [
  {
    name: 'Oxxxymiron',
    spotifyLink: 'https://open.spotify.com/artist/1gCOYbJNUa1LBVO5rlx0jB',
    genres: ['hip-hop', 'rap', 'oxxxymiron'].join(', '),
    image: artistImage_1
  },
  {
    name: 'Death Grips',
    spotifyLink: 'https://open.spotify.com/artist/5RADpgYLOuS2ZxDq7ggYYH',
    genres: ['hip-hop', 'experimental'].join(', '),
    image: artistImage_2
  },
  {
    name: 'Smashmouth',
    spotifyLink: 'https://open.spotify.com/artist/1gCOYbJNUa1LBVO5rlx0jB',
    genres: ['pop-rock', 'shrek'].join(', '),
    image: artistImage_3
  },
  
]

const ListOfArtistItems = () => {
  const [artists, setArtists] = useState(ARTISTS);
  
  return (
    <ul className='container'>
      {artists.map(artist => 
        <ArtistItem name={artist.name} spotifyLink={artist.spotifyLink} genres={artist.genres} image={artist.image} />
      )}
    </ul>
  )
}

export default ListOfArtistItems;