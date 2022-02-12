import {useNavigation} from '@react-navigation/native'
import React, {FunctionComponent, useEffect, useState} from 'react'
import {
  FlatList,
  Image,
  ImageSourcePropType,
  StyleSheet,
  Text,
  View,
  Modal,
  Alert,
  TouchableOpacity,
} from 'react-native'
import {SafeAreaView} from 'react-native-safe-area-context'
import {useNavigationProp} from '../../App'
import {Colors, Fonts, images, Sizes, icons} from '../../constants'
import {
  studioTelNum,
  studioTelNumType,
  telNumType,
} from '../../constants/phoneNumbers'
import InfoModal from './InfoModal'
import RenderRecentlyViewed from './RenderRecentlyViewed'
import RenderTrendingShoes from './RenderTrendingShoes'

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

export type trendingType = {
  id: number
  name: string
  img: ImageSourcePropType
  bgColor: string
  type: string
  price: string
  sizes: number[]
}

export type recentlyViewedType = {
  id: number
  name: string
  img: ImageSourcePropType
  bgColor: string
  type: string
  price: string
  sizes: number[]
}

export const TelOnAir: FunctionComponent = () => {
  const navigation = useNavigation<useNavigationProp>()
  // //Modal Controll
  // const [showAddToBagModal, setShowAddToBagModal] = useState<boolean>(false)
  // const [selectedItem, setSelectedItem] = useState<trendingType>()
  // const [selectedSize, setSelectedSize] = useState<number>()

  //DummyData
  const [trending, setTrending] = useState<studioTelNumType[]>([
    {
      id: 1,
      name: 'NS-1',
      description: 'N1 Studio 전화참여용 번호',
      img: images.nikeMetcon3,
      telNumbers: [
        {
          id: 1,
          name: '자동연결',
          number: '02-2070-0001',
          img: images.nikeMetconFree,
          description:
            '대표 전화번호로 이 번호로만 걸어도 NS-1에 동시연결 가능',
        },
        {
          id: 2,
          name: '전화연결2',
          number: '02-781-0001',
          img: images.nikeMetcon5Purple,
          description: '단일 전화 연결용 번호2',
        },
        {
          id: 3,
          name: '전화연결3',
          number: '02-781-0002',
          img: images.nikeZoomKobe1Proto,
          description: '단일 전화 연결용 번호3',
        },
        {
          id: 4,
          name: '전화연결4',
          number: '02-781-0003',
          img: images.nikeMetconFree,
          description: '단일 전화 연결용 번호4',
        },
      ],
      bgColor: '#BF012C',
      type: 'RUNNING',
      price: '$186',
      sizes: [6, 7, 8, 9, 10],
    },
  ])

  const [recentlyViewed, setRecentlyViewed] = useState<telNumType[]>([
    {
      id: 1,
      name: '자동연결',
      number: '02-2070-0001',
      img: images.nikeMetconFree,
      description: '대표 전화번호로 이 번호로만 걸어도 NS-1에 동시연결 가능',
    },
    {
      id: 2,
      name: '전화연결2',
      number: '02-781-0001',
      img: images.nikeMetcon5Purple,
      description: '단일 전화 연결용 번호2',
    },
    {
      id: 3,
      name: '전화연결3',
      number: '02-781-0002',
      img: images.nikeMetcon5Black,
      description: '단일 전화 연결용 번호3',
    },
    {
      id: 4,
      name: '전화연결4',
      number: '02-781-0003',
      img: images.nikeMetconFree,
      description: '단일 전화 연결용 번호4',
    },
  ])

  useEffect(() => {
    const telNum = studioTelNum
    setTrending(telNum)
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
          <Text style={styles.titleTxt}>전화참여</Text>
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
            data={trending}
            keyExtractor={item => item.id.toString()}
            renderItem={({item, index}) => (
              <RenderTrendingShoes
                item={item}
                index={index}
                // setItem={setSelectedItem}
                // showModal={setShowAddToBagModal}
                setList={setRecentlyViewed}
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
              showsVerticalScrollIndicator={false}
              data={recentlyViewed}
              keyExtractor={item => item.id.toString()}
              renderItem={({item, index}) => (
                <RenderRecentlyViewed
                  item={item}
                  index={index}
                  // setSelectedItem={setSelectedItem}
                  // setShowAddToBagModal={setShowAddToBagModal}
                />
              )}
            />
          </View>
        </View>
        {/* modal
        {selectedItem && (
          <InfoModal
            showAddToBagModal={showAddToBagModal}
            selectedItem={selectedItem}
            selectedSize={selectedSize}
            setSelectedItem={setSelectedItem}
            setSelectedSize={setSelectedSize}
            setShowAddToBagModal={setShowAddToBagModal}
          />
        )} */}
      </View>
    </SafeAreaView>
  )
}

// export default TelOnAir
