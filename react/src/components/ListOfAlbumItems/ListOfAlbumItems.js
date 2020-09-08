import React, {useState} from 'react';
import PropTypes from 'prop-types';
import AlbumItem from './components/AlbumItem/AlbumItem';
import cover from '../../assets/Cover_of_Gorgorod.jpg';

export const ListOfAlbumItems = ({fetchedAlbums, searchAlbumes}) => {
  const [albums, setAlbums] = useState(fetchedAlbums);

  console.log(albums);

  return (
    <ul className='container'>
      {/* {albums.map(album => 
        <AlbumItem 
          name={album.name}
          spotifyLink={album.spotifyLink}
          image={album.image}
          releaseDate={album.releaseDate}
          totalTracks={album.totalTracks}
          listOfArtists={album.listOfArtists}
          />
      )} */}
    </ul>
  )
}
