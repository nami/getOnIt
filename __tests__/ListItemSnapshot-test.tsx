import 'react-native';
import React from 'react';

// Note: test renderer must be required after react-native.
import renderer from 'react-test-renderer';
import ListItem from '../todo/ListItem';

it('renders a ListItem using Snapshots', () => {
  expect(
    renderer.create(
      <ListItem
        id={'1234'}
        value={'A to-do'}
        completed={false}
        updateListItem={jest.fn}
        toggleComplete={jest.fn}
        renderListItemInactive={jest.fn}
      />
    )
  ).toMatchSnapshot();
});
