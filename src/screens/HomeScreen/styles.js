import { StyleSheet } from 'react-native';
export default StyleSheet.create({
  container: {
    flex: 1
  },
  header: {
    justifyContent: 'flex-start', 
    alignItems: 'flex-start', 
    left: '5%', 
    top: '5%',
  },
  jogadores: {
    justifyContent: 'space-between', 
    alignContent: 'flex-end'
  },
  bottomView:{
    width: '100%', 
    height: 50, 
    backgroundColor: '#FF9800', 
    justifyContent: 'center', 
    alignItems: 'center',
    position: 'absolute',
    bottom: 0
  },
});
