import {combineReducers} from 'redux';
import featuredReducers from './featuredReducers';
import upcomingReducers from './upcomingReducers';
import suggestionsReducers from './suggestionsReducer';

export default combineReducers({
  featuredReducers,
  upcomingReducers,
  suggestionsReducers,
});
