import {createStore, applyMiddleware} from 'redux';
import reduxThunk from 'redux-thunk';
import reducers from './src/redux/reducers';

const store = createStore(reducers, {}, applyMiddleware(reduxThunk));

export default store;
