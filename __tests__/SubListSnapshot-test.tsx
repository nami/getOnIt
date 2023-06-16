import 'react-native';
import React from 'react';

// Note: test renderer must be required after react-native.
import renderer from 'react-test-renderer';
import SubList from '../todo/SubList';
import {IListItem} from '../todo/MainList';

it('renders a SubList using Snapshots', () => {
  const chosenList: IListItem[] = [
    {
      id: '123',
      value: 'Download this app',
      active: true,
      completed: true,
    },
    {
      id: '456',
      value: 'Add a to-do item',
      active: true,
      completed: false,
    },
  ];
  expect(
    renderer.create(
      <SubList
        list={chosenList}
        updateListItem={jest.fn}
        renderListItemInactive={jest.fn}
        toggleComplete={jest.fn}
      />
    )
  ).toMatchSnapshot();
});
