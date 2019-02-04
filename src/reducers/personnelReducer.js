import * as actionTypes from '../constants/actionTypes';

export default function personnelReducer(state = [], action) {
    switch (action.type) {
    case actionTypes.SET_PERSONNEL_DATA:
        return [...state, ...action.data];
    case actionTypes.SET_NEW_STATUS:
        return state.map((user) => {
            let updatedStatus = {};
            if (user.id === action.id) {
                updatedStatus = { status: action.status };
            }

            return Object.assign({}, user, updatedStatus);
        });
    default:
        return state;
    }
}
