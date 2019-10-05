import { createAppContainer, createStackNavigator } from 'react-navigation';
import DiceScreen from '../screens/DiceScreen';

config = {
  defaultNavigationOptions: {
    header: null
  }
};

export default createAppContainer(
  createStackNavigator(
    {
      Dice: DiceScreen
    },
    config
  )
);
