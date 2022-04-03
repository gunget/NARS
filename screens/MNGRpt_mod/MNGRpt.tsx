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
    borderTopRightRadius: 20,
    borderTopLeftRadius: 20,
    backgroundColor: Colors.white,
    borderTopColor: Colors.lightGray,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 10,
    },
    shadowOpacity: 0.5,
    shadowRadius: 9.5,

    elevation: 15,
  },
  bttmRgtView: {
    width: 70,
    marginLeft: Sizes.base,
  },
  bttmRgtViewTxtView: {
    flex: 1,
    width: 300,
    flexDirection: 'column',
    justifyContent: 'center',
    backgroundColor: 'transparent',
  },
  bttmRgtViewTxtViewTxt: {
    letterSpacing: -1,
    opacity: 0.4,
    height: 40,
    textAlign: 'center',
    transform: [{rotate: '90deg'}, {translateY: 130}],
    ...Fonts.studioTitleBold,
  },
  bttmRgtImg: {
    width: '100%',
    height: '100%',
  },
  bttmLftView: {
    flex: 1,
    paddingTop: Sizes.radius,
    paddingBottom: Sizes.radius,
    paddingLeft: Sizes.padding,
  },
  itemSprt: {
    display: 'flex',
    width: '100%',
    paddingHorizontal: '1%',
  },
  itemSprtView: {
    height: 1,
    opacity: 0.5,
    width: '100%',
    backgroundColor: Colors.lightGray,
  },
})

export const MNGRpt: FunctionComponent = () => {
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

  const [arsNums, setArsNums] = useState<arsNumType[]>([
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
  ])

  //대표전화 studio색깔로 바꿔주기
  const [stdColor, setStdColor] = useState({color: Colors.NS1, name: 'NS-1'})

  //전화 flatList 바뀔때마다 제일 위로 올리기
  const setNumScrollToTop = (flatListRef: React.RefObject<FlatList<any>>) => {
    flatListRef.current?.scrollToOffset({animated: false, offset: 0})
  }

  //item 구분선
  const itemSeperator = () => {
    return (
      <View style={styles.itemSprt}>
        <View style={styles.itemSprtView}></View>
      </View>
    )
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
          }}>
          <Text style={styles.titleTxt}>기자용 ARS</Text>
          <TouchableOpacity
            onPress={() => {
              navigation.navigate('Selections')
            }}
            style={{paddingHorizontal: Sizes.radius, marginTop: Sizes.radius}}>
            <Image
              source={icons.arrowBack}
              resizeMode="cover"
              style={{width: 25, height: 25, tintColor: Colors.black}}
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
                setList={setArsNums}
                setListToTop={setNumScrollToTop}
                setStdColor={setStdColor}
                flatListRef={flatListRef}
              />
            )}
            // ()가 있어야 index를 내려줄 수 있다
          />
        </View>
        <View style={styles.bttmFLCT}>
          <View style={[styles.bttmLftView]}>
            <FlatList
              ref={flatListRef}
              showsVerticalScrollIndicator={false}
              data={arsNums}
              keyExtractor={item => item.id.toString()}
              ItemSeparatorComponent={itemSeperator}
              renderItem={({item, index}) => (
                <RenderNumberLists
                  item={item}
                  index={index}
                  stdColor={stdColor}
                />
              )}
            />
          </View>
          <View style={styles.bttmRgtView}>
            <View style={styles.bttmRgtViewTxtView}>
              <Text
                style={[styles.bttmRgtViewTxtViewTxt, {color: stdColor.color}]}>
                {stdColor.name} ARS AUDIO
              </Text>
            </View>
          </View>
        </View>
      </View>
    </SafeAreaView>
  )
}

// export default MNGRpt
