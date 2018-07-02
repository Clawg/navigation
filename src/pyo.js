import React, { Component } from 'react'
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native'

class PYO extends Component {

  static navigationOptions = {
    title: 'PYO'
  }

  render () {
    return (
      <View style={styles.container}>
        <Text style={styles.text}>PYO</Text>
      </View>
      )
  }
}

export default PYO

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#2980b4',
    padding: 20,
  },
  text: {
    color: 'white',
    fontSize: 40,
    fontWeight: 'bold',
  },
  item: {
    padding: 10,
  },
  itemText: {
    color: 'white',
    fontSize: 20,
  }
})
