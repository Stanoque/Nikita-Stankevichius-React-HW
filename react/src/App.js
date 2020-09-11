import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Authentificator, Header, ListOfAlbumItems, ListOfArtistItems, ListOfPlaylistItems, ListOfTrackItems, SearchForm } from './components';


const Main = ({type}) => (
  <>
    <Header />
    <SearchForm />
      {type==='album' ?
          <ListOfAlbumItems />
        : type==='artist' ?
          <ListOfArtistItems />
        : type==='playlist' ?
          <ListOfPlaylistItems />
        : type==='track' ?
          <ListOfTrackItems />
        : null
      }
  </>
)

function App({accessToken, type, state}) {
  
  return (
    <div className="App">
      {
        accessToken ? 
        <Main type={type} />
        
        :
        <Authentificator />
        
      } 
    </div>
  );
}

export default App;
