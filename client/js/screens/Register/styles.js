import {StyleSheet} from 'react-native'

const styles = StyleSheet.create({
  registerContainer: {
    backgroundColor: '#03DAC4',
    height: '100%',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: 100,
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
    paddingBottom: 10,
    fontFamily: 'SFProText-Light',
    color: '#13443C',
    fontSize: 18,
    marginLeft: 10,
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
  btnPaddingRegister: {paddingTop: 50},
  btnPaddingUsername: {paddingTop: 10},

  hashtagContainer: {
    backgroundColor: '#03DAC4',
    height: '100%',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: 150,
  },

  hashtagsWrap: {
    display: 'flex',
    flexWrap: 'wrap',
    flexDirection: 'row',
    // paddingHorizontal: 20,
    justifyContent: 'center',
    paddingVertical: 15,
  },

  textStyleHashtagsScreen: {
    paddingTop: 10,
    fontFamily: 'SFProText-Light',
    color: '#13443C',
    fontSize: 19,
    textAlign: 'center',
    paddingHorizontal: 70,
  },
})

export default styles
