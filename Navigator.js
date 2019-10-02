import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import Home from './Home';
import Profile from './Profile';

const AppNavigator = createStackNavigator({
  Home: {
    screen: Home,
  },
  Profile: {
    screen: Profile,
  },
});

export default createAppContainer(AppNavigator);
