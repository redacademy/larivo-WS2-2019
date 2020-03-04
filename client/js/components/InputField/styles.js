import {StyleSheet} from 'react-native'

const styles = StyleSheet.create({
  input: {
    borderWidth: 1,
    borderColor: '#1E6A62',
    width: 268,
    height: 36,
    borderRadius: 20,
    marginRight: 20,
    fontSize: 19,
    paddingLeft: 8,
  },

  inputBox: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#03dac4',
  },
  eyeIcon: {
    right: -10,
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
})

export default styles
