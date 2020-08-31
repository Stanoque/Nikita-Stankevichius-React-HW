import React from 'react';
import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Header, ListOfAlbumItems, ListOfArtistItems, ListOfPlaylistItems, ListOfTrackItems, SearchForm } from './components';

function App() {
  return (
    <div className="App">
      <Header />
      <ListOfAlbumItems />
      <ListOfArtistItems />
      <ListOfPlaylistItems />
      <ListOfTrackItems />
      <SearchForm />
    </div>
  );
}

export default App;
