import React from 'react';
import PropTypes from 'prop-types';

const ListOfTypeButtons = () => {
  return (
    <div class="col-12 row container justify-content-around">
        <button type="button" class="btn btn-dark">Album</button>
        <button type="button" class="btn btn-dark">Artist</button>
        <button type="button" class="btn btn-dark">Playlist</button>
        <button type="button" class="btn btn-dark">Track</button>
    </div>
  )
}

export default ListOfTypeButtons;

