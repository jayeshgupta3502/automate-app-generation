import { View, Text } from 'react-native'
import React from 'react'

const sample = () => {
    useEffect(() => {
      console.log("Hiii Jayesh")
    }, [])
    

  return (
    <View>
      <Text>sample</Text>
    </View>
  )
}

export default sample;