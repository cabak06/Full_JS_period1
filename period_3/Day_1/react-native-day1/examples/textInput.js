
import React, { useState } from 'react';
import { Text, TextInput, View } from 'react-native';

const TextInputScreen = () => {
  const [text, setText] = useState('');
  return (
    <View style={{padding: 10}}>
      <TextInput
        style={{height: 40}}
        placeholder="Type here please!"
        onChangeText={text => setText(text)}
        defaultValue={text}
      />
      <Text style={{padding: 10, fontSize: 42}}>
        {text}
      </Text>
    </View>
  );
}

export default TextInputScreen;


