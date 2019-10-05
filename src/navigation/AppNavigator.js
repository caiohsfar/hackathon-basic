import { createAppContainer, createStackNavigator } from 'react-navigation';
import DiceScreen from '../screens/DiceScreen';
import HomeScreen from '../screens/HomeScreen';

config = {
  defaultNavigationOptions: {
    header: null
  },  
};

export default createAppContainer(
  createStackNavigator(
    {
      Home: HomeScreen,
      Dice: DiceScreen,
    },
    config
  )
);
