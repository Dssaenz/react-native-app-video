import {
  SUGGESTIONS_LIST,
  SUGGESTIONS_LOADING,
  SUGGESTIONS_ERROR,
  SELECTED_SUGGESTION,
  SET_SUGGESTIONS,
} from '../types/suggestionsTypes';
import API from '../../../utils/api';

export const getSuggestions = () => async (dispatch) => {
  dispatch({
    type: SUGGESTIONS_LOADING,
  });
  try {
    const suggestions = await API.fetchSuggestions(4);
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

export const viewSuggestion = (item) => (dispatch) => {
  dispatch({
    type: SELECTED_SUGGESTION,
    payload: item,
  });
};

export const backListSugguest = () => (dispatch) => {
  dispatch({
    type: SET_SUGGESTIONS,
  });
};
