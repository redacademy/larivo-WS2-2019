import {StyleSheet} from 'react-native'

const styles = StyleSheet.create({
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
    // fontFamily: 'SFProText-Medium',
    fontSize: 16,
    color: '#1E6A62',
    marginLeft: 20
  },
  settings_nextIcon: {
    marginTop: 5
  }
})

export default styles
