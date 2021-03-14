import React from 'react';
import {connect} from 'react-redux';
import {insertOperator, clearMethod as clearMethodComputer} from '../../store/action/computer'
import {clearMethod as clearMethodLogical} from '../../store/action/logical';
import './styles.css'

const Buttons = props => {
  const {operator, dispatch} = props;

  function handleOperator(event) {
    if(event.target.value === 'DEL') {
      dispatch(clearMethodComputer());
      return dispatch(clearMethodLogical());
    }
    return dispatch(insertOperator(event.target.value));
  }

  return (
      <button onClick={handleOperator} value={operator}>{operator}</button>
  )
}

const mapStateToProps = state => state;

export default connect(mapStateToProps)(Buttons);