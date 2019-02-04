/* eslint-disable no-unused-vars, no-undef */
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import App from './App';
import configureStore from './store/configureStore';
import { getPersonnelData, setPersonnelData } from './actions/personnelActions';
import DataApi from './api/DataApi';

const store = configureStore();
store.dispatch(getPersonnelData());
DataApi.getPersonnelData().then((data) => {
    store.dispatch(setPersonnelData(data));
});

ReactDOM.render(
    <Provider store={store}><App/></Provider>,
    document.getElementById('root'),
);
