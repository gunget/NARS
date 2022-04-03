import React, {FunctionComponent, useEffect, useState} from 'react'
import {NavigationContainer, RouteProp} from '@react-navigation/native'
import {
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
}

export type useNavigationProp = StackNavigationProp<RootStackParamList>
export type TabsRouteProp = RouteProp<RootStackParamList, 'Tabs'>

const Stack = createStackNavigator<RootStackParamList>()

// splash screen으로 띄우기

const App: FunctionComponent = () => {
  const [appIsReady, setAppIsReady] = useState(false)
  const [fontsLoaded] = useFonts({
    SDKukdaeL: require('./assets/fonts/SDKukdetopokki-aLt.otf'),
    SDKukdaeB: require('./assets/fonts/SDKukdetopokki-bBd.otf'),
    Cafe24DJ: require('./assets/fonts/Cafe24Danjunghae.ttf'),
    Cafe24Sp: require('./assets/fonts/Cafe24Simplehae.ttf'),
  })

  useEffect(() => {
    if (!fontsLoaded) {
      SplashScreen.preventAutoHideAsync()
    } else {
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
          }}
          initialRouteName={'Selections'}>
          <Stack.Screen name="Selections" component={Selections} />
          <Stack.Screen name="Tabs" component={Tabs} />
        </Stack.Navigator>
      </NavigationContainer>
    </SafeAreaProvider>
  )
}

export default App
