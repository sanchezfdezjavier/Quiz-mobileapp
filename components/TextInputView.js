import React from 'react';
import { TextInput } from 'react-native';

const TextInputView = (props) => {

  return (
    <TextInput
      style={{ height: 40, borderColor: 'gray', borderWidth: 1 }}
      onChangeText={text => props.onQuestionAnswer(text) }
      value={ props.quiz.userAnswer || '' }
    />
  );
}

export default TextInputView;