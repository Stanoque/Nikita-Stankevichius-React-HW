import React, {useState, useEffect} from 'react';
import PropTypes from 'prop-types';
import AlbumItem from './components/AlbumItem/AlbumItem';
import cover from '../../assets/Cover_of_Gorgorod.jpg';

const ALBUM_TYPE = 'album';

export const ListOfAlbumItems = ({fetchedAlbums, searchAlbums, tokenType, accessToken}) => {
  const [albums, setAlbums] = useState(fetchedAlbums);

  useEffect(() => {
    searchAlbums(['Горгород'], ALBUM_TYPE, tokenType, accessToken, 3);
  }, []);

  useEffect(() => {
    setAlbums(fetchedAlbums);
  }, [fetchedAlbums])


  return (
    <ul className='container'>
      {albums.map(album => 
        <AlbumItem 
          name={album.name}
          spotifyLink={album.href}
          image={album.images[0].url}
          releaseDate={album.release_date}
          totalTracks={album.total_tracks}
          listOfArtists={album.artists.reduce((acc, artist)=>{
            if(acc) {
              acc += ` ${artist.name}`;
            } else {
              acc += artist.name;
            }
            return acc;
          }, '')}
          />
      )}
    </ul>
  )
}
