import {StyleSheet} from 'react-native'

const styles = StyleSheet.create({
  hashtagsBox: {
    borderWidth: 1,
    borderColor: 'rgba(0,0,0,0.3)',
    alignItems: 'center',
    justifyContent: 'center',
    marginVertical: 5,
    marginHorizontal: 5,
    backgroundColor: '#ffff',
    borderRadius: 50,
  },
  hashtagsBoxPressed: {
    borderWidth: 1,
    borderColor: 'rgba(0,0,0,0.3)',
    alignItems: 'center',
    justifyContent: 'center',
    marginVertical: 5,
    marginHorizontal: 5,
    backgroundColor: '#1e6a62',
    borderRadius: 50,
  },
  hashtagsText: {
    color: '#1e6a62',
    fontWeight: '500',
    paddingVertical: 5,
    paddingHorizontal: 8,
    fontFamily: 'SFProText-Regular',
  },
  hashtagsTextPressed: {
    color: '#ffff',
    fontWeight: '500',
    paddingVertical: 5,
    paddingHorizontal: 8,
    fontFamily: 'SFProText-Regular',
  },
})

export default styles
