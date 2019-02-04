import React from 'react';
import UserInfo from './UserInfo';
import renderer from 'react-test-renderer';
import * as constants from '../../constants';

describe('UserInfo', () => {
    it('renders correctly', () => {
        const tree = renderer
            .create(<UserInfo
                info={{
                    name: {
                        first: 'a',
                        last: 'b',
                    },
                    status: constants.APPLIED,
                    id: '0',
                    thumbnail: 'test',
                }}
                onMoveToNextColumn={() => {}}
                onMoveToPrevColumn={() => {}}
            />)
            .toJSON();
        expect(tree).toMatchSnapshot();
    });
});
