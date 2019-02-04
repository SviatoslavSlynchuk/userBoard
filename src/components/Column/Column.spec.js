import React from 'react';
import Column from './Column';
import renderer from 'react-test-renderer';
import * as constants from '../../constants';

describe('Filter', () => {
    it('renders correctly', () => {
        const tree = renderer
            .create(<Column
                items={[
                    {
                        name: {
                            first: 'a',
                            last: 'b',
                        },
                        status: constants.APPLIED,
                        id: '0',
                        thumbnail: 'test',
                    },
                ]}
                title={constants.APPLIED}
                onMoveToNextColumn={() => {}}
                onMoveToPrevColumn={() => {}}
            />)
            .toJSON();
        expect(tree).toMatchSnapshot();
    });
});
