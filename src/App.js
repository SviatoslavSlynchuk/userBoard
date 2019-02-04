/* eslint-disable no-unused-vars, no-undef, class-methods-use-this */
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { hot } from 'react-hot-loader';
import styled from 'styled-components';
import PersonnelBoard from './components/PersonnelBoard/PersonnelBoard';
import { setFilterOperation, setFilterValue } from './actions/filterActions';
import { setNewStatus } from './actions/personnelActions';
import * as constants from './constants';
import Helpers from './helpers';
import Filter from './components/Filter/Filter';

const StyledContainer = styled.div`
    width: 600px;
    margin: 0 auto;
`;

class App extends Component {
    render() {
        const {
            filter,
            personnel,
        } = this.props;
        return (
            <StyledContainer className="main-application-container">
                <Filter
                    filter={filter}
                    onChangeFilterOperation={this.props.onChangeFilterOperation}
                    onChangeFilterValue={this.props.onChangeFilterValue}
                />
                {!this.props.isFetching
                    ? <PersonnelBoard
                        personnel={personnel}
                        onMoveToNextColumn={this.props.onMoveToNextColumn}
                        onMoveToPrevColumn={this.props.onMoveToPrevColumn}
                    />
                    : null
                }
            </StyledContainer>
        );
    }
}

App.propTypes = {
    personnel: PropTypes.object.isRequired,
    filter: PropTypes.object.isRequired,
};

function mapStateToProps(state = {}) {
    const { personnel = [], filter, misc: { isFetching } } = state;

    const filteredPersonnelList = Helpers.filterPersonnelList(personnel, filter);

    return {
        personnel: {
            applied: Helpers.getUsersByStatus(filteredPersonnelList, constants.APPLIED),
            interviewing: Helpers.getUsersByStatus(filteredPersonnelList, constants.INTERVIEWING),
            hired: Helpers.getUsersByStatus(filteredPersonnelList, constants.HIRED),
        },
        filter,
        isFetching,
    };
}

function mapDispatchToProps(dispatch) {
    return {
        onChangeFilterOperation: event => dispatch(
            setFilterOperation(event.target.value),
        ),
        onChangeFilterValue: event => dispatch(
            setFilterValue(event.target.value),
        ),
        onMoveToNextColumn: (id, status) => dispatch(
            setNewStatus(id, Helpers.getNextStatus(status)),
        ),
        onMoveToPrevColumn: (id, status) => dispatch(
            setNewStatus(id, Helpers.getPrevStatus(status)),
        ),
    };
}

export default hot(module)(connect(mapStateToProps, mapDispatchToProps)(App));
