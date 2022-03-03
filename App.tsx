import React, {FunctionComponent, useEffect, useState, useCallback} from 'react'
import {
  NavigationContainer,
  DefaultTheme,
  RouteProp,
} from '@react-navigation/native'
import {
  // CardStyleInterpolators,
  createStackNavigator,
  StackNavigationProp,
} from '@react-navigation/stack'
import {SafeAreaProvider} from 'react-native-safe-area-context'

import {useFonts} from 'expo-font'
import * as SplashScreen from 'expo-splash-screen'

import {Selections} from './screens'
import Tabs from './navigations/tabs'

export type RootStackParamList = {
  Selections: undefined
  Tabs: {selection: string} | undefined
  // TelOnAir: undefined
  // MNGRpt: undefined
  // MNGCam: undefined
}

export type useNavigationProp = StackNavigationProp<RootStackParamList>
export type TabsRouteProp = RouteProp<RootStackParamList, 'Tabs'>

const Stack = createStackNavigator<RootStackParamList>()

//Splash Screen 제어하지 않고 앱띄우기
// const App: FunctionComponent = () => {
//   const [fontsLoaded] = useFonts({
//     'Roboto-Black': require('./assets/fonts/Roboto-Black.ttf'),
//     'Roboto-Bold': require('./assets/fonts/Roboto-Bold.ttf'),
//     'Roboto-Regular': require('./assets/fonts/Roboto-Regular.ttf'),
//     'CarmenSans-Thin': require('./assets/fonts/CarmenSans-Thin.otf'),
//     'CarmenSans-SemiBold': require('./assets/fonts/CarmenSans-SemiBold.otf'),
//     'CarmenSans-Regular': require('./assets/fonts/CarmenSans-Regular.otf'),
//   })

//   if (!fontsLoaded) {
//     return null
//   }

//   return (
//     <SafeAreaProvider>
//       <NavigationContainer>
//         <Stack.Navigator
//           screenOptions={{
//             headerShown: false,
//           }}
//           initialRouteName={'Selections'}>
//           <Stack.Screen name="Selections" component={Selections} />
//           <Stack.Screen name="Tabs" component={Tabs} />
//           {/* <Stack.Screen name="TelOnAir" component={TelOnAir} />
//           <Stack.Screen name="MNGRpt" component={MNGRpt} />
//           <Stack.Screen name="MNGCam" component={MNGCam} /> */}
//         </Stack.Navigator>
//       </NavigationContainer>
//     </SafeAreaProvider>
//   )
// }

// export default App

// splash screen으로 띄우기

const App: FunctionComponent = () => {
  const [appIsReady, setAppIsReady] = useState(false)
  const [fontsLoaded] = useFonts({
    GodoM: require('./assets/fonts/GodoM.otf'),
    GodoB: require('./assets/fonts/GodoB.otf'),
    GodoR: require('./assets/fonts/GodoM.otf'),
    SDKukdaeL: require('./assets/fonts/SDKukdetopokki-aLt.otf'),
    SDKukdaeB: require('./assets/fonts/SDKukdetopokki-bBd.otf'),
    Cafe24DJ: require('./assets/fonts/Cafe24Danjunghae.ttf'),
    Cafe24Sp: require('./assets/fonts/Cafe24Simplehae.ttf'),
  })

  useEffect(() => {
    if (!fontsLoaded) {
      SplashScreen.preventAutoHideAsync()
    } else {
      // setTimeout(() => {
      //   SplashScreen.hideAsync()
      // }, 2000)
      SplashScreen.hideAsync()
      setAppIsReady(true)
    }
  }, [fontsLoaded])

  if (!appIsReady) {
    return null
  }

  return (
    <SafeAreaProvider>
      <NavigationContainer>
        <Stack.Navigator
          screenOptions={{
            headerShown: false,
            // gestureDirection: 'horizontal',
            // cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
          }}
          initialRouteName={'Selections'}>
          <Stack.Screen name="Selections" component={Selections} />
          <Stack.Screen name="Tabs" component={Tabs} />
          {/* <Stack.Screen name="TelOnAir" component={TelOnAir} />
          <Stack.Screen name="MNGRpt" component={MNGRpt} />
          <Stack.Screen name="MNGCam" component={MNGCam} /> */}
        </Stack.Navigator>
      </NavigationContainer>
    </SafeAreaProvider>
  )
}

export default App
