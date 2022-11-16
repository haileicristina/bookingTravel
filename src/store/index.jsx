import {createStore} from 'redux';
import rootReducer from './modules/reserve/rootReducer';

const store = createStore(rootReducer);

export default store;