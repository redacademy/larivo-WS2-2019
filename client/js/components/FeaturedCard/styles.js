import {StyleSheet} from 'react-native'

const styles = StyleSheet.create({
  cardContainer: {    
    height: '100%',
    backgroundColor: '#fff',
    paddingHorizontal: 30,
    // paddingVertical: 15
  },
  content: {
    justifyContent: 'center',
    width: '90%',
    marginLeft: 'auto',
    marginRight: 'auto',
  },
  searchBox: {
    flexDirection: 'row',
    alignItems: 'center',
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
