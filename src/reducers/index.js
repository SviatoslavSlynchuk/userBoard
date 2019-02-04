import { combineReducers } from 'redux';
import personnel from './personnelReducer';
import misc from './miscReducer';
import filter from './filtersReducer';

const rootReducer = combineReducers({
    personnel,
    misc,
    filter,
});

export default rootReducer;
