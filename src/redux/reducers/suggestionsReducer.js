import {
  SUGGESTIONS_LIST,
  SUGGESTIONS_LOADING,
  SUGGESTIONS_ERROR,
  SELECTED_SUGGESTION,
  SET_SUGGESTIONS,
  VIDEO_SUGESTION,
  LENGUAGE_SUGGESTION,
} from '../types/suggestionsTypes';

const INITIAL_STATE = {
  listSuggestions: [],
  type: 'EN',
  loading: false,
  error: null,
  movieSuggestion: null,
  videoSuggestion: null,
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case SUGGESTIONS_LIST:
      return {
        ...state,
        listSuggestions: action.payload,
        loading: false,
        type: 'ES',
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
    case VIDEO_SUGESTION:
      return {
        ...state,
        videoSuggestion: action.payload,
      };
    case SET_SUGGESTIONS:
      return {
        ...state,
        movieSuggestion: null,
      };
    case LENGUAGE_SUGGESTION:
      return {
        ...state,
        listSuggestions: action.payload,
        loading: false,
        type: 'EN',
        error: '',
      };
    default:
      return state;
  }
};
