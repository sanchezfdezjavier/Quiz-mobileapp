import React, { Component }  from 'react'
import { StyleSheet, Text, View } from 'react-native';
import { connect } from 'react-redux';
import { StatusBar } from 'expo-status-bar';

class MainView extends Component {
    render(){
        return (
            <View style={styles.container}>
                <Text>Open up App.js to start working on your app!</Text>
                <Text> jajajaj </Text>
                <StatusBar style="auto" />
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
  });

  const mapStateToProps = state => {
      return {
          ...state
      }
  }

  export default connect(mapStateToProps)(MainView);
