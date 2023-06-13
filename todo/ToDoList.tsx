import React from 'react';
import {FlatList, Text, View} from 'react-native';
import {IListItem} from './MainList';
import ListItem from './ListItem';

type ToDoListProps = {
  toDoList: IListItem[];
  updateListItem: (listItemId: string, newValue: string) => void;
  renderListItemInactive: (listItemId: string) => void;
  toggleComplete: (listItemId: string) => void;
};

const ToDoList = ({
  toDoList,
  updateListItem,
  renderListItemInactive,
  toggleComplete,
}: ToDoListProps) => {
  return (
    <View>
      <Text>To Do List</Text>
      <FlatList
        data={toDoList}
        renderItem={({item}) => (
          <ListItem
            id={item.id}
            value={item.value}
            completed={item.completed}
            updateListItem={updateListItem}
            renderListItemInactive={renderListItemInactive}
            toggleComplete={toggleComplete}
          />
        )}
        keyExtractor={item => item.id}
      />
      <Text>End of To Do List</Text>
    </View>
  );
};

export default ToDoList;
