import * as actionTypes from '../constants/actionTypes';

const initialState = {
    operation: 'name',
    value: '',
};

export default function filtersReducer(state = initialState, action) {
    switch (action.type) {
    case actionTypes.SET_FILTER_OPERATION:
        return Object.assign({}, state, { operation: action.operation, value: '' });
    case actionTypes.SET_FILTER_VALUE:
        return Object.assign({}, state, { value: action.value });
    case actionTypes.SET_STATE_FROM_LOCAL_STORAGE:
        return action.data.filter;
    default:
        return state;
    }
}
