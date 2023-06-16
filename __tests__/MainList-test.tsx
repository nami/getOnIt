import 'react-native';
import React from 'react';
import '@testing-library/jest-native/extend-expect';
import {
  render,
  screen,
  fireEvent,
  waitFor,
} from '@testing-library/react-native';
import MainList from '../todo/MainList';

test('can input & submit new list item', async () => {
  const newTodo = 'todo';
  const updated = 'updated';

  const {queryByTestId} = render(<MainList />);

  const toDoInput = screen.getAllByPlaceholderText('Type here...');

  fireEvent.changeText(toDoInput[0], newTodo);
  fireEvent.press(screen.getByTestId('submit'));

  expect(queryByTestId(`val-${newTodo}`)).toHaveTextContent(newTodo);

  //   const item = screen.getByTestId(`item-0`);
  //   expect(screen.getByTestId(`checkbox-item-0`)).toHaveAccessibilityState({
  //     checked: false,
  //   });
  //   await waitFor(() => {
  //     expect(item).toBeTruthy();
  //     expect(checkBox).toBeTruthy();
  //   });
  //   expect(checkBox).toHaveAccessibilityState({
  //     checked: false,
  //   });
  //   fireEvent.press(screen.getByTestId(`item-0`));
  //   expect(screen.getByTestId(`checkbox-item-0`)).toHaveAccessibilityState({
  //     checked: true,
  //   });
  //   expect(queryByTestId(`checkbox-item-0`)).toHaveAccessibilityState({
  //     checked: true,
  //   });

  // edit item
  const editButton = screen.getByTestId('nonedit-mode-icon-todo');
  fireEvent.press(editButton);
  const editInput = screen.getByTestId('edit-input');
  await waitFor(() => {
    expect(editInput).toBeTruthy();
  });
  const submitButton = screen.getByTestId('edit-mode-icon-todo');
  fireEvent.changeText(editInput, updated);
  fireEvent.press(submitButton);
  expect(queryByTestId(`val-${updated}`)).toHaveTextContent(updated);
});
