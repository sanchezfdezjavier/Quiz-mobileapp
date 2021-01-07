import React, { Component }  from 'react'
import { StyleSheet, Text, View, SafeAreaView, Image } from 'react-native';
import { connect } from 'react-redux';
import { StatusBar } from 'expo-status-bar';
import ListView from './ListView'
import QuizCardView from './QuizCardView';
import TextInputView from './TextInputView'
import Icon from '../assets/icon.png'
import { QUIZZES_URL } from '../constants'
import { questionAnswer, changeQuiz, nextQuiz, prevQuiz, submit, initQuizzes } from '../redux/actions'

class MainView extends Component {

    componentDidMount(){
        console.log("triggered")
        this.props.dispatch(initQuizzes(QUIZZES_URL))
    }

    render(){
        if(!this.props.finished) {
            return (
                <Text>Loading...</Text>
            )
        } else {
            return (
                <SafeAreaView style={ styles.container }>
                    <StatusBar style="auto" />
                    <Text> Quiz React Native Redux </Text>
                    <Image style={ styles.quizImage } source={ Icon }/>
                    <ListView/>
                    <TextInputView/>
                </SafeAreaView>
            )
        }
    }
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center'
    },
    ImageContainer: {
        paddingTop: 50,
      },
      tinyLogo: {
        width: 50,
        height: 50,
      },
      logo: {
        width: 66,
        height: 58,
      },
      quizImage: {
          width: 300,
          height: 400
      }
  });

  const mapStateToProps = state => {
      return {
          ...state
      }
  }

  export default connect(mapStateToProps)(MainView);
