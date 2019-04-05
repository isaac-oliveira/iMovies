import { createStackNavigator, createAppContainer } from 'react-navigation'

import LoginScreen from '../Screens/LoginScreen'
import RegisterScreen from '../Screens/RegisterScreen'
import SearchScreen from '../Screens/SearchScreen'
import DetailsScreen from '../Screens/DetailsScreen'

import styles from './Styles/NavigationStyles'

// Manifest of possible screens
const PrimaryNav = createStackNavigator({
  LoginScreen: { screen: LoginScreen },
  RegisterScreen: { screen: RegisterScreen },
  SearchScreen: { screen: SearchScreen },
  DetailsScreen: { screen: DetailsScreen },  
}, {
  // Default config for all screens
  headerMode: 'none',
  initialRouteName: 'RegisterScreen',
  navigationOptions: {
    headerStyle: styles.header
  }
})

export default createAppContainer(PrimaryNav)
