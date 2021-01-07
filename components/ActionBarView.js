import React from 'react'
import { View, Button, StyleSheet } from "react-native";

export default function ActionBarView(props) {
    return (
        <View>
            <View style={styles.fixToText}  >
                <Button
                onPress={ props.onPrevQuiz }
                disabled={ !(props.currentQuiz > 0) }
                title="Prev"
                color="#2e2e2e"
                accessibilityLabel="Prev quiz button"
                />
                <Button
                    onPress={ props.onNextQuiz }
                    disabled={ !(props.currentQuiz < 9) }
                    title="Next"
                    color="#2e2e2e"
                    accessibilityLabel="Next quiz button"
                />
            </View>
            <View style={styles.fixToText}>
            <Button
                onPress={ props.onSubmitButtonPressed }
                title="Submit"
                color="#00bd13"
                accessibilityLabel="Next quiz button"
            />
            <Button
                onPress={ props.onLoadQuizzesButtonPressed }
                title="Load More Quizzes"
                color="#00a2ff"
                accessibilityLabel="Load more quizzes button"
            />
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      marginHorizontal: 16,
    },
    title: {
      textAlign: 'center',
      marginVertical: 8,
    },
    fixToText: {
      flexDirection: 'row',
      justifyContent: 'space-between',
    },
    separator: {
      marginVertical: 8,
      borderBottomColor: '#737373',
      borderBottomWidth: StyleSheet.hairlineWidth,
    },
  });
