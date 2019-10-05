import { StyleSheet } from 'react-native';
import Layout from '../../constants/Layout';

export default StyleSheet.create({
  container: {
    bottom: 0,
    position: 'absolute',
    width: Layout.window.width,
    height: 45,
    justifyContent: 'center'
  },
  text: {
    color: '#fff',
    backgroundColor: '#fff'
  }
});
