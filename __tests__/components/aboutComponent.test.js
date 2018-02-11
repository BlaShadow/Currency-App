import 'react-native';

import React from 'react'
import { AboutComponent } from '../../app/components/About'

import renderer from 'react-test-renderer';

test('Should render About correctly', () => {
    const tree = renderer.create(<AboutComponent />).toJSON();

    expect(tree).toMatchSnapshot();
});
