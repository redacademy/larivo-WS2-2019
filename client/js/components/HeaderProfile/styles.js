import {StyleSheet} from 'react-native'

const styles = StyleSheet.create({
  header: {
    backgroundColor: '#03dac4',
    paddingVertical: 20,
    paddingHorizontal: 30,
  },
  headerContainer: {
    display: 'flex',
    backgroundColor: '#03dac4',
    paddingVertical: 60,
    paddingVertical: 30,
    paddingHorizontal: 30,
    paddingTop: 50,
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
  },
  textFollow: {
    color: '#1e6a62',
    fontFamily: 'SFProText-Light',
  },
})

export default styles
