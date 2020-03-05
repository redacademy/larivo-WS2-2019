import {StyleSheet} from 'react-native'

const styles = props =>
  StyleSheet.create({
    button: {
      alignItems: 'center',
      justifyContent: 'center',
      height: 44,
      minWidth: 150,
      paddingHorizontal: 20,
      borderRadius: 20.75,
      backgroundColor: props.backgroundColor,
      shadowOpacity: 0.75,
      shadowRadius: 5,
      shadowColor: 'rgba(0,0,0,0.25)',
      shadowOffset: {height: 2, width: 2},
      marginTop: 25,
    },
    text: {
      fontSize: 16,
      color: props.color,
      fontWeight: '300',
      fontFamily: 'SFProText-Light',
    },
    disabledBtn: {
      alignItems: 'center',
      justifyContent: 'center',
      height: 44,
      opacity: 0.4,
      minWidth: 150,
      paddingHorizontal: 20,
      borderRadius: 20.75,
      backgroundColor: '#1E6A62',
      shadowOpacity: 0.75,
      shadowRadius: 5,
      shadowColor: 'rgba(0,0,0,0.25)',
      shadowOffset: {height: 2, width: 2},
      marginTop: 25,
    },
    disabledText: {
      fontSize: 16,
      color: '#F1FFFE',
      fontWeight: '300',
      fontFamily: 'SFProText-Light',
    },
  })

export default styles
