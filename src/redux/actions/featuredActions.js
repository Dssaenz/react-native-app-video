import {
  FEATURED_LIST,
  FEATURED_LOADING,
  FEATURED_ERROR,
  FEATURED_SELECTED,
  FEATURED_SET,
  FEATURED_LENGUAGE,
} from '../types/featuredTypes';
import API from '../../../utils/api';

export const getFeatured = (lenguage) => async (dispatch) => {
  dispatch({
    type: FEATURED_LOADING,
  });
  try {
    const featured = await API.fetchFeatured(lenguage);
    console.log(lenguage, 'xD');
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

export const viewFeatured = (item, lenguage) => async (dispatch) => {
  dispatch({
    type: FEATURED_LOADING,
  });
  try {
    const detailFeatured = await API.getDetailFeatured(item, lenguage);
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

export const setLenguage = (lenguage) => async (dispatch) => {
  dispatch({
    type: FEATURED_LOADING,
  });
  try {
    const newLenguage = await API.fetchFeatured(lenguage);
    dispatch({
      type: FEATURED_LENGUAGE,
      payload: newLenguage.results,
    });
  } catch (error) {
    dispatch({
      type: FEATURED_ERROR,
      payload: error,
    });
  }
};
