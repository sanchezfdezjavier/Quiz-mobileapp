import React from 'react';
import { TextInput } from 'react-native';

const TextInputView = () => {

  return (
    <TextInput
      style={{ height: 40, borderColor: 'gray', borderWidth: 1 }}
      onChangeText={text => onChangeText(text)}
      value={"Introduce tu respuesta"}
    />
  );
}

export default TextInputView;