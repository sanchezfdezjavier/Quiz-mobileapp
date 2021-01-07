import React from 'react'
import TextInputView from './TextInputView'
import { StyleSheet, Text, View, Image } from 'react-native';
import ImgageNotFound from '../assets/image_not_found.png';

export default function QuizCardView(props) {

    return (
        <View>
            <Image style={ styles.quizImage } 
                   source={ props.quiz.attachment ?? ImgageNotFound } />
            <Text style={{ fontSize: 25 }}> { props.quiz.question } </Text>
        </View>
    )
};

const styles = StyleSheet.create({
      quizImage: {
          width: 380,
          height: 400,
      }
  });