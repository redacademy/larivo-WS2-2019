import {StyleSheet} from 'react-native'

const styles = props =>
  StyleSheet.create({
    card: {
      backgroundColor: props.backgroundColor,
      width: '90%',
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
      marginHorizontal: 0,
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
      top: 10,
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
      marginTop: 7,
      marginLeft: props.marginLeft,
      marginBottom: props.marginBottom,
    },
    createdAt: {
      fontSize: 15,
      color: '#13443C',
      fontFamily: 'SFProText-Regular',
      marginBottom: 4,
    },
    body: {
      fontSize: 17,
      color: '#13443C',
      fontFamily: 'SFProText-Regular',
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
      alignContent: 'flex-start',
      justifyContent: 'flex-start',
    },
    reactions: {
      marginRight: 7,
      shadowColor: '#000',
      shadowOffset: {
        width: 0,
        height: 2,
      },
      shadowOpacity: 0.32,
      shadowRadius: 2,
    },
  })

export default styles
