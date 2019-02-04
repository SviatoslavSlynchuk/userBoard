import configureStore from './configureStore';
import { setPersonnelData, setNewStatus } from '../actions/personnelActions';
import { setFilterValue } from '../actions/filterActions';
import * as constants from '../constants';

describe('Application state', () => {
    it('sets users list into the store', () => {
        const store = configureStore();
        const user = {
            id: 0,
            name: 'name',
            status: constants.APPLIED,
        };
        const usersList = [
            user,
        ];

        store.dispatch(setPersonnelData(usersList));
        let state = store.getState();

        expect(state.personnel).toEqual(usersList);

        store.dispatch(setNewStatus(0, constants.INTERVIEWING));
        state = store.getState();

        expect(state.personnel[0].status).toEqual(constants.INTERVIEWING);
    });

    it('sets new filter value into the store', () => {
        const store = configureStore();

        store.dispatch(setFilterValue('test'));
        const state = store.getState();

        expect(state.filter).toEqual({
            operation: constants.FILTER_TYPE_NAME,
            value: 'test',
        });
    });
});
