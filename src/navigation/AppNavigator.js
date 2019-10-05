import { createAppContainer, createStackNavigator } from 'react-navigation';
import { Easing, Animated } from 'react-native';
import DiceScreen from '../screens/DiceScreen';
import HomeScreen from '../screens/HomeScreen';
import BoardScreen from '../screens/BoardScreen';
import QuizScreen from '../screens/Quiz';

config = {
  defaultNavigationOptions: {
    header: null
  },
  transitionConfig: () => ({
    transitionSpec: {
      duration: 700,
      easing: Easing.out(Easing.poly(4)),
      timing: Animated.timing,
      useNativeDriver: true
    },
    screenInterpolator: sceneProps => {
      const { layout, position, scene } = sceneProps;

      const thisSceneIndex = scene.index;
      const width = layout.initWidth;

      const translateX = position.interpolate({
        inputRange: [thisSceneIndex - 1, thisSceneIndex],
        outputRange: [width, 0]
      });

      return { transform: [{ translateX }] };
    }
  })
};

export default createAppContainer(
  createStackNavigator(
    {
      Quiz: QuizScreen,
      Home: HomeScreen,
      Board: BoardScreen,
      Dice: DiceScreen,
    },
    config
  )
);
