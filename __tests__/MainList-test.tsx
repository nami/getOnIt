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
import {act} from 'react-test-renderer';

test('CRUD methods', async () => {
  const newTodo = 'todo';
  const updated = 'updated';

  const {queryByTestId} = render(<MainList />);

  // CREATE
  // find input
  const toDoInput = screen.getAllByPlaceholderText('Type here...');
  // input text
  fireEvent.changeText(toDoInput[0], newTodo);
  fireEvent.press(screen.getByTestId('submit'));
  // expect new list item
  expect(queryByTestId(`val-${newTodo}`)).toHaveTextContent(newTodo);

  // COMPLETE A LIST ITEM
  const item = screen.getByTestId(`item-0`);
  const checkbox = screen.getByTestId(`checkbox-item-0`);
  // checkbox should be false
  expect(checkbox).toHaveAccessibilityState({
    checked: false,
  });
  // toggle checkbox to true
  fireEvent.press(item);
  expect(checkbox).toHaveAccessibilityState({
    checked: true,
  });
  // check that checkbox is true
  expect(queryByTestId(`checkbox-item-0`)).toHaveAccessibilityState({
    checked: true,
  });

  // UPDATE
  // find item edit button
  const editButton = screen.getByTestId('nonedit-mode-icon-todo');
  fireEvent.press(editButton);
  // change text
  const editInput = screen.getByTestId('edit-input');
  await waitFor(() => {
    // wait for edit input to be toggled
    expect(editInput).toBeTruthy();
  });
  act(() => {
    fireEvent.changeText(editInput, updated);
  });
  const submitButton = screen.getByTestId('edit-mode-icon-todo');
  act(() => {
    fireEvent.press(submitButton);
  });
  // check if list item has been changed
  expect(queryByTestId(`val-${updated}`)).toHaveTextContent(updated);

  // DELETE
  const deleteButton = screen.getByTestId(`delete-icon-${updated}`);
  act(() => {
    fireEvent.press(deleteButton);
  });
  expect(queryByTestId('sub-list')).not.toContainElement(
    queryByTestId(`val-${updated}`)
  );
});
