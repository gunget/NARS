import React, {useRef, useState, useEffect, FunctionComponent} from 'react'
import {
  View,
  StyleSheet,
  Text,
  Animated,
  Image,
  TouchableOpacity,
  ImageSourcePropType,
} from 'react-native'
import {SafeAreaView} from 'react-native-safe-area-context'
import {Colors, Sizes, images, icons, Fonts, themes} from '../../constants'
import {LinearGradient} from 'expo-linear-gradient'
import {useNavigation} from '@react-navigation/native'
import {RootStackParamList, useNavigationProp} from '../../App'
import {selectionData} from '../../constants/phoneNumbers'

// export type dummyDataType = {
//   title: string
//   description: string
//   img: ImageSourcePropType
//   screen: string
//   // screen: keyof RootStackParamList
// }

// const selectionData: dummyDataType[] = [
//   {
//     title: '부조 전화연결',
//     description:
//       '전화연결로 생방송에 참여 시, 담당 기자가 사용하는 전화번호 모음 ',
//     img: images.selectionImg1,
//     screen: 'TelOnAir',
//   },
//   {
//     title: 'MNG - 기자용',
//     description:
//       'MNG 연결 시, ARS를 통해 기자가 앵커목소리를 듣고 싶을때 사용. (N-1)',
//     img: images.selectionImg2,
//     screen: 'MNGRpt',
//   },
//   {
//     title: 'MNG - 촬영기자용',
//     description:
//       'MNG 연결 시, ARS를 통해 촬영기자가 PD Call을 듣고 싶을때 사용 ',
//     img: images.selectionImg3,
//     screen: 'MNGCam',
//   },
// ]

export const Selections: FunctionComponent = () => {
  // const [tabSelection, setTabSelection] = useState('TelOnAir')

  const navigation = useNavigation<useNavigationProp>()

  const scrollX = useRef(new Animated.Value(0)).current

  const renderContents = () => {
    return (
      <Animated.ScrollView
        snapToInterval={themes.Sizes.width}
        horizontal
        pagingEnabled //그림이 한장씩 나오게 하기
        scrollEnabled
        decelerationRate={0} //손을 땠을때의 스크롤 감속비율
        scrollEventThrottle={16} // 스크롤할때 이벤트의 발생 빈도. 1-16. 숫자가 높을수록 이벤트 발생 수 적다.
        showsHorizontalScrollIndicator={false}
        snapToAlignment="center"
        onScroll={Animated.event(
          [{nativeEvent: {contentOffset: {x: scrollX}}}],
          {
            useNativeDriver: false,
          },
        )}>
        {/*Animated.event: 이벤트 발생시 복잡한 이벤트 객체에서 특정값만을 추출해 AnimatedValue로 할당해 줌
        여기선 Scroll이 발생했을때 X축으로 얼마나 이동했는가를 Value에 할당함 */}
        {selectionData.map((item, index) => (
          <View key={index} style={styles.pageWidthContainer}>
            <View style={styles.imageConatiner}>
              <Image
                source={item.img}
                resizeMode="cover"
                style={[styles.image]}
              />
            </View>
            <View style={styles.textContainer}>
              <Text style={styles.title}>{item.title}</Text>
              <Text style={styles.description}>{item.description}</Text>
            </View>
            <View style={[styles.btmHalfBtnCT]}>
              <TouchableOpacity
                style={[styles.btmHalfBtnView]}
                onPress={() => {
                  // setTabSelection(item.screen)
                  navigation.navigate('Tabs', {selection: item.screen})
                  // navigation.navigate(item.screen)
                }}>
                <LinearGradient
                  style={styles.btmHalfBtn}
                  colors={['#46aeff', '#5884ff']}>
                  <Text style={styles.btmHalfBtnTxt}>Connect</Text>
                </LinearGradient>
              </TouchableOpacity>
            </View>
          </View>
        ))}
      </Animated.ScrollView>
    )
  }

  const renderDots = () => {
    // lcrn11장에 다른 형태로 더 자세하게 설명되어 있음

    const dotPosition = Animated.divide(scrollX, Sizes.width) // scrollX 나누기 width
    // 첫화면 0, 두번째로 스크롤시 1, 세번째로 스크롤시 2가 됨
    return (
      <View style={styles.dotsContainer}>
        {selectionData.map((item, index) => {
          const opacity = dotPosition.interpolate({
            inputRange: [index - 1, index, index + 1], //각 컴포넌트에 맵핑되는 inputValue Range. 순서에 따라 다 달라짐
            outputRange: [0.3, 1, 0.3],
            extrapolate: 'clamp', //input값이 범위를 넘어가면 최대치에 머물러 있기
          }) //dotPositionValue가 input범위에 따라 변할때, output의 표시치를 설정해주는 방식
          const dotSize = dotPosition.interpolate({
            inputRange: [index - 1, index, index + 1],
            outputRange: [Sizes.base, 17, Sizes.base],
            extrapolate: 'clamp',
          })
          const stepOpacity = {opacity: opacity}
          const stepDotSize = {width: dotSize, height: dotSize}

          return (
            <Animated.View
              key={`dot-${index}`}
              style={[styles.dots, stepOpacity, stepDotSize]}></Animated.View>
          )
        })}
      </View>
    )
  }

  return (
    <SafeAreaView style={styles.container}>
      <View>{renderContents()}</View>
      <View style={styles.dotsRootContainer}>{renderDots()}</View>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  btmHalfBtnCT: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginBottom: '7%',
  },
  btmHalfBtn: {
    height: `100%`,
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 15,
  },
  btmHalfBtnTxt: {
    color: Colors.white,
    ...Fonts.h3,
  },
  btmHalfBtnView: {
    display: 'flex',
    marginTop: Sizes.padding,
    width: '70%',
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  button: {
    position: 'absolute',
    top: 20,
    right: 0,
    width: 150,
    height: 60,
    paddingLeft: 20,
    justifyContent: 'center',
    borderTopLeftRadius: 30,
    borderBottomLeftRadius: 30,
    backgroundColor: Colors.gray,
  },
  buttonText: {
    ...Fonts.h1,
    color: Colors.black,
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: Colors.white,
  },
  description: {
    ...Fonts.body3,
    textAlign: 'center',
    color: Colors.gray,
    marginTop: Sizes.base,
  },
  dots: {
    backgroundColor: Colors.black,
    borderRadius: Sizes.radius,
    marginHorizontal: Sizes.radius / 2,
  },
  dotsContainer: {
    flexDirection: 'row',
    height: Sizes.padding,
    alignItems: 'center',
    justifyContent: 'center',
  },
  dotsRootContainer: {
    position: 'absolute',
    top: Sizes.height > 700 ? '15%' : ' 10%',
  },
  image: {
    width: '100%',
    height: '100%',
  },
  imageConatiner: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  pageWidthContainer: {
    width: Sizes.width,
  },
  textContainer: {
    position: 'absolute',
    bottom: '15%',
    left: 40,
    right: 40,
  },
  title: {
    ...Fonts.h1, //폰트관련 설정을 한번에 하는 방식
    color: Colors.gray,
    textAlign: 'center',
  },
})
// export default Selections
