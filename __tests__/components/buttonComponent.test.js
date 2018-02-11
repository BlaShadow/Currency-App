import 'react-native';

import React from 'react'
import { ClearButton } from '../../app/components/Button'

import renderer from 'react-test-renderer';

test('Should render ClearButton correctly', () => {
    const tree = renderer.create(<ClearButton />).toJSON();

    expect(tree).toMatchSnapshot();
});