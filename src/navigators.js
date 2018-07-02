/*
import React from 'react';
import { Button, Platform, ScrollView, StyleSheet } from 'react-native';
import { DrawerNavigator } from 'react-navigation';
import SampleText from './sample-text.js';
import SideMenuLeft from './side-menu-left.js';
import SideMenuRight from './side-menu-right.js';

const MyNavScreen = ({ navigation, banner }) => (
  <ScrollView style={styles.container}>
    <SampleText>{banner}</SampleText>
    <Button
      onPress={() => navigation.navigate('DrawerOpen')}
      title="Open drawer"
    />
    <Button
      onPress={() => navigation.navigate('FooDrawerOpen')}
      title="Open drawer right"
    />
    <Button onPress={() => navigation.goBack(null)} title="Go back" />
  </ScrollView>
);

const InboxScreen = ({ navigation }) => (
  <MyNavScreen banner={'Inbox Screen'} navigation={navigation} />
);
InboxScreen.navigationOptions = {
  drawerLabel: 'Inbox'
};

const DraftsScreen = ({ navigation }) => (
  <MyNavScreen banner={'Drafts Screen'} navigation={navigation} />
);
DraftsScreen.navigationOptions = {
  drawerLabel: 'Drafts'
};

const DrawerExample = DrawerNavigator(
  {
    Inbox: {
      path: '/',
      screen: InboxScreen,
    },
    Drafts: {
      path: '/sent',
      screen: DraftsScreen,
    },
  },
  {
    initialRouteName: 'Inbox',
    contentOptions: {
      activeTintColor: '#e91e63',
    },
  }
);

export const MainStack = DrawerNavigator(
    {
        Drafts: {
          screen: DrawerExample,
        },
    },
    {
        drawerOpenRoute: 'FooDrawerOpen',
        drawerCloseRoute: 'FooDrawerClose',
        drawerPosition: 'right',
        contentComponent: SideMenuRight

    }
);

const styles = StyleSheet.create({
  container: {
    marginTop: Platform.OS === 'ios' ? 20 : 0,
  },
});
*/




import React, { Component } from 'react';
import {StyleSheet, Text, View, TouchableWithoutFeedback, TouchableOpacity, Image, Button} from 'react-native'

// Navigators
import { DrawerNavigator, StackNavigator, TabNavigator, TabView } from 'react-navigation'

// StackNavigator screens
import ItemList from './ItemList'
import Item from './Item'

// TabNavigator screens
import TabA from './TabA'
import TabB from './TabB'
import TabC from './TabC'
import Home from './Home'
import MyTickets from './my-tickets'

import HowToPlay from './how-to-play.js'
import Dips from './dips.js'
import PYO from './pyo.js'
import Main from './main.js'
import Results from './results.js'
import SideMenuLeft from './side-menu-left.js';
import SideMenuRight from './side-menu-right.js';

// Plain old component
import Plain from './Plain'



const styles = StyleSheet.create({
  tabbar: {
    height: 49,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    borderTopWidth: 1,
    borderTopColor: '#cccccc',
    backgroundColor: '#f5f5f5'
  },
  tab: {
    alignSelf: 'stretch',
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  }
});

// https://github.com/react-navigation/react-navigation/issues/1059

const CustomTabBar = React.createClass({
  render() {

    const {
      navigation,
      renderIcon,
      activeTintColor,
      inactiveTintColor,
      jumpToIndex
    } = this.props;

    const {
      routes
    } = navigation.state;

    return (
      <View style={styles.tabbar}>

        {routes && routes.map((route, index) => {
          const focused = index === navigation.state.index;
          const tintColor = focused ? activeTintColor : inactiveTintColor;

          console.log(route)
          console.log(index)
          if (route.routeName !== "Lotto") {
              return (
                <TouchableWithoutFeedback
                  key={route.key}
                  style={styles.tab}
                  onPress={() => jumpToIndex(index)}
                >
                  <View style={styles.tab}>

                    <Text>{route.routeName}</Text>
                  </View>
                </TouchableWithoutFeedback>
              );
          }
          else {
              return null
          }


        })}

      </View>
    );
  }
});

// Tabs setup
const Tabs = TabNavigator(
    {
        Home:     { screen: Home},
        Results:  { screen: Results},
        Games:    { screen: Home},
        Scan: { screen: Home },
        ["My Tickets"]:  { screen: MyTickets},
    },
    {
        //tabBarComponent: CustomTabBar,
        tabBarComponent: ({jumpToIndex, ...props, navigation}) => (
            <CustomTabBar
                {...props}
                jumpToIndex={index => {
                    if (index === 2) {
                        //navigation.navigate('camera')
                        alert('Show the popup')
                    }
                    else if (index === 3) {
                        //navigation.navigate('camera')
                        alert('Show the camera')
                    }
                    else {
                        jumpToIndex(index)
                    }
                }}
            />

        ),
        tabBarPosition: 'bottom'
    }
)

const DrawerLeft = DrawerNavigator(
    {
        Tabs:  {
            screen: Tabs
        }
    },
    {
        contentComponent: SideMenuLeft
        // contentComponent: (props) => (
        //     <SideMenuLeft
        //     currentScreen={props.navigation.state.routeName} {...props} />
        // ),
    }
);

const DrawerRight = DrawerNavigator(
    {
        DrawerLeft:  {
            screen: DrawerLeft
        }
    },
    {
        drawerPosition: 'right',
        contentComponent: SideMenuRight,
        drawerOpenRoute: 'DrawerRightOpen',
        drawerCloseRoute: 'DrawerRightClose',
        drawerToggleRoute: 'DrawerRightToggle',
    }
)

class LogoTitle extends React.Component {
  render() {
    return (
      <Image
        source={require('../assets/images/logo.png')}
        style={{ width: 44, height: 44,}}
      />
    );
  }
}

export const MainStack = StackNavigator({
    DrawerRight:   {
        screen: DrawerRight
    }
    },
    {
      //   navigationOptions: (props) => ({
      //       header: (
      //   <View
      //     style={{
      //       height: 80,
      //       marginTop: 20
      //     }}
      //   >
      //   <Button  title='Drawer'
      //               onPress={() => {
      //                   props.navigation.navigate('DrawerOpen')
      //               }}>
      //           </Button>
      //
      //           <Button
      //                       title='Right'
      //                       onPress={() => {
      //                         props.navigation.navigate('DrawerRightOpen');
      //                       }}>
      //                     </Button>
      //   </View>
      // )
      //   })

        navigationOptions: (props) => ({
            headerMode: 'float',
            headerTitle: <LogoTitle />,
            backgroundColor: '#3c2d64',
            headerStyle: {
                backgroundColor: '#3c2d64',
            },
            headerLeft: (
                <Button  title='Drawer'
                    onPress={() => {
                        props.navigation.navigate('DrawerToggle')
                    }}>
                </Button>
            ),
            headerRight: (
                  <Button
                    title='Right'
                    onPress={() => {
                        props.navigation.navigate('DrawerClose')
                      props.navigation.navigate('DrawerRightToggle');
                    }}>
                  </Button>
            ),
        })

})
