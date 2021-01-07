import React from 'react'
import { View, Button } from "react-native";

export default function ActionBarView(props) {
    return (
        <View>
            <Button
            onPress={null}
            disabled={ !(props.currentQuiz > 0) }
            title="Prev"
            color="#841584"
            accessibilityLabel="Prev quiz button"
            />
            <Button
                onPress={ props.onPrevQuiz }
                disabled={ !(props.currentQuiz < 9) }
                title="Next"
                color="#841584"
                accessibilityLabel="Next quiz button"
            />
            <Button
                onPress={ props.onNextQuiz }
                title="Submit"
                color="#841584"
                accessibilityLabel="Next quiz button"
            />
        </View>
    )
}
