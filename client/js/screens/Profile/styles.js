import {StyleSheet} from 'react-native'

const styles = StyleSheet.create({
  headerContainer: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingTop: 10,
  },
  followsContainer: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  titleContainer: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  numbers: {
    paddingTop: 2,
    fontSize: 14,
    textAlign: 'center',
    fontWeight: 'bold',
    color: '#13443C',
  },
  textFollow: {
    color: '#1e6a62',
    fontFamily: 'SFProText-Light',
  },
})

export default styles
