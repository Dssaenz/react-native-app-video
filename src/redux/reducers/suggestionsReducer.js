import {
  SUGGESTIONS_LIST,
  SUGGESTIONS_LOADING,
  SUGGESTIONS_ERROR,
  SELECTED_SUGGESTION,
  SET_SUGGESTIONS,
} from '../types/suggestionsTypes';

const INITIAL_STATE = {
  listSuggestions: [],
  loading: false,
  error: null,
  movieSuggestion: null,
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case SUGGESTIONS_LIST:
      return {
        ...state,
        listSuggestions: action.payload,
        loading: false,
        error: '',
      };
    case SUGGESTIONS_LOADING:
      return {
        ...state,
        loading: true,
      };
    case SUGGESTIONS_ERROR:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    case SELECTED_SUGGESTION:
      return {
        ...state,
        movieSuggestion: action.payload,
      };
    case SET_SUGGESTIONS:
      return {
        ...state,
        movieSuggestion: null,
      };
    default:
      return state;
  }
};
