import React from 'react';
import {FlatList, Text, View} from 'react-native';
import {IListItem} from './MainList';
import ListItem from './ListItem';

type CompletedListProps = {
  completedList: IListItem[];
  updateListItem: (listItemId: string, newValue: string) => void;
  renderListItemInactive: (listItemId: string) => void;
  toggleComplete: (listItemId: string) => void;
};

const CompletedList = ({
  completedList,
  updateListItem,
  renderListItemInactive,
  toggleComplete,
}: CompletedListProps) => {
  return (
    <View>
      <Text>Completed List</Text>
      <FlatList
        data={completedList}
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
      <Text>End of Completed List</Text>
    </View>
  );
};

export default CompletedList;
