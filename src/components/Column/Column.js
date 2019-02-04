import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import UserInfo from '../UserInfo/UserInfo';
import Helpers from '../../helpers';

const StyledSection = styled.section`
    min-width: 200px;
`;

const StyledHeading = styled.h3`
    text-align: center;
`;

const Column = (props) => {
    const { title, items } = props;
    return (
        <StyledSection>
            <StyledHeading>{Helpers.capitalize(title)}</StyledHeading>
            {items.length > 0
                ? items.map((item, index) => (
                    <UserInfo
                        key={index}
                        info={item}
                        onMoveToNextColumn={props.onMoveToNextColumn}
                        onMoveToPrevColumn={props.onMoveToPrevColumn}
                    />
                ))
                : null
            }
        </StyledSection>
    );
};

Column.propTypes = {
    items: PropTypes.array.isRequired,
    title: PropTypes.string.isRequired,
    onMoveToNextColumn: PropTypes.func.isRequired,
    onMoveToPrevColumn: PropTypes.func.isRequired,
};

export default Column;
