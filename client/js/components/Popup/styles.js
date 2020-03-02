import {StyleSheet} from 'react-native'

const styles = StyleSheet.create({
  popup: {
    backgroundColor: '#195851',
    opacity: 0.95,
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    zIndex: 1,
  },
  popupText: {
    fontSize: 36,
    fontStyle: 'italic',
    color: '#fff',
    fontWeight: 'bold',
    marginBottom: 200,
  },
  icon: {left: 5, marginBottom: 230},
})

export default styles
