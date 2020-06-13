import {MOVIES_LIST, MOVIES_LOADING, MOVIES_ERROR} from '../types/moviesTypes';
import API from '../../../utils/api';

export const getMovies = () => async (dispatch) => {
  dispatch({
    type: MOVIES_LOADING,
  });
  try {
    const movies = await API.fetchMovies();
    dispatch({
      type: MOVIES_LIST,
      payload: movies.data.movies,
    });
  } catch (error) {
    dispatch({
      type: MOVIES_ERROR,
      payload: error,
    });
  }
};
