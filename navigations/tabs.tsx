import React, {FunctionComponent} from 'react'
import {ImageSourcePropType, Image} from 'react-native'
import type {RouteProp, ParamListBase} from '@react-navigation/native'
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs'
import {Colors, icons} from '../constants'
import {TelOnAir, MNGRpt, MNGCam} from '../screens'

type routeProp = {route: RouteProp<ParamListBase, string>}
type TabBarIconProps = {focused: boolean; color: string; size: number}

const iconsArray: Record<string, ImageSourcePropType> = {
  //Record오브젝트 type. 키와 Props의 타입을 동시에 지정
  TelOnAir: icons.dashboard_icon,
  MNGRpt: icons.search_icon,
  MNGCam: icons.notification_icon,
}

const Tab = createBottomTabNavigator()
const groupOptions = ({route}: routeProp) => ({
  headerShown: false, //각 탭의 헤더 없애기
  tabBarShowLabel: false, //하단 탭이름 없애기
  tabBarStyle: {
    height: '9%',
    backgroundColor: Colors.gray,
  },
  tabBarIcon: ({focused, color, size}: TabBarIconProps) => {
    const {name} = route //Tab.screens에 설정한 이름이 옴. 각 스크린마다 한번씩 오게 됨
    const focusedSize = focused ? 5 : 0
    const tintColor = focused ? Colors.white : Colors.lightGray
    const icon = iconsArray[name] //destructive를 사용해 해당 key로 value를 동시에 선언하기
    return (
      <Image
        source={icon}
        resizeMode="contain"
        style={{
          tintColor: tintColor,
          width: 20 + focusedSize, //선택한 아이콘 커지게
          height: 20 + focusedSize,
        }}
      />
    )
  },
})

const Tabs: FunctionComponent = () => {
  return (
    <Tab.Navigator screenOptions={groupOptions}>
      <Tab.Screen name="TelOnAir" component={TelOnAir} />
      <Tab.Screen name="MNGRpt" component={MNGRpt} />
      <Tab.Screen name="MNGCam" component={MNGCam} />
    </Tab.Navigator>
  )
}

export default Tabs
