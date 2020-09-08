import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Authentificator, Header, ListOfAlbumItems, ListOfArtistItems, ListOfPlaylistItems, ListOfTrackItems, SearchForm } from './components';


const Main = () => (
  <>
    <Header />
    <ListOfAlbumItems />
    <ListOfArtistItems />
    <ListOfPlaylistItems />
    <ListOfTrackItems />
    <SearchForm />
  </>
)

function App({accessToken}) {
  alert(accessToken);
  return (
    <div className="App">
      {
        accessToken ? 
        <Main />
        :
        <Authentificator />
        
      } 
    </div>
  );
}

export default App;
