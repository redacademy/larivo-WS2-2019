import {StyleSheet} from 'react-native'

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  content: {
    justifyContent: 'center',
    width: '90%',
    marginLeft: 'auto',
    marginRight: 'auto',
  },
  login_container: {
    backgroundColor: '#03DAC4',
    height: '100%',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  login_slidesContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 20,
    width: '100%',
    padding: 10,
  },
  login_buttons_container: {
    flexDirection: 'column',
    justifyContent: 'space-between',
    width: 214,
    marginTop: 30,
    alignItems: 'center',
    justifyContent: 'center',
  },
  login: {
    fontSize: 16,
    color: '#13443C',
    fontWeight: '600',
    textDecorationLine: 'underline',
  },
  text: {
    fontSize: 16,
    color: '#13443C',
    fontWeight: '300',
  },
  settings_container: {
    padding: 40,
    height: '100%',
    backgroundColor: "white"
  },
  settings_contentContainer: {
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  settings_leftArrow: {
    position:'absolute',
    marginTop: 40,
    marginLeft: 30,
    zIndex: 10
  },
  settings_title: {
    fontFamily: 'SFProText-Bold',
    fontSize: 20,
    color: '#1E6A62',
    marginBottom: 40
  },
  settings_itemsConstainer: {
    justifyContent: 'center',
    alignItems: 'stretch',
    height: 70,
    width: '100%',
    borderTopWidth: 0.5,
    borderBottomWidth: 0,
    borderLeftWidth: 0,
    borderRightWidth: 0,
    borderColor: '#13443C',
    paddingLeft: 30,
    paddingRight: 30
  },
  settings_itemRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  settings_items_Text_Icon: {
    flexDirection: 'row',
  },
  settings_itemText: {
    fontFamily: 'SFProText-Medium',
    fontSize: 16,
    color: '#1E6A62',
    marginLeft: 20
  },
  settings_nextIcon: {
    marginTop: 5
  }
})
export default styles
