import {StyleSheet} from 'react-native'

const styles = (props) => StyleSheet.create({
  button: {
    alignItems: 'center',
    justifyContent: 'center',
    height: 44,
    width: 214,
    borderRadius: 20.75,
    backgroundColor: props.backgroundColor,
    shadowOpacity: 0.75,
    shadowRadius: 5,
    shadowColor: 'rgba(0,0,0,0.25)',
    shadowOffset: { height: 2, width: 2 },
    marginTop: 25
  },
  text: {
    fontSize: 16,
    color: '#13443C',
    fontWeight: '300',
  }
})

export default styles