import {StyleSheet} from 'react-native'

const styles = StyleSheet.create({
  login_container: {
    backgroundColor: '#03DAC4',
    height: '100%',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  login_slidesContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 20,
    width: '100%',
    padding: 10,
  },
  login_buttons_container: {
    flexDirection: 'column',
    justifyContent: 'space-between',
    width: 214,
    marginTop: 30,
    alignItems: 'center',
    justifyContent: 'center',
  },
  login: {
    fontSize: 16,
    color: '#13443C',
    fontWeight: '600',
    textDecorationLine: 'underline',
  },
  text: {
    fontSize: 16,
    color: '#13443C',
    fontWeight: '300',
  },
})

export default styles
