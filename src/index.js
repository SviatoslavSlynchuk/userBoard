/* eslint-disable no-unused-vars, no-undef */
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import App from './App';
import configureStore from './store/configureStore';
import { getPersonnelData, setPersonnelData } from './actions/personnelActions';
import setStateFromLocalStorage from './actions/storageActions';
import DataApi from './api/DataApi';
import Helpers from './helpers';

let localState = Helpers.getStateFromStorage();
let store;

if (localState) {
    store = configureStore(localState);
} else {
    store = configureStore();
    store.dispatch(getPersonnelData());
    DataApi.getPersonnelData().then((data) => {
        store.dispatch(setPersonnelData(data));
    });
}

document.addEventListener('visibilitychange', () => {
    if (!document.hidden) {
        localState = Helpers.getStateFromStorage();
        if (localState) {
            store.dispatch(setStateFromLocalStorage(localState));
        }
    }
});


ReactDOM.render(
    <Provider store={store}><App/></Provider>,
    document.getElementById('root'),
);
