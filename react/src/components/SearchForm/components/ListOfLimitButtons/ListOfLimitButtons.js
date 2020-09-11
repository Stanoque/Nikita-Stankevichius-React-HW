import React from 'react';
import PropTypes from 'prop-types';
import { Field, reduxForm } from 'redux-form'


const LimitButtons = (props) => {

  const { input: { onChange } } = props;
  return (
    <>
      <button value={20} type="submit" className="btn btn-primary" onClick={() => onChange(20)}>20</button>
      <button value={30} type="submit" className="btn btn-primary" onClick={() => onChange(30)}>30</button>
      <button value={40} type="submit" className="btn btn-primary" onClick={() => onChange(40)}>40</button>
      <button value={50} type="submit" className="btn btn-primary" onClick={() => onChange(50)}>50</button>
    </>
)
}


let ListOfLimitButtons = ({handleSubmit}) => {

  return (
    <div className="col-12 row container justify-content-around">
      <form onSubmit={handleSubmit}>
        <Field name="limit" component={LimitButtons} />
      </form>
    </div>
  )
}

ListOfLimitButtons = reduxForm({
  form: 'limit',
})(ListOfLimitButtons);

export default ListOfLimitButtons;

