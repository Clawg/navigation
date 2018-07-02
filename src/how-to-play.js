import React, { Component } from 'react'
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native'

class HowToPlay extends Component {

  static navigationOptions = {
    title: 'Lotto'
  }


  render () {
    return (
      <View style={styles.container}>
        <Text style={styles.text}>How to Play</Text>
        <TouchableOpacity
          style={styles.item}
          onPress={() => this.props.navigation.navigate('PYO')}
        >
          <Text style={styles.itemText}>PYO</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.item}
          onPress={() => this.props.navigation.navigate('Dips')}
        >
          <Text style={styles.itemText}>Dips</Text>
        </TouchableOpacity>
      </View>
      )
  }
}

export default HowToPlay

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#2980b9',
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
  },
  itemText: {
    color: 'white',
    fontSize: 20,
  }
})
