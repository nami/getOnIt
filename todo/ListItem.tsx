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
  testId: string;
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
  testId,
}: ListItemProps) => {
  const theme = useTheme();
  const [updateMode, setUpdateMode] = useState(false);
  const [newText, setNewText] = useState('');
  const [showWarning, setShowWarning] = useState(false);

  const checkbox = () => {
    return (
      <>
        <Checkbox
          testID={`checkbox-${testId}`}
          status={completed ? 'checked' : 'unchecked'}
          uncheckedColor={theme.colors.primary}
          onPress={() => toggleComplete(id)}
        />
      </>
    );
  };

  // either display text component or input component
  const updateText = () => {
    return updateMode ? (
      <TextInput
        testID={'edit-input'}
        placeholder={value}
        onChangeText={text => setNewText(text)}
        style={styles.textInput}
        underlineColor={theme.colors.primary}
      />
    ) : (
      <Text
        testID={`val-${value}`}
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
        {showWarning ? (
          <Text style={styles.warningText} variant="labelSmall">
            Please input text...
          </Text>
        ) : (
          <></>
        )}
        {updateMode ? (
          <IconButton
            testID={`edit-mode-icon-${value}`}
            icon="pencil-circle-outline"
            iconColor={theme.colors.primary}
            onPress={() => {
              if (!newText) {
                setShowWarning(true);
                return;
              }
              updateListItem(id, newText);
              setUpdateMode(false);
              setShowWarning(false);
            }}
            style={styles.iconButton}
            size={buttonSize}
          />
        ) : (
          <IconButton
            testID={`nonedit-mode-icon-${value}`}
            iconColor={theme.colors.primary}
            icon="pencil-circle"
            onPress={() => setUpdateMode(true)}
            style={styles.iconButton}
            size={buttonSize}
          />
        )}
        <IconButton
          testID={`delete-icon-${value}`}
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
        testID={testId}
        id={id}
        title={updateText}
        style={styles.listItem}
        left={checkbox}
        onPress={() => {
          toggleComplete(id);
        }}
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
  warningText: {
    color: 'red',
    height: 16,
  },
});

export default ListItem;
