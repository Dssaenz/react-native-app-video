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
    const featured = await API.fetchFeatured();
    dispatch({
      type: FEATURED_LIST,
      payload: featured.results,
    });
  } catch (error) {
    dispatch({
      type: FEATURED_ERROR,
      payload: error,
    });
  }
};

export const viewFeatured = (item) => async (dispatch) => {
  dispatch({
    type: FEATURED_LOADING,
  });
  try {
    const detailFeatured = await API.getDetailFeatured(item);
    dispatch({
      type: FEATURED_SELECTED,
      payload: detailFeatured,
    });
  } catch (error) {
    dispatch({
      type: FEATURED_ERROR,
      payload: error,
    });
  }
};

export const backListFeatured = () => (dispatch) => {
  dispatch({
    type: FEATURED_SET,
  });
};
