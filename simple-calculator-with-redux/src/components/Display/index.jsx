import React, { useEffect, useState } from 'react';
import {connect} from 'react-redux';
import {executeSum, executeSub, executeMult, executeDiv} from '../../store/action/logical';
import './styles.css';

const Display = props => {
  const {computer: {firstValue, secondValue, operator}, logical: {output}, dispatch} = props;
  const [result, setResult] = useState(null);

  function renderSpecificMessage() {
    if(!firstValue) return 'Insira o primeiro valor';
    if(firstValue && !operator) return 'Insira o operador';
    if(firstValue && operator && !secondValue) return 'Insira o segundo valor';
  }

  useEffect(() => {
    setResult(firstValue && operator && secondValue);
  } ,[firstValue, operator, secondValue]);

  useEffect(() => {
    if(result) {
      switch(operator) {
        case '+':
          return dispatch(executeSum(firstValue, secondValue));

        case '-':
          return dispatch(executeSub(firstValue, secondValue));

        case '*':
          return dispatch(executeMult(firstValue, secondValue));

        case '/':
          return dispatch(executeDiv(firstValue, secondValue));

        default:
          return null;
      }
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [result]);

  return (
    <div>
      <div className="display">
        <div>
          <span>{renderSpecificMessage()}</span>
        </div>
        <div>
          <span>{firstValue}</span> <span>{operator}</span> <span>{secondValue}</span>
          {output && <span> = {`${output}`}</span>}
        </div>
      </div>
    </div>
  )
}

const mapStateToProps = (state) => state;

export default connect(mapStateToProps)(Display);