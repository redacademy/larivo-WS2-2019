import {StyleSheet} from 'react-native'

const storyStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#03dac4',
    width: '100%',
  },
  card: {
    backgroundColor: 'white',
    margin: 24,
    padding: 20,
    borderRadius: 20,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.32,
    shadowRadius: 3,
    elevation: 9,
  },
  backIcon: {
    marginLeft: 15,
    marginTop: 10,
  },
  text: {
    color: '#333',
    fontSize: 18,
  },
  content: {
    justifyContent: 'center',
    width: '100%',
    marginLeft: 'auto',
    marginRight: 'auto',
    paddingVertical: 10,
    paddingHorizontal: 20,
  },
  searchBox: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  cardImage: {
    alignSelf: 'center',
    height: 150,
    width: '100%',
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
  },
  initial: {
    position: 'absolute',
    left: 10,
    top: 20,
  },
  bookmarkIcon: {
    position: 'absolute',
    right: 30,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.32,
    shadowRadius: 2,
    elevation: 2,
  },
  title: {
    fontSize: 20,
    color: '#13443C',
    fontFamily: 'SFProText-Bold',
    marginBottom: 5,
  },
  createdAt: {
    fontSize: 15,
    textTransform: 'uppercase',
    color: '#13443C',
    fontFamily: 'SFProText-Regular',
    marginBottom: 4,
  },
  body: {
    fontSize: 17,
    color: '#13443C',
    fontFamily: 'SFProText-Regular',
    marginTop: 5,
    marginBottom: 4,
  },
  hashtagContainer: {
    flexDirection: 'row',
    alignContent: 'flex-start',
    justifyContent: 'flex-start',
  },
  continueIcon: {
    marginTop: 13.5,
  },
  reactionsContainer: {
    flexDirection: 'row',
    alignContent: 'center',
    justifyContent: 'space-between',
    padding: 40,
  },
  reactions: {
    marginRight: 7,
    marginTop: 5,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.32,
    shadowRadius: 2,
  },
  reactText: {
    flexDirection: 'row',
    alignContent: 'center',
    justifyContent: 'center',
  },
})

export default storyStyles
