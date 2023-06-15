import React, {useState} from 'react';
import {StyleSheet, View} from 'react-native';
import {
  Checkbox,
  IconButton,
  List,
  TextInput,
  Text,
  useTheme,
} from 'react-native-paper';
import {fonts} from '../theme';

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
  const theme = useTheme();
  const [updateMode, setUpdateMode] = useState(false);
  const [newText, setNewText] = useState('');

  const checkbox = () => {
    return (
      <>
        <Checkbox.Android
          status={completed ? 'checked' : 'unchecked'}
          uncheckedColor={theme.colors.primary}
        />
      </>
    );
  };

  // either display text component or input component
  const updateText = () => {
    return updateMode ? (
      <TextInput
        placeholder={value}
        onChangeText={text => setNewText(text)}
        style={styles.textInput}
      />
    ) : (
      <Text
        style={[fonts.medium, {color: theme.colors.tertiary}]}
        variant="bodyLarge">
        {value}
      </Text>
    );
  };

  // edit and delete buttons
  // change icon on update mode to signal that you can submit via icon press
  const editDelete = () => {
    const buttonSize = 20;
    return (
      <View style={styles.editDeleteContainer}>
        {updateMode ? (
          <IconButton
            icon="pencil-circle-outline"
            iconColor={theme.colors.primary}
            onPress={() => {
              updateListItem(id, newText);
              setUpdateMode(false);
            }}
            style={styles.iconButton}
            size={buttonSize}
          />
        ) : (
          <IconButton
            iconColor={theme.colors.primary}
            icon="pencil-circle"
            onPress={() => setUpdateMode(true)}
            style={styles.iconButton}
            size={buttonSize}
          />
        )}
        <IconButton
          icon="delete"
          iconColor={theme.colors.primary}
          onPress={() => {
            renderListItemInactive(id);
          }}
          style={styles.iconButton}
          size={buttonSize}
        />
      </View>
    );
  };

  return (
    <View>
      <List.Item
        id={id}
        title={updateText}
        style={styles.listItem}
        left={checkbox}
        onPress={() => toggleComplete(id)}
      />
      {editDelete()}
    </View>
  );
};

const styles = StyleSheet.create({
  listItem: {
    width: '90%',
    backgroundColor: 'white',
    borderRadius: 10,
    marginVertical: '2%',
    marginLeft: '5%',
  },
  editDeleteContainer: {
    paddingVertical: '2%',
    paddingHorizontal: '5%',
    height: 25,
    flexDirection: 'row',
    width: '100%',
    alignItems: 'center',
    justifyContent: 'flex-end',
  },
  iconButton: {
    width: '8%',
  },
  textInput: {
    height: 25,
  },
});

export default ListItem;
