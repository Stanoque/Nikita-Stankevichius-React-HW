import React, {useState} from 'react';
import PropTypes from 'prop-types';
import AlbumItem from './components/AlbumItem/AlbumItem';
import cover from '../../assets/Cover_of_Gorgorod.jpg';

const ALBUMS = [
  {
    name: 'Горгород',
    spotifyLink: 'https://open.spotify.com/album/5dcOqAlvA3vzP3dPGBZ04E',
    image: cover,
    releaseDate: 'somewheere in 2015',
    totalTracks: 10,
    listOfArtists: ['Oxxxymiron'].join(', '),
  }
]

const ListOfAlbumItems = () => {
  const [albums, setAlbums] = useState(ALBUMS);
  
  return (
    <ul className='container'>
      {albums.map(album => 
        <AlbumItem 
          name={album.name}
          spotifyLink={album.spotifyLink}
          image={album.image}
          releaseDate={album.releaseDate}
          totalTracks={album.totalTracks}
          listOfArtists={album.listOfArtists}
          />
      )}
    </ul>
  )
}

export default ListOfAlbumItems;