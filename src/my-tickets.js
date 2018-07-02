import React, { Component } from 'react'
import {
  View,
  Text,
  StyleSheet, Button
} from 'react-native'

class MyTickets extends Component {

  static navigationOptions = ({ navigation }) => ({
    title: 'Tab A',
  })

  render () {
    return (
      <View style={styles.container}>
        <Text style={styles.text}>My Tickets</Text>
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

export default MyTickets

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#cccccc',
    padding: 20,
  },
  text: {
    color: 'white',
    fontSize: 40,
    fontWeight: 'bold',
  }
})
