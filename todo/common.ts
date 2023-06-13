// import {IListItem} from './MainList';
// import 'react-native-get-random-values';
// import {v4 as uuidv4} from 'uuid';

// // Common methods

// // ---CRUD methods---
// const findListItem = (listItemId: string, list: IListItem[]) =>
//   list?.find(listItem => listItem.id === listItemId);
// // Create
// export const addListItem = (
//   newItemValue: string,
//   list: IListItem[],
//   setNewList: (newList: IListItem[]) => void
// ) => {
//   const uniqueId = uuidv4();
//   const newListItem: IListItem = {
//     id: uniqueId,
//     value: newItemValue,
//     active: true,
//     completed: false,
//   };
//   setNewList([newListItem, ...list]);
// };
// // Update
// export const updateListItem = (
//   listItemId: string,
//   newValue: string,
//   list: IListItem[]
// ) => {
//   const listItemToUpdate = findListItem(listItemId, list);
//   if (listItemToUpdate) {
//     listItemToUpdate.value = newValue;
//   }
// };
// // Delete
// export const renderListItemInactive = (
//   listItemId: string,
//   list: IListItem[]
// ) => {
//   const inactiveListItem = findListItem(listItemId, list);
//   if (inactiveListItem) {
//     inactiveListItem.active = false;
//   }
// };
// // ---End CRUD methods---

// // Toggle complete state of list item
// export const toggleComplete = (listItemId: string, list: IListItem[]) => {
//   const listItemToToggle = findListItem(listItemId, list);
//   if (listItemToToggle) {
//     listItemToToggle.completed = !listItemToToggle.completed;
//   }
// };
