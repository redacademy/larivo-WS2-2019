import {StyleSheet} from 'react-native'

const styles = StyleSheet.create({
  input: {
    borderWidth: 1,
    borderColor: '#1E6A62',
    width: 268,
    height: 36,
    borderRadius: 20,
    marginRight: 20,
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
})

export default styles
