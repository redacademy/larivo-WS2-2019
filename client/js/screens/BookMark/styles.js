import {StyleSheet} from 'react-native'

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#03dac4',
    width: '100%',
  },
  listView: {
    backgroundColor: 'white',
    minHeight: '100%',
    paddingBottom: 120,
  },
  cardContainer:{
    flex: 1,
    backgroundColor: 'white',
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingVertical: 8,
    width: "100%",
    height: "100%"
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
