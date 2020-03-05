import {StyleSheet} from 'react-native'

const styles = StyleSheet.create({
  input: {
    borderWidth: 1,
    borderColor: '#1E6A62',
    backgroundColor: 'transparent',
    borderRadius: 20.5,
    fontSize: 16,
    paddingVertical: 10,
    minWidth: 255,
    width: 275,
    paddingLeft: 15,
  },

  inputBox: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#03dac4',
  },
  eyeIcon: {
    right: -30,
    top: -7,
    position: 'absolute',
  },
  PlaceholderStyle: {
    fontSize: 20,
    color: 'red',
  },
  searchInput: {
    backgroundColor: '#fff',
    borderRadius: 20.5,
    fontSize: 14,
    marginLeft: 15,
    paddingVertical: 10,
    minWidth: 255,
    width: 275,
    paddingLeft: 15,
  },
  searchInputIcon: {
    position: 'absolute',
    right: 40,
  },
  changeUserInput: {
    borderRadius: 25,
    fontSize: 14,
    marginLeft: 15,
    paddingVertical: 10,
    height : 50,
    minWidth: 255,
    width: '92%',
    paddingLeft: 15,
    backgroundColor: '#ededed',
    borderColor: 'white',
    borderWidth: 2,
    overflow: 'hidden',
    shadowColor: 'black',
    shadowRadius: 2,
    shadowOpacity: 1,
    shadowOffset: {
      width: 0,
      height: 1
    },
  }
})

export default styles
