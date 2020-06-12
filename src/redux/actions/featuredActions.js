import {
  FEATURED_LIST,
  FEATURED_LOADING,
  FEATURED_ERROR,
  FEATURED_SELECTED,
  FEATURED_SET,
} from '../types/featuredTypes';
import API from '../../../utils/api';

export const getFeatured = () => async (dispatch) => {
  dispatch({
    type: FEATURED_LOADING,
  });
  try {
    const featured = await API.fetchFeatured(1);
    dispatch({
      type: FEATURED_LIST,
      payload: featured.data.movies,
    });
  } catch (error) {
    dispatch({
      type: FEATURED_ERROR,
      payload: error,
    });
  }
};

export const viewFeatured = (item) => (dispatch) => {
  dispatch({
    type: FEATURED_SELECTED,
    payload: item,
  });
};

export const backListFeatured = () => (dispatch) => {
  dispatch({
    type: FEATURED_SET,
  });
};
