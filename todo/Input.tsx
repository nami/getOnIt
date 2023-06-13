import React, {useState} from 'react';
import {Text, TextInput, TouchableOpacity, View} from 'react-native';

type inputProps = {
  addListItem: (newItemValue: string) => void;
};

const Input = ({addListItem}: inputProps) => {
  const [text, setText] = useState<string | undefined>(undefined);
  const [showWarning, setShowWarning] = useState(false);

  return (
    <View>
      <TextInput
        placeholder="Input your to-do here..."
        onChangeText={(newText: string) => setText(newText)}
        defaultValue={text}
      />
      <TouchableOpacity
        onPress={() => {
          text
            ? () => {
                addListItem(text);
                setShowWarning(false);
              }
            : setShowWarning(true);
          setText('');
        }}>
        <Text>Submit</Text>
      </TouchableOpacity>
      {showWarning ? <Text>Please input some text</Text> : <></>}
    </View>
  );
};

export default Input;
