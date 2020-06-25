import {
  UPCOMING_LIST,
  UPCOMING_LOADING,
  UPCOMING_ERROR,
  SELECTED_UPCOMING,
  SET_UPCOMING,
  LENGUAGE_UPCOMING,
} from '../types/UpcomingTypes';

const INITIAL_STATE = {
  listUpcoming: [],
  loading: false,
  type: 'EN',
  error: null,
  movieUpcoming: null,
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case UPCOMING_LIST:
      return {
        ...state,
        listUpcoming: action.payload,
        type: 'ES',
        loading: false,
        error: '',
      };
    case UPCOMING_LOADING:
      return {
        ...state,
        loading: true,
      };
    case UPCOMING_ERROR:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    case SELECTED_UPCOMING:
      return {
        ...state,
        movieUpcoming: action.payload,
      };
    case SET_UPCOMING:
      return {
        ...state,
        movieUpcoming: null,
      };
    case LENGUAGE_UPCOMING:
      return {
        ...state,
        listUpcoming: action.payload,
        loading: false,
        type: 'EN',
        error: '',
      };
    default:
      return state;
  }
};
