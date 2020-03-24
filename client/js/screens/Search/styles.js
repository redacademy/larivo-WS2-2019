import {StyleSheet} from 'react-native'

const styles = StyleSheet.create({
  container: {flex: 1, backgroundColor: '#F1FFFE'},
  content: {
    backgroundColor: '#F1FFFE',
    borderBottomColor: '#1E6A62',
    borderBottomWidth: 0.5,
  },
  result: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 20,
    paddingHorizontal: 20,
  },
  title: {paddingLeft: 20},
  resultWrapper: {
    paddingVertical: 20,
    paddingHorizontal: 20,
  },
  storyResult: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 15,
  },
  hashtags: {paddingVertical: 10},
  no_results_container: {
    flex: 1,
    backgroundColor: '#F1FFFE',
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  no_results_text: {
    marginTop: 50,
    fontSize: 20,
    fontFamily: 'SFProText-Light',
  },
})

export default styles
