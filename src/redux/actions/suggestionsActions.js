import {
  SUGGESTIONS_LIST,
  SUGGESTIONS_LOADING,
  SUGGESTIONS_ERROR,
  SELECTED_SUGGESTION,
  SET_SUGGESTIONS,
  VIDEO_SUGESTION,
  LENGUAGE_SUGGESTION,
} from '../types/suggestionsTypes';
import API from '../../../utils/api';

export const getSuggestions = (lenguage) => async (dispatch) => {
  dispatch({
    type: SUGGESTIONS_LOADING,
  });
  try {
    const suggestions = await API.fetchSuggestions(lenguage);
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

export const viewSuggestion = (item, lenguage) => async (dispatch) => {
  dispatch({
    type: SUGGESTIONS_LOADING,
  });
  try {
    const detailSuggestions = await API.getDetailSuggestions(item, lenguage);
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

export const setLenguage = (lenguage) => async (dispatch) => {
  dispatch({
    type: SUGGESTIONS_LOADING,
  });
  try {
    const newLenguage = await API.fetchSuggestions(lenguage);
    console.log(newLenguage, 'x2');
    dispatch({
      type: LENGUAGE_SUGGESTION,
      payload: newLenguage.results,
    });
  } catch (error) {
    dispatch({
      type: SUGGESTIONS_ERROR,
      payload: error,
    });
  }
};
