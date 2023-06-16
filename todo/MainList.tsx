import React, {useEffect, useState} from 'react';
import {Image, Platform, ScrollView, StyleSheet, View} from 'react-native';
import 'react-native-get-random-values';
import {v4 as uuidv4} from 'uuid';
import Loading from './Loading';
import {SegmentedButtons, useTheme} from 'react-native-paper';
import NewToDoInput from './NewToDoInput';
import SubList from './SubList';

export interface IListItem {
  id: string;
  value: string;
  active: boolean;
  completed: boolean;
}

export enum ListStatus {
  ALL = 'all',
  TODO = 'todo',
  COMPLETED = 'completed',
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

const textLogo = require('../images/get-on-it-type.png');

const MainList = () => {
  const theme = useTheme();
  // List chosen by user
  const [chosenListStatus, setChosenListStatus] = useState<ListStatus>(
    ListStatus.TODO
  );
  // Full list
  const [list, setList] = useState<IListItem[]>(allListItems);
  // Only list items that are not "deleted"
  const [activeList, setActiveList] = useState<IListItem[] | undefined>(
    undefined
  );
  const [chosenList, setChosenList] = useState<IListItem[] | undefined>(
    activeList
  );

  // Get list items that are not deleted
  // Chose to do this so as to keep "deleted" items for possible future recovery
  useEffect(() => {
    const filteredActiveList = [...list]?.filter(listItem => listItem.active);
    setActiveList(filteredActiveList);
  }, [list]);

  // Get chosen list based on user chosen status
  useEffect(() => {
    if (!activeList) {
      return;
    }
    let chosenListItems;

    switch (chosenListStatus) {
      case ListStatus.ALL:
        chosenListItems = activeList;
        break;
      case ListStatus.TODO:
        chosenListItems = [...activeList].filter(
          listItem => !listItem.completed
        );
        break;
      case ListStatus.COMPLETED:
        chosenListItems = [...activeList].filter(
          listItem => listItem.completed
        );
        break;
    }
    setChosenList(chosenListItems);
  }, [chosenListStatus, activeList]);

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
    console.log('lego');
    const newActiveList = [...(activeList as IListItem[])];
    const listItemToToggle = newActiveList?.find(
      listItem => listItem.id === listItemId
    );
    if (listItemToToggle) {
      console.log('sean', listItemToToggle.completed);
      listItemToToggle.completed = !listItemToToggle.completed;
      console.log('sean after', listItemToToggle.completed);
    }
    setActiveList(newActiveList);
  };

  // Return loading state if any list is undefined
  if (!activeList || !chosenList) {
    return <Loading />;
  }

  const chosenSegmentedButtonStyle = {
    borderColor: theme.colors.background,
    backgroundColor: theme.colors.primary,
  };

  const regularSegmentedButtonStyle = {
    borderColor: theme.colors.background,
    backgroundColor: 'white',
  };

  const segmentedButtonsArray = [
    {
      value: ListStatus.ALL,
      label: 'All',
      icon: 'format-list-checks',
      checkedColor: 'white',
      uncheckedColor: '#808080',
      style:
        chosenListStatus === ListStatus.ALL
          ? chosenSegmentedButtonStyle
          : regularSegmentedButtonStyle,
    },
    {
      value: ListStatus.TODO,
      label: 'To Do',
      icon: 'checkbox-multiple-blank-outline',
      checkedColor: 'white',
      uncheckedColor: '#808080',
      style:
        chosenListStatus === ListStatus.TODO
          ? chosenSegmentedButtonStyle
          : regularSegmentedButtonStyle,
    },
    {
      value: ListStatus.COMPLETED,
      label: 'Completed',
      icon: 'checkbox-multiple-outline',
      checkedColor: 'white',
      uncheckedColor: '#808080',
      style:
        chosenListStatus === ListStatus.COMPLETED
          ? chosenSegmentedButtonStyle
          : regularSegmentedButtonStyle,
    },
  ];

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <ScrollView>
        <View style={styles.logoContainer}>
          <Image
            source={textLogo}
            style={styles.textLogo}
            resizeMode="contain"
          />
        </View>
        <View style={styles.segmentedButtonContainer}>
          <SegmentedButtons
            value={chosenListStatus}
            onValueChange={val => setChosenListStatus(val as ListStatus)}
            buttons={segmentedButtonsArray}
          />
        </View>
        <SubList
          list={chosenList}
          updateListItem={updateListItem}
          renderListItemInactive={renderListItemInactive}
          toggleComplete={toggleComplete}
        />
      </ScrollView>
      <NewToDoInput addListItem={addListItem} />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-between',
  },
  logoContainer: {
    alignContent: 'center',
    alignItems: 'center',
    width: '100%',
    height: 50,
    marginTop: Platform.OS === 'ios' ? 0 : 16,
  },
  textLogo: {
    flex: 1,
    height: 100,
    width: 100,
  },
  segmentedButtonContainer: {
    paddingHorizontal: '5%',
    marginTop: '5%',
  },
});

export default MainList;
