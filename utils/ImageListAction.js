import {
  IMAGE_LIST_SUCCESS,
  IMAGE_LIST_ERROR,
  IMAGE_LIST_REFRESH,
} from './ActionTypes';
import Services from './Services';

export function refreshState() {
  return {
    type: IMAGE_LIST_REFRESH,
    payload: null,
  };
}

export function imageListSuccess(response) {
  return {
    type: IMAGE_LIST_SUCCESS,
    payload: response,
  };
}

export function imageListError(response) {
  return {
    type: IMAGE_LIST_ERROR,
    payload: response,
  };
}

export function fetchImageList() {
  return (dispatch) => {
    dispatch(refreshState());
    Services.fetchImageList()
      .then((response) => {
        dispatch(imageListSuccess(response));
      })
      .catch((error) => {
        dispatch(imageListError(error.data));
      });
  };
}
