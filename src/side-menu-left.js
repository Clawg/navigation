import PropTypes from 'prop-types';
import React, {Component} from 'react';
import {NavigationActions} from 'react-navigation';
import {ScrollView, Text, View, Image, StyleSheet, TouchableOpacity} from 'react-native';

class SideMenu extends Component {
    // constructor(props) {
    //     super(props);
    //     console.log('_+_+_+_+_+_+_+_+_')
    //
    //     console.log(props.navigation.state.routeName)
    //     this.state = { currentScreen: props.navigation.state.routeName };
    //   }

  navigateToScreen = (route) => () => {
console.log(this.props)
    const navigateAction = NavigationActions.navigate({
      routeName: route
    });

    this.props.navigation.dispatch(navigateAction);
  }

  render () {
    return (
      <View style={styles.container}>
        <ScrollView>
          <View>
            <View>
                {/*}<TouchableOpacity
                    style={styles.menuItem}
                    onPress={this.navigateToScreen('Lotto')}>
                    {this.state.currentScreen === 'Lotto' ?
                    <Image style={{width: 120, height: 64}} source={require('../assets/images/lotto_powerball_grey_240.png')} /> :
                    <Image style={{width: 120, height: 64}} source={require('../assets/images/lotto_powerball_240.png')} />}
                </TouchableOpacity>*/}
                <TouchableOpacity
                    style={styles.menuItem}
                    onPress={this.navigateToScreen('Results')}>
                    <Image style={{width: 120, height: 64}} source={require('../assets/images/lotto_powerball_240.png')} />
                </TouchableOpacity>
                <TouchableOpacity
                    style={styles.menuItem}
                    onPress={this.navigateToScreen('Strike')}>
                    <Image style={{width: 120, height:64}} resizeMode='contain' source={require('../assets/images/strike_240.png')} />
                </TouchableOpacity>
                <TouchableOpacity
                    style={styles.menuItem}
                    onPress={this.navigateToScreen('Keno')}>
                    <Image style={{width: 120, height: 64}} resizeMode='contain' source={require('../assets/images/keno_240.png')} />
                </TouchableOpacity>
                <TouchableOpacity
                    style={styles.menuItem}
                    onPress={this.navigateToScreen('Bullseye')}>
                    <Image style={{width: 120, height: 64}} resizeMode='contain' source={require('../assets/images/bullseye_240.png')} />
                </TouchableOpacity>
                <TouchableOpacity
                    style={styles.menuItem}
                    onPress={this.navigateToScreen('InstantPlay')}>
                    <View style={{paddingTop: 4, paddingBottom: 4}}><Image style={{width: 120, height: 56}} resizeMode='contain' source={require('../assets/images/instant_play_170.png')} /></View>
                </TouchableOpacity>
            </View>
            <View>
                <View style={styles.navSectionStyle}>
                  <Text style={styles.navItemStyle} onPress={this.navigateToScreen('StoreFinder')}>Store finder</Text>
                </View>
                <View style={styles.navSectionStyle}>
                  <Text style={styles.navItemStyle} onPress={this.navigateToScreen('FAQs')}>FAQ's</Text>
                </View>
                <View style={styles.navSectionStyle}>
                  <Text style={styles.navItemStyle} onPress={this.navigateToScreen('PlayResponsibly')}>Play responsibly</Text>
                </View>
                <View style={styles.navSectionStyle}>
                  <Text style={styles.navItemStyle} onPress={this.navigateToScreen('Legal')}>Legal</Text>
                </View>
                <View style={styles.navSectionStyle}>
                  <Text style={styles.navItemStyle} onPress={this.navigateToScreen('ContactUs')}>Contact us</Text>
                </View>
                <View style={styles.navSectionStyle}>
                  <Text style={styles.navItemStyle} onPress={this.navigateToScreen('MobileSite')}>Mobile site</Text>
                </View>
            </View>
          </View>
        </ScrollView>
      </View>
    );
  }
}

SideMenu.propTypes = {
  navigation: PropTypes.object
};

const styles = StyleSheet.create({
    container: {
       flex: 1
     },
     navItemStyle: {
       padding: 10
     },
     navSectionStyle: {
       backgroundColor: 'lightgrey'
     },
     sectionHeadingStyle: {
       paddingVertical: 10,
       paddingHorizontal: 5
     },
     menuItem: {
        borderStyle: 'solid',
        borderWidth: 1,
        borderColor: 'red',
        margin: 0,
        padding: 0,
        flex: 1,
        alignItems: 'center'
     },
     footerContainer: {
       padding: 20,
       backgroundColor: 'lightgrey'
     }
})

export default SideMenu;
