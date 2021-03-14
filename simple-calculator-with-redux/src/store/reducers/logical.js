const INITIAL_STATE = {
  output: null,
}

function logicalReducer (state = INITIAL_STATE, action) {
  switch(action.type){
    case 'SUM_METHOD_ACTIVED':
      return {
        output: action.payload.firstValue + action.payload.secondValue
      };
    
    case 'SUB_METHOD_ACTIVED':
      return {
        output: action.payload.firstValue - action.payload.secondValue
      };
    
    case 'MULT_METHOD_ACTIVED':
      return {
        output: action.payload.firstValue * action.payload.secondValue
      };

    case 'DIV_METHOD_ACTIVED':
      return {
        output: action.payload.firstValue / action.payload.secondValue
      };
    
    case 'RESET_VALUES':
      return {
        ...state,
        ...INITIAL_STATE
      }

    default:
      return state;
  }
}

export default logicalReducer;