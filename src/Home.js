import React, { Component } from 'react'
import {
  View,
  Text,
  StyleSheet, Button
} from 'react-native'

class Home extends Component {

  static navigationOptions = ({ navigation }) => ({
    title: 'Tab A',
  })

  render () {
    return (
      <View style={styles.container}>
        <Text style={styles.text}>Home</Text>
        <Button  title='Drawer'
        onPress={() => {
            console.log(this.props)
            //navigation.navigate('DrawerToggle');
            //navigation.navigate('DrawerToggle');                // props.navigator.toggleDrawer({
            this.props.navigation.navigate('DrawerOpen')
            //  side: 'left',
            //  animated: true
            // })
        }}>
        </Button>
        <Button  title='Drawer Right'
        onPress={() => {
console.log(this.props)
            this.props.navigation.navigate('DrawerRightOpen')

        }}>
        </Button>
      </View>
      )
  }
}

export default Home

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#c0392b',
    padding: 20,
  },
  text: {
    color: 'white',
    fontSize: 40,
    fontWeight: 'bold',
  }
})
