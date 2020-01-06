import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import HomeScreen from './src/Components/Home';
import ProfileScreen from './src/Components/Profile';

const MainNavigator = createStackNavigator(
  {
    Home: {screen: HomeScreen},
    Profile: {screen: ProfileScreen},
  },
  {initialRouteName: 'Home'},
);

const App = createAppContainer(MainNavigator);

export default App;
