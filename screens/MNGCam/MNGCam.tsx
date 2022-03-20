import {useNavigation} from '@react-navigation/native'
import React, {FunctionComponent, useEffect, useRef, useState} from 'react'
import {
  FlatList,
  Image,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
} from 'react-native'
import {SafeAreaView} from 'react-native-safe-area-context'
import {useNavigationProp} from '../../App'
import {Colors, Fonts, images, Sizes, icons} from '../../constants'
import {
  arsNumType,
  studioArsNum,
  studioArsNumType,
} from '../../constants/phoneNumbers'
import RenderNumberLists from './RenderNumberLists'
import RenderStudioLists from './RenderStudioLists'

const styles = StyleSheet.create({
  mainCT: {
    flex: 1,
    backgroundColor: Colors.white,
  },
  titleTxt: {
    marginTop: Sizes.radius,
    marginHorizontal: Sizes.padding,
    ...Fonts.largeTitleBold,
  },
  topFLView: {
    height: 260,
    marginTop: Sizes.radius,
  },
  bttmFLCT: {
    flex: 1,
    flexDirection: 'row',
    marginTop: Sizes.padding,
    borderTopRightRadius: 30,
    borderTopLeftRadius: 30,
    backgroundColor: Colors.white,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 10,
    },
    shadowOpacity: 0.43,
    shadowRadius: 9.51,

    elevation: 15,
  },
  bttmLftView: {
    width: 70,
    marginLeft: Sizes.base,
  },
  bttmLftImg: {
    width: '100%',
    height: '100%',
  },
  bttmRgtView: {
    flex: 1,
    paddingBottom: Sizes.padding,
  },
})

export const MNGCam: FunctionComponent = () => {
  const flatListRef = useRef<FlatList>(null)

  const navigation = useNavigation<useNavigationProp>()

  const [studio, setStudio] = useState<studioArsNumType[]>([
    {
      id: 1,
      name: 'NS-1',
      description: 'NS1 PD call, 생방송 제작 오디오(n-1) 모니터링용 ARS',
      img: images.mapPin,
      arsNumRpt: [
        {
          id: 1,
          name: '# PGM( N-1 ) #',
          number: '02-6099-7993',
          img: icons.Nmns1,
          description:
            '방송 Audio (앵커 소리 포함, 참여 기자 목소리 제외, 피디콜 제외). 일반적 참여 용도',
        },
        {
          id: 2,
          name: 'PGM(N-1) & 피디콜',
          number: '02-6099-7997',
          img: icons.Nmns1PDcall,
          description:
            '방송 Audio (앵커 소리 포함, 참여 기자 목소리 제외) & 피디콜 통합 청취',
        },
        {
          id: 3,
          name: '1TV OnAir',
          number: '02-6099-7991',
          img: icons.TV,
          description: '1TV OnAir (참여 시, 기자 목소리 메아리 침). 비상용',
        },
        {
          id: 4,
          name: '2TV OnAir',
          number: '02-6099-7992',
          img: icons.TV,
          description: '2TV OnAir (참여 시, 기자 목소리 메아리 침). 비상용',
        },
      ],
      arsNumCam: [
        {
          id: 1,
          name: '# 피디콜 Only #',
          number: '02-6099-7994',
          img: icons.PDcall,
          description: '부조 피디의 콜만 듣고 싶을 때 사용. 일반적 참여 용도',
        },
        {
          id: 2,
          name: 'PGM(N-1) & 피디콜',
          number: '02-6099-7997',
          img: icons.Nmns1PDcall,
          description:
            '방송 Audio (앵커 소리 포함, 참여 기자 목소리 제외) & 피디콜 통합 청취. 비상용',
        },
        {
          id: 3,
          name: '1TV OnAir',
          number: '02-6099-7991',
          img: icons.TV,
          description: '1TV OnAir (참여 시, 기자 목소리 메아리 침). 비상용',
        },
        {
          id: 4,
          name: '2TV OnAir',
          number: '02-6099-7992',
          img: icons.TV,
          description: '2TV OnAir (참여 시, 기자 목소리 메아리 침). 비상용',
        },
      ],
      bgColor: Colors.NS1,
      type: 'TELEVISION',
      studio: 'NS - 1',
      price: 'MNG',
      sizes: [],
    },
  ])

  const [telNums, setTelNums] = useState<arsNumType[]>([
    {
      id: 1,
      name: 'PDcall',
      number: '02-6099-7994',
      img: images.nikeMetcon5Black,
      description: '스튜디오 진행PD 목소리만 듣기용',
    },
    {
      id: 2,
      name: 'PD + (부조N-1)',
      number: '02-6099-7997',
      img: images.nikePegasus36,
      description:
        'PD call과 부조진행음 함께듣기(방송참여 기자의 목소리도 함께 듣기)',
    },
    {
      id: 3,
      name: '1tv',
      number: '02-6099-7991',
      img: images.nikeMetcon5Purple,
      description: '1tv 생방송 모니터링(참여기자 목소리 메아리처럼 들림)',
    },
    {
      id: 4,
      name: '2tv',
      number: '02-6099-7992',
      img: images.nikeZoomKobe1Proto,
      description: '2tv 생방송 모니터링(참여기자 목소리 메아리처럼 들림)',
    },
  ])

  //전화 flatList 바뀔때마다 제일 위로 올리기
  const setNumScrollToTop = (flatListRef: React.RefObject<FlatList<any>>) => {
    flatListRef.current?.scrollToOffset({animated: false, offset: 0})
  }

  useEffect(() => {
    const studioData = studioArsNum
    setStudio(studioData)
  }, [])

  return (
    <SafeAreaView style={{flex: 1}}>
      <View style={styles.mainCT}>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            // alignItems: 'center',
          }}>
          <Text style={styles.titleTxt}>촬영기자용 ARS</Text>
          <TouchableOpacity
            onPress={() => {
              navigation.navigate('Selections')
            }}
            style={{paddingHorizontal: Sizes.radius, marginTop: Sizes.radius}}>
            <Image
              source={icons.home}
              resizeMode="cover"
              style={{width: 25, height: 25, tintColor: Colors.gray}}
            />
          </TouchableOpacity>
        </View>

        <View>
          <FlatList
            horizontal
            showsHorizontalScrollIndicator={false}
            data={studio}
            keyExtractor={item => item.id.toString()}
            renderItem={({item, index}) => (
              <RenderStudioLists
                item={item}
                index={index}
                setList={setTelNums}
                setListToTop={setNumScrollToTop}
                flatListRef={flatListRef}
              />
            )}
            // ()가 있어야 index를 내려줄 수 있다
          />
        </View>
        <View style={styles.bttmFLCT}>
          <View style={styles.bttmLftView}>
            <Image
              source={images.recentlyViewedLabel}
              resizeMode="contain"
              style={styles.bttmLftImg}
            />
          </View>
          <View style={styles.bttmRgtView}>
            <FlatList
              ref={flatListRef}
              showsVerticalScrollIndicator={false}
              data={telNums}
              keyExtractor={item => item.id.toString()}
              renderItem={({item, index}) => (
                <RenderNumberLists item={item} index={index} />
              )}
            />
          </View>
        </View>
      </View>
    </SafeAreaView>
  )
}

// export default MNGCam
