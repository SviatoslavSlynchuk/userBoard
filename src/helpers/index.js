/* eslint-disable no-undef */
import * as constants from '../constants';

export default class Helpers {
    static capitalize(string) {
        const [s, ...rest] = string;
        return [s.toUpperCase(), ...rest].join('');
    }

    static getUsersByStatus(usersArray, status) {
        return usersArray.filter(user => user.status === status);
    }

    static filterPersonnelList(usersArray, filter) {
        if (filter.value) {
            switch (filter.operation) {
            case constants.FILTER_TYPE_NAME:
                return usersArray.filter(user => user.name.first.includes(
                    filter.value.toLowerCase(),
                )
                    || user.name.last.includes(filter.value));
            case constants.FILTER_TYPE_CITY:
                return usersArray.filter(user => user.city.includes(filter.value.toLowerCase()));
            default:
                return [...usersArray];
            }
        } else {
            return [...usersArray];
        }
    }

    static getNextStatus(currStatus) {
        switch (currStatus) {
        case constants.APPLIED:
            return constants.INTERVIEWING;
        case constants.INTERVIEWING:
            return constants.HIRED;
        default:
            return currStatus;
        }
    }

    static getPrevStatus(currStatus) {
        switch (currStatus) {
        case constants.INTERVIEWING:
            return constants.APPLIED;
        case constants.HIRED:
            return constants.INTERVIEWING;
        default:
            return currStatus;
        }
    }

    static setStateToStorage(state) {
        window.localStorage.setItem('userBoardState', JSON.stringify(state));
    }

    static getStateFromStorage() {
        const localStateString = window.localStorage.getItem('userBoardState');

        if (localStateString) {
            return JSON.parse(localStateString);
        }

        return false;
    }
}
