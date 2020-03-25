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
    marginRight: 15,
  },
  userName: {
    paddingHorizontal: 20,
    textAlign: 'center',
    marginBottom: 30,
  },
  childContainer: {
    backgroundColor: '#03DAC4',
    flexDirection: 'column',
    alignItems: 'center',
  },
  innerChild: {
    paddingVertical: 10,
  },
  textStyle: {
    paddingBottom: 10,
    paddingTop: 5,
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
    paddingHorizontal: 20,
    textAlign: 'center',
  },
  btnPaddingRegister: {marginRight: 20},
  btnGenerate: {marginBottom: 60},
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
    flexDirection: 'row',
    paddingVertical: 15,
  },

  hashtagNotSelected: {
    paddingVertical: 15,
    borderWidth: 1,
    marginVertical: 10,
    marginHorizontal: 10,
    paddingHorizontal: 20,
    paddingVertical: 6,
    borderRadius: 15,
    textAlign: 'center',
  },

  hashtagSelected: {
    borderWidth: 1,
    borderColor: '#13443C',
    backgroundColor: '#13443C',
    paddingVertical: 15,
    borderWidth: 1,
    marginVertical: 10,
    marginHorizontal: 10,
    paddingHorizontal: 20,
    paddingVertical: 6,
    borderRadius: 15,
    textAlign: 'center',
  },

  hashtagTextSelected: {
    color: '#96F3E9',
  },

  hashtagTextNotSelected: {
    color: '#13443C',
  },

  hashtagsChild: {
    marginLeft: 'auto',
    marginRight: 'auto',
  },

  textStyleHashtagsScreen: {
    paddingTop: 10,
    fontFamily: 'SFProText-Light',
    color: '#13443C',
    fontSize: 19,
    textAlign: 'center',
    paddingHorizontal: 70,
  },

  inputBox: {
    justifyContent: 'center',
    backgroundColor: '#03dac4',
  },
  errorText: {
    fontSize: 14,
    color: '#f00',
    marginTop: 10,
    marginLeft: 10,
  },
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
})

export default styles
