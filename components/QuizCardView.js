import React from 'react'
import TextInputView from './TextInputView'
import { StyleSheet, Text, View, Image } from 'react-native';
import ImgageNotFound from '../assets/image_not_found.png';

export default function QuizCardView(props) {

    return (
        <View style={ styles.mainContainer }>
            <Image style={ styles.quizImage } 
                   source={ props.quiz.attachment ?? ImgageNotFound } />
            <Text style={ styles.title }> { props.quiz.question } </Text>
        </View>
    )
};

const styles = StyleSheet.create({
      mainContainer: {
        margin: 40
      },
      quizImage: {
          width: 380,
          height: 400,
      },
      title: {
          fontWeight: 'bold',
          fontSize: 25
      }
  });