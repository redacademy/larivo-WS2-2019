import {StyleSheet} from 'react-native'

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    height: '100%',
    justifyContent: 'center'
  },
  cardContainer: {    
    height: '120%',
    backgroundColor: '#fff',
    alignItems: 'center'
    },
  content: {
    justifyContent: 'center',
    width: '90%',
    marginLeft: 'auto',
    marginRight: 'auto',
  },
  cardImage: {
    alignSelf: 'center',
    height: 150,
    width: '100%',
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20
  }
})

export default styles
