import React, {useEffect, useState} from 'react';
import {View} from 'react-native';
import 'react-native-get-random-values';
import {v4 as uuidv4} from 'uuid';
import CompletedList from './CompletedList';
import Loading from './Loading';
import ToDoList from './ToDoList';
import Input from './Input';

export interface IListItem {
  id: string;
  value: string;
  active: boolean;
  completed: boolean;
}

const allListItems: IListItem[] = [
  {
    id: uuidv4(),
    value: 'Download this app',
    active: true,
    completed: true,
  },
  {
    id: uuidv4(),
    value: 'Add a to-do item',
    active: true,
    completed: false,
  },
  {
    id: uuidv4(),
    value: 'Complete a to-do item',
    active: true,
    completed: false,
  },
  {
    id: uuidv4(),
    value: 'Hide this item',
    active: false,
    completed: false,
  },
];

const MainList = () => {
  // Full list
  const [list, setList] = useState<IListItem[]>(allListItems);
  // Only list items that are not "deleted"
  const [activeList, setActiveList] = useState<IListItem[] | undefined>(
    undefined
  );
  // Only list items that are completed
  const [completedList, setCompletedList] = useState<IListItem[] | undefined>(
    undefined
  );
  // Only list items that are still to-do
  const [toDoList, setToDoList] = useState<IListItem[] | undefined>(undefined);

  // Get list items that are not deleted
  useEffect(() => {
    const filteredActiveList = [...list]?.filter(listItem => listItem.active);
    setActiveList(filteredActiveList);
  }, [list]);

  // Get list items that are in to-do or completed
  useEffect(() => {
    const filteredCompletedList = activeList
      ? [...activeList].filter(listItem => listItem.completed)
      : [];
    setCompletedList(filteredCompletedList);

    const filteredTodoList = activeList
      ? [...activeList].filter(listItem => !listItem.completed)
      : [];
    setToDoList(filteredTodoList);
  }, [activeList]);

  // ---CRUD methods---
  // Create
  const addListItem = (newItemValue: string) => {
    const uniqueId = uuidv4();
    const newListItem: IListItem = {
      id: uniqueId,
      value: newItemValue,
      active: true,
      completed: false,
    };
    setList([newListItem, ...list]);
  };
  // Update
  const updateListItem = (listItemId: string, newValue: string) => {
    const newActiveList = [...(activeList as IListItem[])];
    const listItemToUpdate = newActiveList?.find(
      listItem => listItem.id === listItemId
    );
    if (listItemToUpdate) {
      listItemToUpdate.value = newValue;
    }
    setActiveList(newActiveList);
  };
  // Delete
  const renderListItemInactive = (listItemId: string) => {
    const newList = [...list];
    const inactiveListItem = newList?.find(
      listItem => listItem.id === listItemId
    );
    if (inactiveListItem) {
      inactiveListItem.active = false;
    }
    setList(newList);
  };
  // ---End CRUD methods---

  // Toggle complete state of list item
  const toggleComplete = (listItemId: string) => {
    const newActiveList = [...(activeList as IListItem[])];
    const listItemToToggle = newActiveList?.find(
      listItem => listItem.id === listItemId
    );
    if (listItemToToggle) {
      listItemToToggle.completed = !listItemToToggle.completed;
    }
    setActiveList(newActiveList);
  };

  // Return loading state if any list is undefined
  if (!completedList || !toDoList || !activeList) {
    return <Loading />;
  }

  return (
    <View>
      <ToDoList
        toDoList={toDoList}
        updateListItem={updateListItem}
        renderListItemInactive={renderListItemInactive}
        toggleComplete={toggleComplete}
      />
      <CompletedList
        completedList={completedList}
        updateListItem={updateListItem}
        renderListItemInactive={renderListItemInactive}
        toggleComplete={toggleComplete}
      />
      <Input addListItem={addListItem} />
    </View>
  );
};

export default MainList;
