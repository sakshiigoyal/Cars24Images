import {
  IMAGE_LIST_SUCCESS,
  IMAGE_LIST_ERROR,
  IMAGE_LIST_REFRESH,
} from './ActionTypes';

const initialState = {
  error: {
    status: null,
    data: {
      status: null,
      message: null,
      data: [],
    },
  },
  success: {
    status: null,
    message: null,
    data: [],
  },
};

export default function (state = initialState, action) {
  switch (action.type) {
    case IMAGE_LIST_SUCCESS:
      return {...state, success: action.payload};
    case IMAGE_LIST_ERROR:
      return {...state, error: action.payload};
    case IMAGE_LIST_REFRESH:
      return {
        ...state,
        success: initialState.success,
        error: initialState.error,
      };
    default:
      return state;
  }
}
