import {StyleSheet} from 'react-native'

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#03dac4',
    width: '100%',
  },
  listView: {
    backgroundColor: 'white',
    minHeight: '100%'
  },
  cardContainer:{
    flex: 1,
    backgroundColor: 'white',
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingVertical: 8,
    width: "100%"
  },
  content: {
    justifyContent: 'center',
    width: '100%',
    marginLeft: 'auto',
    marginRight: 'auto',
  },
  searchBox: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  slidesContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 20,
    width: '100%',
  },
  hashtagContainer: {
    flexDirection: 'row',
    alignContent: 'flex-start',
    justifyContent: 'flex-start',
  },
  featuredText : {
    fontSize: 40,
    fontWeight: 'bold',
    fontFamily: 'Asap-BoldItalic',
    color: '#13443C',
    paddingTop: 10,
    paddingLeft: 30,
  },
  ScrollView: {
    // paddingBottom: 20
  },
  featuredCardContainer: {
    width: 350,
    marginBottom: 10,
    marginRight: -15
  },
  userCardContainer: {
    width: "110%",
    // marginBottom: 10,
    paddingHorizontal: 25,
    paddingTop: 10,
    alignItems: 'stretch',
    backgroundColor: '#f1fffe'
  },
  
})

export default styles
