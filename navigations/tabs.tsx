import React, {FunctionComponent} from 'react'
import {ImageSourcePropType, Image} from 'react-native'
import type {RouteProp, ParamListBase} from '@react-navigation/native'
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs'
import {Colors, icons} from '../constants'
import {TelOnAir, MNGRpt, MNGCam, CopyRight, Contacts} from '../screens'
import {TabsRouteProp} from '../App'
import CustomTabBar from './CustomTabBar'
import {isIphoneX} from 'react-native-iphone-x-helper'

//stack navigator에서 route간 데이터 전달을 위한 route
type propType = {route: TabsRouteProp}

//bottom-tab navigator에서 route간 이동을 위한 route
type routeProp = {route: RouteProp<ParamListBase, string>}

type TabBarIconProps = {focused: boolean; color: string; size: number}

const iconsArray: Record<string, ImageSourcePropType> = {
  //Record오브젝트 type. 키와 Props의 타입을 동시에 지정
  MNGRpt: icons.mngRpt,
  MNGCam: icons.mngCam,
  TelOnAir: icons.phoneFill,
  Contacts: icons.phoneNrm,
  CopyRight: icons.more_icon,
}

const Tab = createBottomTabNavigator()

const Tabs: FunctionComponent<propType> = ({route}) => {
  const tabSelections = route.params?.selection
  return (
    <Tab.Navigator
      screenOptions={({route}: routeProp) => ({
        headerShown: false, //각 탭의 헤더 없애기
        tabBarShowLabel: false, //하단 탭이름 없애기
        tabBarStyle: {
          position: isIphoneX() ? 'absolute' : 'relative', //이걸 하지 않으면 iphoneX이상 버전에서 탭바가 정상적으로 표현되지 않는다.
          left: 0,
          bottom: 0,
          right: 0,
          borderTopWidth: 0.3,
          paddingTop: isIphoneX() ? 8 : 0,
          backgroundColor: Colors.white,
          elevation: 0, //이게 없으면 shadow잔상이 남는다.
          borderTopColor: Colors.lightGray,
        },
        tabBarIcon: ({focused, color, size}: TabBarIconProps) => {
          const {name} = route //Tab.screens에 설정한 이름이 옴. 각 스크린마다 한번씩 오게 됨
          const focusedSize = focused ? 1 : 0
          const tintColor = focused ? Colors.black : Colors.lightGray
          const icon = iconsArray[name] //destructive를 사용해 해당 key로 value를 동시에 선언하기
          return (
            <Image
              source={icon}
              resizeMode="contain"
              style={{
                tintColor: tintColor,
                width: 28 + focusedSize, //선택한 아이콘 커지게
                height: 28 + focusedSize,
              }}
            />
          )
        },
      })}
      initialRouteName={`${tabSelections}`}
      tabBar={props => <CustomTabBar props={props} />}>
      {/* iphoneX 하단바 없어지며 생기는 여백문제 해결위해 커스텀 탭바 도입 */}
      <Tab.Screen name="MNGRpt" component={MNGRpt} />
      <Tab.Screen name="MNGCam" component={MNGCam} />
      <Tab.Screen name="TelOnAir" component={TelOnAir} />
      <Tab.Screen name="Contacts" component={Contacts} />
      <Tab.Screen name="CopyRight" component={CopyRight} />
    </Tab.Navigator>
  )
}

export default Tabs
