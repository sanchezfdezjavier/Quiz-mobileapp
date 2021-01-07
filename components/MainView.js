import React, { Component }  from 'react'
import { StyleSheet, Text, View, SafeAreaView, Image, Button } from 'react-native';
import { connect } from 'react-redux';
import { StatusBar } from 'expo-status-bar';
import ListView from './ListView'
import QuizCardView from './QuizCardView';
import TextInputView from './TextInputView'
import ActionBarView from './ActionBarView'
import { QUIZZES_URL } from '../constants'
import { questionAnswer, changeQuiz, nextQuiz, prevQuiz, submit, initQuizzes } from '../redux/actions'

const Separator = () => (
    <View style={styles.separator} />
  );

class MainView extends Component {

    componentDidMount(){
        console.log("triggered")
        this.props.dispatch(initQuizzes(QUIZZES_URL))
    }

    render() {
        if(!this.props.finished) {
            return (
                <Text>Loading...</Text>
            )
        } else {
            return (
                <SafeAreaView style={ styles.container }>
                    <StatusBar style="auto" />
                    <Text style={{ fontSize: 20 }}> Your Score: {this.props.score} </Text>
                    <QuizCardView 
                        quiz={ this.props.quizzes[this.props.currentQuiz] }
                        currentQuiz={ this.props.currentQuiz }
                    />
                    <Separator sytle={ styles.separator }/>
                    <TextInputView  quiz={ this.props.quizzes[this.props.currentQuiz] }
                                    onQuestionAnswer={(answer) => {
                                                        this.props.dispatch(questionAnswer(this.props.currentQuiz, answer))
                                                    }}
                    />
                    <ActionBarView
                        onNextQuiz={()=>{
                            this.props.dispatch(nextQuiz(this.props.currentQuiz))
                        }}
                        onPrevQuiz={()=>{
                            this.props.dispatch(prevQuiz(this.props.currentQuiz))
                        }}
                        onSubmitButtonPressed={()=>{
                            this.props.dispatch(submit(this.props.quizzes))
                        }}
                        onLoadQuizzesButtonPressed={()=>{ 
                            this.props.dispatch(initQuizzes(QUIZZES_URL))
                        }}
                        currentQuiz={ this.props.currentQuiz }

                    />
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
      }
  });

  const mapStateToProps = state => {
      return {
          ...state
      }
  }

  export default connect(mapStateToProps)(MainView);
