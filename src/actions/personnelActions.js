import * as actionTypes from '../constants/actionTypes';

export function setPersonnelData(data) {
    return {
        type: actionTypes.SET_PERSONNEL_DATA,
        data,
    };
}

export function getPersonnelData() {
    return {
        type: actionTypes.GET_PERSONNEL_DATA,
    };
}

export function setNewStatus(id, status) {
    return {
        type: actionTypes.SET_NEW_STATUS,
        id,
        status,
    };
}
