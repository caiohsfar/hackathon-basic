import { StyleSheet, Dimensions } from 'react-native';
import Layout from '../../constants/Layout';

export default StyleSheet.create({
  container: {
    width: Dimensions.get('window').width * 0.9, 
    marginLeft: '5%', 
    marginTop: '2%',
    justifyContent: 'center', 
    backgroundColor: '#EFF2F7'
  },
  text: {
    margin: '5%',
    fontSize: 20,
  }
});
