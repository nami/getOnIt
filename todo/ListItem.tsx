import React, {useState} from 'react';
import {Text, TextInput, TouchableOpacity, View} from 'react-native';

type ListItemProps = {
  id: string;
  value: string;
  completed: boolean;
  updateListItem: (listItemId: string, newValue: string) => void;
  renderListItemInactive: (listItemId: string) => void;
  toggleComplete: (listItemId: string) => void;
};

const ListItem = ({
  id,
  value,
  completed,
  renderListItemInactive,
  toggleComplete,
  updateListItem,
}: ListItemProps) => {
  const [updateMode, setUpdateMode] = useState(false);
  const [newText, setNewText] = useState('');

  return (
    <View>
      {updateMode ? (
        <View>
          <TextInput
            placeholder="Input your to-do here..."
            onChangeText={(text: string) => setNewText(text)}
            defaultValue={value}
          />
          <TouchableOpacity
            onPress={() => {
              updateListItem(id, newText);
              setUpdateMode(false);
            }}>
            <Text>Submit</Text>
          </TouchableOpacity>
        </View>
      ) : (
        <Text id={id}>
          {value} {completed ? 'DONE' : 'NOT DONE'}
        </Text>
      )}
      <TouchableOpacity onPress={() => setUpdateMode(true)}>
        <Text>Update</Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => {
          renderListItemInactive(id);
        }}>
        <Text>Delete</Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => {
          toggleComplete(id);
        }}>
        <Text>Complete</Text>
      </TouchableOpacity>
    </View>
  );
};

export default ListItem;
