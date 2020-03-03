import React, {useState} from 'react'
import {Switch} from 'react-native'
import styles from './styles'

const Toggle = () => {
  const [toggle, setToggle] = useState(false)
  return (
  <Switch
    onValueChange={(value) => setToggle(value)}
    trackColor= {{true : "#1E6A62"}}
    style={{ transform: [{ scaleX: .7 }, { scaleY: .7 }] }}
    thumbColor="white"
    value={toggle} 
    />
  ) 
}

export default Toggle