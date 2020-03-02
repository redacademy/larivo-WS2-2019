import {StyleSheet} from 'react-native'

const styles = StyleSheet.create({
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
  hashtagContainer: {
    marginTop: 20,
  },
  hashtagTitle: {
    fontSize: 18,
    fontWeight: '500',
    marginBottom: 10,
  },
  hashtags: {
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
})

export default styles
