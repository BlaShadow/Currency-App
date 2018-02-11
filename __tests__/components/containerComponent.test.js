import 'react-native';

import React from 'react'
import { ContainerComponent } from '../../app/components/Container'

import renderer from 'react-test-renderer';

test('Should render Container correctly', () => {
    const tree = renderer.create(<ContainerComponent />).toJSON();

    expect(tree).toMatchSnapshot();
});