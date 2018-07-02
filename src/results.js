import React, { Component } from 'react'
import {
  View,
  Text,
  StyleSheet,
} from 'react-native'

class Results extends Component {

  static navigationOptions = ({ navigation }) => ({
    title: 'Tab B',
  })

  render () {
    return (
      <View style={styles.container}>
        <Text style={styles.text}>Results</Text>
      </View>
      )
  }
}

export default Results

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#8e44ad',
    padding: 20,
  },
  text: {
    color: 'white',
    fontSize: 40,
    fontWeight: 'bold',
  }
})
