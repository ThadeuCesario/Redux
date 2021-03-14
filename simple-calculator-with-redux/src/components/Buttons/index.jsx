import React from 'react';
import {connect} from 'react-redux';
import {insertFirstValue, insertSecondValue} from '../../store/action/computer'
import './styles.css'


const Buttons = props => {
  const {value, computer: {firstValue, secondValue}, dispatch} = props;

  function setValue(event) {
    if(firstValue === null)  return dispatch(insertFirstValue(Number(event.target.value)));
    else if(secondValue === null) return dispatch(insertSecondValue(Number(event.target.value)));
  }

  return (
      <button onClick={setValue} value={value}>{value}</button>
  )
}

const mapStateToProps = state => state;

export default connect(mapStateToProps)(Buttons);