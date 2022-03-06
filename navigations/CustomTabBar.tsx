import {BottomTabBar, BottomTabBarProps} from '@react-navigation/bottom-tabs'
import React, {FunctionComponent} from 'react'
import {View} from 'react-native'
import {isIphoneX} from 'react-native-iphone-x-helper'

type propType = {
  props: BottomTabBarProps
}

//IphoneX이후 버전에서 하단 바 없어져서 생기는 bottom Tab navigaiton의 여백을 매우기 위한 용도
const CustomTabBar: FunctionComponent<propType> = ({props}) => {
  const tabBar = isIphoneX() ? (
    <View>
      <BottomTabBar {...props} />
      {/* 아래View는 제일 밑에 빈공간을 채워주는 용도 */}
      <View
        style={{
          position: 'absolute',
          bottom: 0,
          left: 0,
          right: 0,
          height: 30,
          backgroundColor: 'transparent',
        }}></View>
    </View>
  ) : (
    <BottomTabBar {...props} />
  )
  return tabBar
}

export default CustomTabBar
