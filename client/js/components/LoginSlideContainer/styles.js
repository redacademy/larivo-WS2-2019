import {StyleSheet} from 'react-native'
import { Dimensions } from 'react-native'

const screenWidth = Dimensions.get('window').width

const styles = StyleSheet.create({
  slidesContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 20,
    width: screenWidth,
  },
  scrollViewContainer: {
    width: screenWidth
  },
  circles_container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: 120,
    marginTop: 40
  }
})

export default styles
