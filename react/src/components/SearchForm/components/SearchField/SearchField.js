import React from 'react';
import PropTypes from 'prop-types';
import { Field, reduxForm } from 'redux-form'


let SearchField = ({handleSubmit}) => {
  return (
    <div className="container">
      <form onSubmit={handleSubmit} className='col-12 row'>
        <Field name='text' component="input" type='text' className="form form-control col-8" placeholder="Enter your query..." />
        <button className="btn btn-danger col-3" type="submit">Submit</button>
      </form>
    </div>
  )
}

SearchField = reduxForm({
  form: 'queryValues',
})(SearchField);


export default SearchField;