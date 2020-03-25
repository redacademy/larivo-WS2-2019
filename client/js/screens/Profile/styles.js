import {StyleSheet} from 'react-native'

const styles = StyleSheet.create({
  headerContainer: {
    backgroundColor: '#03dac4',
    paddingHorizontal: 30,
    paddingTop: 10,
    paddingBottom: 20,
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

  container: {
    flex: 1,
    backgroundColor: '#F1FFFE',
  },
  content: {
    width: '90%',
    marginLeft: 'auto',
    marginRight: 'auto',
  },
  titleInput: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#1E6A62',
    paddingTop: 10,
    paddingLeft: 10,
    paddingBottom: 10,
    width: '100%',
  },
  contentInput: {
    width: '100%',
    fontWeight: 'normal',
    fontSize: 16,
    color: '#1E6A62',
    paddingLeft: 10,

    paddingBottom: 16,
  },
  tagInput: {
    marginTop: 30,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 8,
    },
    shadowOpacity: 0.44,
    shadowRadius: 10.32,

    elevation: 16,
    borderWidth: 1,
    borderRadius: 20.75,
    padding: 12,
    width: '100%',
    fontSize: 16,
    color: '#1E6A62',
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  settings_leftArrowBio: {
    marginLeft: 10,
    marginTop: 20,
  },

  profile_container: {
    flex: 1,
  },

  profile_stories: {
    backgroundColor: '#F1FFFE',
  },
  profile_follow: {
    flexDirection: 'row',
    paddingVertical: 10,
    alignItems: 'center',
    justifyContent: 'space-between',
    width: '100%',
  },
  profile_lists: {
    paddingHorizontal: 30,
    paddingVertical: 10,
    borderBottomColor: '#1E6A62',
    borderBottomWidth: 0.3,
  },
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
  backArrow: {
    fontSize: 20,
    padding: 10,
    backgroundColor: '#03dac4',
  },
})

export default styles
