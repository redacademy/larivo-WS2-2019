import {StyleSheet} from 'react-native'

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#f1fffe',
    width: '100%',
    // padding: 14,
    marginTop: 14,
    borderRadius: 20,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.32,
    shadowRadius: 3,
    elevation: 9,
  },
  cardContainer: {    
    height: '100%',
    backgroundColor: '#fff',
    paddingHorizontal: 30,
    // paddingVertical: 15
  },
  content: {
    justifyContent: 'center',
    width: '100%',
    marginLeft: 'auto',
    marginRight: 'auto',
    paddingVertical: 10,
    paddingHorizontal: 20
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
    borderTopRightRadius: 20
  },
  initial: {
    position: 'absolute',
    left: 10,
    top: 10,
  },
  title: {
    fontSize: 20,
    color: "#13443C",
    fontFamily: "SFProText-Bold",
    marginBottom: 4
  },
  date: {
    fontSize: 15,
    color: "#13443C",
    fontFamily: "SFProText-Regular",
    marginBottom: 4
  },
  body: {
    fontSize: 17,
    color: "#13443C",
    fontFamily: "SFProText-Regular",
    marginBottom: 4
  },
  hashtagContainer: {
    flexDirection: 'row',
    alignContent: 'flex-start',
    justifyContent: 'flex-start',
  }
})

export default styles
