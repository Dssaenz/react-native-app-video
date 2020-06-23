import {
  SUGGESTIONS_LIST,
  SUGGESTIONS_LOADING,
  SUGGESTIONS_ERROR,
  SELECTED_SUGGESTION,
  SET_SUGGESTIONS,
  VIDEO_SUGESTION,
} from '../types/suggestionsTypes';
import API from '../../../utils/api';

export const getSuggestions = () => async (dispatch) => {
  dispatch({
    type: SUGGESTIONS_LOADING,
  });
  try {
    const suggestions = await API.fetchSuggestions();
    dispatch({
      type: SUGGESTIONS_LIST,
      payload: suggestions.results,
    });
  } catch (error) {
    dispatch({
      type: SUGGESTIONS_ERROR,
      payload: error,
    });
  }
};

export const viewSuggestion = (item) => async (dispatch) => {
  dispatch({
    type: SUGGESTIONS_LOADING,
  });
  try {
    const detailSuggestions = await API.getDetailSuggestions(item);
    dispatch({
      type: SELECTED_SUGGESTION,
      payload: detailSuggestions,
    });
  } catch (error) {
    dispatch({
      type: SUGGESTIONS_ERROR,
      payload: error,
    });
  }
};

export const viewSuggestionVideo = (item) => async (dispatch) => {
  dispatch({
    type: SUGGESTIONS_LOADING,
  });
  try {
    const suggestionVideo = await API.getIdVideo(item);
    dispatch({
      type: VIDEO_SUGESTION,
      payload: suggestionVideo.results,
    });
  } catch (error) {
    dispatch({
      type: SUGGESTIONS_ERROR,
      payload: error,
    });
  }
};

export const backListSugguest = () => (dispatch) => {
  dispatch({
    type: SET_SUGGESTIONS,
  });
};
