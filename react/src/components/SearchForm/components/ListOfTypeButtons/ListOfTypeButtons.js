import React from 'react';
import PropTypes from 'prop-types';
import { Field, reduxForm } from 'redux-form'


const TypeButtons = (props) => {

  const { input: { onChange } } = props;
  return (
    <>
      <button value='album' type="submit" className="btn btn-dark" onClick={() => onChange('album')}>Album</button>
      <button value='artist' type="submit" className="btn btn-dark" onClick={() => onChange('artist')}>Artist</button>
      <button value='playlist' type="submit" className="btn btn-dark" onClick={() => onChange('playlist')}>Playlist</button>
      <button value='track' type="submit" className="btn btn-dark" onClick={() => onChange('track')}>Track</button>
    </>
)
}


let ListOfTypeButtons = ({handleSubmit}) => {

  return (
    <div className="col-12 row container justify-content-around">
      <form onSubmit={handleSubmit}>
        <Field name="type" component={TypeButtons} />
      </form>
    </div>
  )
}

ListOfTypeButtons = reduxForm({
  form: 'type',
})(ListOfTypeButtons);

export default ListOfTypeButtons;

