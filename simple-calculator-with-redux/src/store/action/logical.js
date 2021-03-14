function executeSum(firstValue, secondValue){
  return {
    type: 'SUM_METHOD_ACTIVED',
    payload: {
      firstValue,
      secondValue
    }
  }
}

function executeSub(firstValue, secondValue){
  return {
    type: 'SUB_METHOD_ACTIVED',
    payload: {
      firstValue,
      secondValue
    }
  }
}

function executeMult(firstValue, secondValue){
  return {
    type: 'MULT_METHOD_ACTIVED',
    payload: {
      firstValue,
      secondValue
    }
  }
}

function executeDiv(firstValue, secondValue){
  return {
    type: 'DIV_METHOD_ACTIVED',
    payload: {
      firstValue,
      secondValue
    }
  }
}

function clearMethod() {
  return {
    type: 'RESET_VALUES',
  }
}

export {executeSum, executeSub, executeMult, executeDiv, clearMethod};