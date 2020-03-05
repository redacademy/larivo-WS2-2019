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

  //bio Styles
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
    paddingBottom: 10,
    width: '100%',
  },
  contentInput: {
    width: '100%',
    fontWeight: 'normal',
    fontSize: 16,
    color: '#1E6A62',
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
    marginLeft: 20,
    marginTop: 20,
  },
})

export default styles
