import {
  FEATURED_LIST,
  FEATURED_LOADING,
  FEATURED_ERROR,
} from '../types/featuredTypes';

const INITIAL_STATE = {
  listFeatured: [],
  loading: false,
  error: null,
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

    default:
      return state;
  }
};
