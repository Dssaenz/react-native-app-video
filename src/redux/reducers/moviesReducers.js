import {MOVIES_LIST, MOVIES_LOADING, MOVIES_ERROR} from '../types/moviesTypes';
const INITIAL_STATE = {
  listMovies: [],
  loading: false,
  error: null,
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case MOVIES_LIST:
      return {
        ...state,
        listMovies: action.payload,
        loading: false,
        error: '',
      };
    case MOVIES_LOADING:
      return {
        ...state,
        loading: true,
      };
    case MOVIES_ERROR:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};
