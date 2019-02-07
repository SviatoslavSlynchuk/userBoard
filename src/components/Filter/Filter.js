import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import * as constants from '../../constants';
import Helpers from '../../helpers';

const StyledSelect = styled.select`
    margin: 10px;
`;

const StyledInput = styled.input`
    margin: 10px;
`;

const StyledSpan = styled.span`
    margin: 10px;
`;

const Filter = props => (
    <div>
        <StyledSpan>Filter by:</StyledSpan>
        <StyledSelect
            value={props.filter.operation}
            onChange={props.onChangeFilterOperation}
        >
            <option value={constants.FILTER_TYPE_NAME}>
                {Helpers.capitalize(constants.FILTER_TYPE_NAME)}
            </option>
            <option value={constants.FILTER_TYPE_CITY}>
                {Helpers.capitalize(constants.FILTER_TYPE_CITY)}
            </option>
        </StyledSelect>
        <StyledInput
            type='text'
            value={props.filter.value}
            onChange={props.onChangeFilterValue}
        />
    </div>
);

Filter.propTypes = {
    filter: PropTypes.shape({
        operation: PropTypes.string.isRequired,
        value: PropTypes.string.isRequired,
    }),
    onChangeFilterOperation: PropTypes.func.isRequired,
    onChangeFilterValue: PropTypes.func.isRequired,
};

export default Filter;
