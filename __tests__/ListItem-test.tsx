import 'react-native';
import React from 'react';

// Note: test renderer must be required after react-native.

import '@testing-library/jest-native/extend-expect';
import {
  render,
  screen,
  fireEvent,
  waitFor,
} from '@testing-library/react-native';
import ListItem from '../todo/ListItem';

// test('can complete an item', async () => {
//   const todo = 'todo';
//   const id = '1234';

//   const {queryByTestId} = render(
//     <ListItem
//       testId={`item-0`}
//       id={id}
//       value={todo}
//       completed={false}
//       updateListItem={jest.fn}
//       toggleComplete={jest.fn}
//       renderListItemInactive={jest.fn}
//     />
//   );

//   const item = screen.getByTestId(`item-0`);
//   const checkBox = screen.getByTestId(`checkbox-0`);
//   await waitFor(() => {
//     expect(item).toBeTruthy();
//     expect(checkBox).toBeTruthy();
//   });
//   expect(queryByTestId(`checkbox-0`)).toHaveAccessibilityState({
//     checked: false,
//   });
//   fireEvent.press(screen.getByTestId(`item-0`));
//   //   console.log(screen.getByTestId(`item-${id}`));
//   //   screen.debug();
//   expect(queryByTestId(`checkbox-0`)).toHaveAccessibilityState({
//     checked: true,
//   });
// });

// test('can edit an item', () => {
//   const todo = 'todo';
//   const id = '1234';
//   const updated = 'updated todo';

//   const {queryByTestId} = render(
//     <ListItem
//       id={id}
//       value={todo}
//       completed={false}
//       updateListItem={jest.fn}
//       toggleComplete={jest.fn}
//       renderListItemInactive={jest.fn}
//     />
//   );

//   //   const editButton = screen.getByTestId('nonedit-mode-icon');
//   fireEvent.press(screen.getByTestId('nonedit-mode-icon'));
//   const editInput = screen.getByTestId('edit-input');

//   //   fireEvent.changeText(editInput, updated);
//   //   const submitButton = screen.getByTestId('edit-mode-icon');
//   //   fireEvent.press(screen.getByTestId('edit-mode-icon'));
//   //   expect(queryByTestId(`checkbox-${id}`)).toHaveAccessibilityState({
//   //     checked: false,
//   //   });
//   //   expect(queryByTestId(`checkbox-${id}`)).toHaveAccessibilityState({
//   //     checked: true,
//   //   });
//   screen.debug();
// });
