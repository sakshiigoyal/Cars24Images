import { IMAGE_LIST_SUCCESS, IMAGE_LIST_ERROR, IMAGE_LIST_REFRESH } from './ActionTypes'
import LoginRegisterService from '../LoginRegisterService'
import * as rootActions from '../../../store/actions/RootAction'


export function refreshState() {
  return {
    type: IMAGE_LIST_REFRESH,
    payload: null
  }
}

export function imageListSuccess(response) {
  return {
    type: IMAGE_LIST_SUCCESS,
    payload: response
  };
}

export function imageListError(response) {
  return {
    type: IMAGE_LIST_ERROR,
    payload: response
  };
}

export function fetchImageList() {
  return (dispatch) => {

    dispatch(refreshState())
    dispatch(rootActions.showLoader())
    LoginRegisterService.applyPromocode(requestData)
      .then(response => {
        console.log(response)
        dispatch(rootActions.hideLoader())

        if (response.forceDownload) {
          dispatch(rootActions.showForceDownload())
        } 
        else {
          dispatch(rootActions.hideForceDownload())
        }
        if (response.showMaintainance) {
          dispatch(rootActions.showMaintainance())
        }
        else {
          dispatch(rootActions.hideMaintainance())
        }

        dispatch(applyPromocodeSuccess(response))
      })
      .catch(error => {
        console.log(error)
        dispatch(rootActions.hideLoader())
        dispatch(applyPromocodeError(error.data))
      });
  }
}