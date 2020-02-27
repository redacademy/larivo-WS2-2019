import {StyleSheet} from 'react-native'
import { Dimensions } from 'react-native'

const screenWidth = Dimensions.get('window').width

const styles = StyleSheet.create({
  logo: {
    shadowColor: 'rgba(0,0,0,0.25)',
    shadowOffset: { width: 2, height: 2 },
    shadowRadius: 7,
  },
  headline: {
    fontFamily: 'Asap-BoldItalic',
    fontSize: 32,
    marginTop: 25,
    color: '#13443C'
  },
  bodyText: {
    fontFamily: 'SFProText-Light',
    marginTop: 10,
    fontSize: 16,
    width: 240,
    textAlign: 'center',
    color: '#13443C'
  },
  scrollViewContainer: {
    width : screenWidth
  }
})

export default styles
