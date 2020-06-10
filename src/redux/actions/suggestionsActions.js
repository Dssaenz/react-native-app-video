import {
  SUGGESTIONS_LIST,
  SUGGESTIONS_LOADING,
  SUGGESTIONS_ERROR,
} from '../types/suggestionsTypes';
import API from '../../../utils/api';

export const getSuggestions = () => async (dispatch) => {
  dispatch({
    type: SUGGESTIONS_LOADING,
  });
  try {
    const suggestions = await API.fetchSuggestions(2);
    dispatch({
      type: SUGGESTIONS_LIST,
      payload: suggestions.data.movies,
    });
  } catch (error) {
    dispatch({
      type: SUGGESTIONS_ERROR,
      payload: error,
    });
  }
};
