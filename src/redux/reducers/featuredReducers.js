import {
  FEATURED_LIST,
  FEATURED_LOADING,
  FEATURED_ERROR,
  FEATURED_SELECTED,
  FEATURED_SET,
} from '../types/featuredTypes';

const INITIAL_STATE = {
  listFeatured: [],
  loading: false,
  error: null,
  movieFeatured: null,
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case FEATURED_LIST:
      return {
        ...state,
        listFeatured: action.payload,
        loading: false,
        error: '',
      };

    case FEATURED_LOADING:
      return {...state, loading: true};

    case FEATURED_ERROR:
      return {...state, error: action.payload, loading: false};

    case FEATURED_SELECTED:
      return {
        ...state,
        movieFeatured: action.payload,
      };

    case FEATURED_SET:
      return {
        ...state,
        movieFeatured: null,
      };

    default:
      return state;
  }
};
