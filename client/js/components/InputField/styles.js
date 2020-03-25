import {StyleSheet} from 'react-native'

const styles = StyleSheet.create({
  input: {
    borderWidth: 0.5,
    borderColor: '#1E6A62',
    width: 268,
    height: 36,
    borderRadius: 20,
    marginRight: 20,
    fontSize: 16,
    paddingLeft: 8,
    backgroundColor: 'transparent',
    borderRadius: 20.5,
    fontSize: 16,
    paddingVertical: 10,
    minWidth: 255,
    width: 275,
    paddingLeft: 15,
  },
  changePasswordInput: {
    width: 290,
    height: 42,
    borderRadius: 20,
    marginRight: 20,
    fontSize: 16,
    paddingLeft: 18,
    backgroundColor: '#ededed',
  },
  inputBox: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#03dac4',
  },
  inputChangePasswordBox: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
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
  changeUserInputView: {
    width: '100%',
  },
  changeUserInput: {
    borderRadius: 25,
    fontSize: 16,
    marginLeft: 15,
    paddingVertical: 10,
    height: 50,
    minWidth: 100,
    paddingLeft: 15,
    backgroundColor: '#ededed',
  },
})

export default styles
