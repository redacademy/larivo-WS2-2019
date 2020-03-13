import {useState, useEffect} from 'react'
import AsyncStorage from '@react-native-community/async-storage'

const useAsyncStorage = key => {
  const [value, setValue] = useState()

  useEffect(() => {
    async function getLocalVal() {
      try {
        const returnedVal = await AsyncStorage.getItem(key)
        setValue(JSON.parse(returnedVal))
      } catch (e) {
        console.error(e)
      }
    }
    getLocalVal()
  }, [setValue, key])

  const set = async newVal => {
    try {
      const returnedVal = await AsyncStorage.setItem(
        key,
        JSON.stringify(newVal),
      )
      setValue(returnedVal)
      return returnedVal
    } catch (e) {
      console.error(e)
    }
  }
  return [value, set]
}

export default useAsyncStorage
