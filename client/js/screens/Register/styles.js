import {StyleSheet} from 'react-native'

const styles = StyleSheet.create({
  registerContainer: {
    backgroundColor: '#03DAC4',
    height: '100%',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 35,
    fontWeight: 'bold',
    fontFamily: 'Asap-SemiBold',
    color: '#13443C',
  },
  childContainer: {
    backgroundColor: '#03DAC4',
    flexDirection: 'column',
    alignItems: 'center',
  },
  textStyle: {
    paddingBottom: 20,
    fontFamily: 'SFProText-Light',
    color: '#13443C',
    fontSize: 16,
  },
  textStyleUsernameScreen: {
    fontSize: 35,
    fontWeight: 'bold',
    fontFamily: 'Asap-SemiBold',
    color: '#13443C',
    //   width: '80%',
    paddingHorizontal: 20,
    textAlign: 'center',
  },
  btnPaddingRegister: {paddingTop: 60},
  btnPaddingUsername: {paddingTop: 10},
})

export default styles
