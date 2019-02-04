import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Column from '../Column/Column';

const StyledContainer = styled.div`
    display: flex;
    flex-direction: row;
    flex-wrap: no-wrap;
`;

const PersonnelBoard = (props) => {
    const { personnel } = props;
    return (
        <StyledContainer>
            {Object.keys(personnel).map((key, index) => (
                <Column
                    key={index}
                    items={personnel[key]}
                    title={key}
                    onMoveToNextColumn={props.onMoveToNextColumn}
                    onMoveToPrevColumn={props.onMoveToPrevColumn}
                />
            ))}
        </StyledContainer>
    );
};

PersonnelBoard.propTypes = {
    personnel: PropTypes.shape({
        applied: PropTypes.array.isRequired,
        interviewing: PropTypes.array.isRequired,
        hired: PropTypes.array.isRequired,
    }),
    onMoveToNextColumn: PropTypes.func.isRequired,
    onMoveToPrevColumn: PropTypes.func.isRequired,
};

export default PersonnelBoard;
