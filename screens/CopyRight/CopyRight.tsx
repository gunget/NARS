import React, {FunctionComponent} from 'react'
import {Text, View} from 'react-native'
import {SafeAreaView} from 'react-native-safe-area-context'
import {Fonts} from '../../constants'

export const CopyRight: FunctionComponent = () => {
  return (
    <SafeAreaView>
      <Text style={{...Fonts.h1}}>CopyRight Page</Text>
    </SafeAreaView>
  )
}

// export default CopyRight
