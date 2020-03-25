import {StyleSheet} from 'react-native'

const styles = StyleSheet.create({
  settings_container: {
    padding: 40,
    height: '100%',
    width: '100%',
    backgroundColor: 'white',
    justifyContent: 'space-between',
    alignItems: 'stretch',
  },
  settings_contentContainer: {
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  settings_leftArrow: {
    position: 'absolute',
    marginTop: 40,
    marginLeft: 30,
    zIndex: 10,
  },
  settings_title: {
    fontFamily: 'SFProText-Bold',
    fontSize: 20,
    color: '#1E6A62',
    marginBottom: 40,
    marginTop: 5,
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
    paddingRight: 30,
  },
  w_100: {
    width: '100%',
  },
  settings_itemRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  settings_items_Text_Icon: {
    flexDirection: 'row',
  },
  settings_itemText: {
    fontFamily: 'SFProText-Medium',
    fontSize: 16,
    color: '#1E6A62',
    marginLeft: 20,
  },
  settings_nextIcon: {
    marginTop: 5,
  },
  setting_logout: {
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    marginBottom: 100,
  },
  setting_logoutBtn: {
    width: '90%',
  },
  setting_delText: {
    fontFamily: 'SFProText-Light',
    textAlign: 'center',
    fontSize: 20,
    color: '#1E6A62',
    marginTop: 20,
  },
  setting_changeUserText: {
    fontFamily: 'SFProText-Light',
    marginBottom: 10,
    fontSize: 20,
    color: '#1E6A62',
  },
})
export default styles
