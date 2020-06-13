import {combineReducers} from 'redux';
import featuredReducers from './featuredReducers';
import moviesReducers from './moviesReducers';
import suggestionsReducers from './suggestionsReducer';

export default combineReducers({
  featuredReducers,
  moviesReducers,
  suggestionsReducers,
});
