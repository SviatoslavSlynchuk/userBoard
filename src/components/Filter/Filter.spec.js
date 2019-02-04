import React from 'react';
import Filter from './Filter';
import renderer from 'react-test-renderer';
import * as constants from '../../constants';

describe('Filter', () => {
    it('renders correctly', () => {
        const tree = renderer
            .create(<Filter
                filter={{
                    operation: constants.FILTER_TYPE_NAME,
                    value: 'test',
                }}
                onChangeFilterOperation={() => {}}
                onChangeFilterValue={() => {}}
            />)
            .toJSON();
        expect(tree).toMatchSnapshot();
    });
});
