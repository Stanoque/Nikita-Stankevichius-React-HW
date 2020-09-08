import React from 'react';
import PropTypes from 'prop-types';

const ListOfLimitButtons = () => {
  return (
    <div className="col-12 row container justify-content-around">
        <button type="button" className="btn btn-light">20</button>
        <button type="button" className="btn btn-light">30</button>
        <button type="button" className="btn btn-light">40</button>
        <button type="button" className="btn btn-light">50</button>
    </div>
  )
}

export default ListOfLimitButtons;

