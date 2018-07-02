import React from 'react';
import {
  DrawerNavigator,
  StackNavigator,
  TabNavigator
} from 'react-navigation';
//import Icon from 'react-native-vector-icons/Ionicons';
import Home from './tabs/Home';
import Settings from './tabs/Settings';
import Baws from './tabs/Settings';
import Profile from './screens/Profile';
import Modal from './screens/Modal';
import Drawer from '../src/side-menu.js';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native'

import HeaderButtons from 'react-navigation-header-buttons'
import Icon from 'react-native-vector-icons/Ionicons';


static navigationOptions = {
  title: 'Custom Usage',
  headerRight: (
    <HeaderButtons>
      <HeaderButtons.Item
        title="add"
        buttonWrapperStyle={{ marginTop: 10 }}
        IconElement={<Ionicons name="ios-add" size={23} />}
        onPress={() => console.warn('add')}
      />
      <HeaderButtons.Item
        title="edit"
        buttonWrapperStyle={{ marginTop: -10 }}
        onPress={() => console.warn('edit')}
      />
    </HeaderButtons>
  ),
};

//********* Drawer setup
const DrawersLeft = DrawerNavigator({
  Inbox:  { screen: InboxScreen,    },
  Drafts: { screen: DraftsScreen,   },
});

const DrawersRight = DrawerNavigator({
  Profile:  { screen: ProfileScreen,    },
  Settings: { screen: SettingsScreen,   },
}, {
    drawerPosition: 'right',
});


//********* Tabs setup
const Tabs = TabNavigator({
  Home:     { screen: HomeScreen,    },
  Email:    { screen: DrawersLeft,   },
  Settings: { screen: DrawersRight,  },
});

//********* Stack setup
const Stack = StackNavigator({
  Tabs:   { screen: Tabs         }
});


/*
// Stack navigation for Settings and Profile screens
const SettingsTab = StackNavigator({
  Settings: {
    screen: Settings,
    navigationOptions: {
      header: null,               // Hide the header
      headerBackTitle: 'Back',    // Title back button Back when we navigate to Profile from Settings
    },
  },
  Profile: {
    screen: Profile,
    navigationOptions: ({ navigation }) => ({
      // Customize header's title with user name passed to navigate()
      // You can pass any props you'd like. For instance: navigate('Profile', { user: 'Tom' }
      title: 'Profile',
    }),
  },
}, {
  headerMode: 'screen',
});

// const SettingsTab2 = TabNavigator({
//   Settings: {
//     screen: Settings,
//     navigationOptions: {
//       header: null,               // Hide the header
//       headerBackTitle: 'Back',    // Title back button Back when we navigate to Profile from Settings
//     },
//   },
//   Profile2: {
//     screen: Profile,
//     navigationOptions: ({ navigation }) => ({
//       // Customize header's title with user name passed to navigate()
//       // You can pass any props you'd like. For instance: navigate('Profile', { user: 'Tom' }
//       title: 'Profile2',
//     }),
//   },
// }, {
//   headerMode: 'screen',
// });

const BawsTab = StackNavigator({
  BigBaws: {
    screen: Baws,
    navigationOptions: {
      header: null,               // Hide the header
      headerBackTitle: 'Back',    // Title back button Back when we navigate to Profile from Settings
    },
  },
  Profile: {
    screen: Profile,
    navigationOptions: ({ navigation }) => ({
      // Customize header's title with user name passed to navigate()
      // You can pass any props you'd like. For instance: navigate('Profile', { user: 'Tom' }
      title: `${navigation.state.params.user}'s Profile`,
    }),
  },
}, {
  headerMode: 'screen',
});

// Tab navigation for Home and Settings screens
const TabNavigation = TabNavigator({
  Home: {
    screen: Home,
    navigationOptions: {
      tabBarLabel: 'Home',
      // tabBarIcon: ({ tintColor, focused }) => <Icon
      //   name={focused ? 'ios-home' : 'ios-home-outline'}
      //   size={26}
      //   style={{ color: tintColor }}
      // />

    },
  },
  Settings: {
    screen: SettingsTab,
    navigationOptions: {
      tabBarLabel: 'Settings',
      // tabBarIcon: ({ tintColor, focused }) => <Icon
      //   name={focused ? 'ios-settings' : 'ios-settings-outline'}
      //   size={26}
      //   style={{ color: tintColor }}
      // />

    },
    visible: false,
    tabVisible: false,
    tabStyle: {
        display: 'none'
    }
  },
});

// Wrap tab navigation into drawer navigation
const TabsWithDrawerNavigation = DrawerNavigator({
  Tabs: {
    screen: TabNavigation,
  }
}, {
  // Register custom drawer component
  contentComponent: props => <Drawer {...props} />
});

// And lastly stack together drawer with tabs and modal navigation
// because we want to be able to call Modal screen from any other screen
export const Drawer1 = StackNavigator({

//export default StackNavigator({
  TabsWithDrawer: {
    screen: TabsWithDrawerNavigation,
  },
  Modal: {
    screen: Modal
  },
}, {
  // In modal mode screen slides up from the bottom
  mode: 'modal',
  // No headers for modals. Otherwise we'd have two headers on the screen, one for stack, one for modal.
  headerMode: 'none',
});
*/
