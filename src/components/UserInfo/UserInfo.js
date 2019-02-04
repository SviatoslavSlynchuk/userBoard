import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import * as constants from '../../constants';
import Helpers from '../../helpers';

const StyledContainer = styled.div`
    padding: 10px;
    border: 1px solid #ccc;
    border-radius: 3px;
    margin: 5px;
`;

const ButtonsContainer = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
`;

const StyledAvatar = styled.img`
    border-radius: 50%;
`;

const StyledName = styled.span`
    vertical-align: top;
    padding: 5px;
    width: 120px;
`;

const UserInfo = (props) => {
    const {
        info: {
            name,
            thumbnail,
            status,
            id,
        },
    } = props;
    return (
        <StyledContainer>
            <StyledAvatar src={thumbnail}/>
            <StyledName>{`${Helpers.capitalize(name.first)} ${Helpers.capitalize(name.last)}`}</StyledName>
            <ButtonsContainer>
                { status !== constants.APPLIED
                    ? <button
                        onClick={() => props.onMoveToPrevColumn(id, status)}
                    >
                        &lArr;
                    </button>
                    : null
                }
                <span/>
                { status !== constants.HIRED
                    ? <button
                        onClick={() => props.onMoveToNextColumn(id, status)}
                    >
                        &rArr;
                    </button>
                    : null
                }
            </ButtonsContainer>
        </StyledContainer>
    );
};

UserInfo.propTypes = {
    info: PropTypes.shape({
        name: PropTypes.shape({
            first: PropTypes.string.isRequired,
            last: PropTypes.string.isRequired,
        }),
        thumbnail: PropTypes.string.isRequired,
    }),
    onMoveToNextColumn: PropTypes.func.isRequired,
    onMoveToPrevColumn: PropTypes.func.isRequired,
};

export default UserInfo;
