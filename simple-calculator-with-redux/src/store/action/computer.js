function insertFirstValue(firstValue) {
  return {
    type: 'INSERT_FIRST_VALUE',
    payload: firstValue,
  }
}

function insertSecondValue(secondValue) {
  return {
    type: 'INSERT_SECOND_VALUE',
    payload: secondValue,
  }
}

function insertOperator(operator) {
  return {
    type: 'INSERT_OPERATOR',
    payload: operator,
  }
}

function insertOutput(output) {
  return {
    type: 'INSERT_OUTPUT',
    payload: output,
  }
}

function inserPrompt(prompt) {
  return {
    type: 'INSERT_PROMPT',
    payload: prompt,
  }
}

function clearMethod() {
  return {
    type: 'RESET_VALUES',
  }
}


export {insertFirstValue, insertSecondValue, insertOperator, insertOutput, inserPrompt, clearMethod};