import React from 'react';
import {ScrollView, StyleSheet} from 'react-native';
import {IListItem} from './MainList';
import ListItem from './ListItem';

type ListProps = {
  list: IListItem[];
  updateListItem: (listItemId: string, newValue: string) => void;
  renderListItemInactive: (listItemId: string) => void;
  toggleComplete: (listItemId: string) => void;
};

const SubList = ({
  list,
  updateListItem,
  renderListItemInactive,
  toggleComplete,
}: ListProps) => {
  return (
    <ScrollView style={styles.container} testID={'sub-list'}>
      {list.map((item, index) => (
        <ListItem
          testId={`item-${index}`}
          key={item.id}
          id={item.id}
          value={item.value}
          completed={item.completed}
          updateListItem={updateListItem}
          renderListItemInactive={renderListItemInactive}
          toggleComplete={toggleComplete}
        />
      ))}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: '3%',
    width: '100%',
    height: '75%',
  },
});

export default SubList;
