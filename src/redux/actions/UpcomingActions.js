import {
  UPCOMING_LIST,
  UPCOMING_LOADING,
  UPCOMING_ERROR,
  SELECTED_UPCOMING,
  SET_UPCOMING,
} from '../types/UpcomingTypes';
import API from '../../../utils/api';

export const getUpcoming = () => async (dispatch) => {
  dispatch({
    type: UPCOMING_LOADING,
  });
  try {
    const upcomings = await API.fetchUpcoming();
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

export const viewUpcoming = (item) => async (dispatch) => {
  dispatch({
    type: UPCOMING_LOADING,
  });
  try {
    const detailUpcoming = await API.getDetailUpcoming(item);
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
