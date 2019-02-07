import * as actionTypes from '../constants/actionTypes';

export default function setStateFromLocalStorage(data) {
    return {
        type: actionTypes.SET_STATE_FROM_LOCAL_STORAGE,
        data,
    };
}
