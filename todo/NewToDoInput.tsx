import React, {useState} from 'react';
import {Platform, StyleSheet, View} from 'react-native';
import {IconButton, Text, TextInput, useTheme} from 'react-native-paper';

type inputProps = {
  addListItem: (newItemValue: string) => void;
};

const NewToDoInput = ({addListItem}: inputProps) => {
  const theme = useTheme();
  const [text, setText] = useState<string | undefined>(undefined);
  const [showWarning, setShowWarning] = useState(false);

  const addItem = (newText: string) => {
    addListItem(newText);
    setShowWarning(false);
  };

  return (
    <View style={styles.mainContainer}>
      <View style={styles.container}>
        <View style={styles.inputContainer}>
          <TextInput
            mode="outlined"
            placeholder="Type here..."
            value={text}
            onChangeText={newText => setText(newText)}
            outlineColor={theme.colors.primary}
            style={styles.input}
          />
        </View>
        <View>
          <IconButton
            icon="arrow-right-bold-box"
            iconColor="white"
            containerColor={theme.colors.primary}
            onPress={() => {
              text ? addItem(text) : setShowWarning(true);
              setText('');
            }}
            testID="submit"
          />
        </View>
      </View>
      {showWarning ? (
        <Text variant="labelMedium" style={styles.warning}>
          Please type something
        </Text>
      ) : (
        <></>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    paddingBottom: Platform.OS === 'ios' ? 0 : 10,
    justifyContent: 'space-between',
    width: '98%',
  },
  container: {
    marginHorizontal: '5%',
    flexDirection: 'row',
  },
  inputContainer: {
    width: '90%',
  },
  input: {
    height: 40,
  },
  warning: {
    marginHorizontal: '8%',
    color: 'red',
  },
});

export default NewToDoInput;
