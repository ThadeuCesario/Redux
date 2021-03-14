import {createStore} from 'redux';
import rootStore from './reducers';

const store = createStore(rootStore);

export default store;