import {StyleSheet} from 'react-native'

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#03dac4',
  },
  title: {
    color: '#13443C',
    paddingVertical: 15,
    paddingHorizontal: 15,
    fontSize: 40,
    fontFamily: 'Asap-BoldItalic',
  },
  list: {
    paddingVertical: 15,
    backgroundColor: '#fff',
  },
  list_item: {
    justifyContent: 'center',
    borderBottomColor: '#1E6A62',
    borderBottomWidth: 0.5,
    paddingHorizontal: 15,
    paddingVertical: 15,
  },
  cardImage: {
    alignSelf: 'center',
    height: 150,
    width: '100%',
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
  },
  separator: {
    height: 1,
    width: '100%',
    backgroundColor: '#CED0CE',
  },
  item: {
    paddingTop: 15,
    paddingBottom: 0,
    height: 'auto',
  },
})

export default styles
