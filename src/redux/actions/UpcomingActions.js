import {
  UPCOMING_LIST,
  UPCOMING_LOADING,
  UPCOMING_ERROR,
  SELECTED_UPCOMING,
  SET_UPCOMING,
  LENGUAGE_UPCOMING,
} from '../types/UpcomingTypes';
import API from '../../../utils/api';

export const getUpcoming = (lenguage) => async (dispatch) => {
  dispatch({
    type: UPCOMING_LOADING,
  });
  try {
    const upcomings = await API.fetchUpcoming(lenguage);
    console.log(upcomings, 'upcoming');
    dispatch({
      type: UPCOMING_LIST,
      payload: upcomings.results,
    });
  } catch (error) {
    dispatch({
      type: UPCOMING_ERROR,
      payload: error,
    });
  }
};

export const viewUpcoming = (item, lenguage) => async (dispatch) => {
  dispatch({
    type: UPCOMING_LOADING,
  });
  try {
    const detailUpcoming = await API.getDetailUpcoming(item, lenguage);
    dispatch({
      type: SELECTED_UPCOMING,
      payload: detailUpcoming,
    });
  } catch (error) {
    dispatch({
      type: UPCOMING_ERROR,
      payload: error,
    });
  }
};

export const backListUpcoming = () => (dispatch) => {
  dispatch({
    type: SET_UPCOMING,
  });
};

export const setLenguage = (lenguage) => async (dispatch) => {
  dispatch({
    type: UPCOMING_LOADING,
  });
  try {
    const newLenguage = await API.fetchUpcoming(lenguage);
    dispatch({
      type: LENGUAGE_UPCOMING,
      payload: newLenguage.results,
    });
  } catch (error) {
    dispatch({
      type: UPCOMING_ERROR,
      payload: error,
    });
  }
};
