import React from 'react';
import PropTypes from 'prop-types';

const ListOfTypeButtons = () => {
  return (
    <div className="col-12 row container justify-content-around">
        <button type="button" className="btn btn-dark">Album</button>
        <button type="button" className="btn btn-dark">Artist</button>
        <button type="button" className="btn btn-dark">Playlist</button>
        <button type="button" className="btn btn-dark">Track</button>
    </div>
  )
}

export default ListOfTypeButtons;

