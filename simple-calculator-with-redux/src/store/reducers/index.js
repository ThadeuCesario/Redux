import {combineReducers} from 'redux';

import computer from './computer';
import logical from './logical';

export default combineReducers({
  computer,
  logical,
});