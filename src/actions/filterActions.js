import * as actionTypes from '../constants/actionTypes';

export function setFilterOperation(operation) {
    return {
        type: actionTypes.SET_FILTER_OPERATION,
        operation,
    };
}

export function setFilterValue(value) {
    return {
        type: actionTypes.SET_FILTER_VALUE,
        value,
    };
}
