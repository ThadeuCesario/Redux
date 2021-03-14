const INITIAL_STATE = {
  prompt: null,
  operator: null,
  firstValue: null,
  secondValue: null,
}

function computerReducer(state=INITIAL_STATE, action) {
  switch(action.type){
    case 'INSERT_FIRST_VALUE':
      return {
        ...state,
        firstValue: action.payload,
      }

    case 'INSERT_SECOND_VALUE':
      return {
        ...state,
        secondValue: action.payload,
      }

    case 'INSERT_OPERATOR':
      return {
        ...state,
        operator: action.payload
      }

    case 'INSERT_PROMPT':
      return {
        ...state,
        prompt: action.payload
      }
    
    case 'RESET_VALUES':
      return {
        ...state,
        ...INITIAL_STATE
      }
    
    default: 
      return state
  }
}

export default computerReducer;