import {useNavigation} from '@react-navigation/native'
import React, {FunctionComponent, useState} from 'react'
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
  //Modal Controll
  const [showAddToBagModal, setShowAddToBagModal] = useState<boolean>(false)
  const [selectedItem, setSelectedItem] = useState<trendingType>()
  const [selectedSize, setSelectedSize] = useState<number>()

  //DummyData
  const [trending, setTrending] = useState<trendingType[]>([
    {
      id: 0,
      name: 'Nike Air Zoom Pegasus 36',
      img: images.nikePegasus36,
      bgColor: '#BF012C',
      type: 'RUNNING',
      price: '$186',
      sizes: [6, 7, 8, 9, 10],
    },
    {
      id: 1,
      name: 'Nike Metcon 5',
      img: images.nikeMetcon5Black,
      bgColor: '#D39C67',
      type: 'TRAINING',
      price: '$135',
      sizes: [6, 7, 8, 9, 10, 11, 12],
    },
    {
      id: 2,
      name: 'Nike Air Zoom Kobe 1 Proto',
      img: images.nikeZoomKobe1Proto,
      bgColor: '#7052A0',
      type: 'BASKETBALL',
      price: '$199',
      sizes: [6, 7, 8, 9],
    },
    {
      id: 3,
      name: 'Nike Air Zoom Pegasus 36',
      img: images.nikePegasus36,
      bgColor: '#BF012C',
      type: 'RUNNING',
      price: '$186',
      sizes: [6, 7, 8, 9, 10],
    },
    {
      id: 4,
      name: 'Nike Metcon 5',
      img: images.nikeMetcon5Black,
      bgColor: '#D39C67',
      type: 'TRAINING',
      price: '$135',
      sizes: [6, 7, 8, 9, 10, 11, 12],
    },
  ])

  const [recentlyViewed, setRecentlyViewed] = useState<recentlyViewedType[]>([
    {
      id: 0,
      name: 'Nike Metcon 4',
      img: images.nikeMetcon4,
      bgColor: '#414045',
      type: 'TRAINING',
      price: '$119',
      sizes: [6, 7, 8],
    },
    {
      id: 1,
      name: 'Nike Metcon 6',
      img: images.nikeMetcon6,
      bgColor: '#4EABA6',
      type: 'TRAINING',
      price: '$135',
      sizes: [6, 7, 8, 9, 10, 11],
    },
    {
      id: 2,
      name: 'Nike Metcon 5',
      img: images.nikeMetcon5Purple,
      bgColor: '#2B4660',
      type: 'TRAINING',
      price: '$124',
      sizes: [6, 7, 8, 9],
    },
    {
      id: 3,
      name: 'Nike Metcon 3',
      img: images.nikeMetcon3,
      bgColor: '#A69285',
      type: 'TRAINING',
      price: '$99',
      sizes: [6, 7, 8, 9, 10, 11, 12, 13],
    },
    {
      id: 4,
      name: 'Nike Metcon Free',
      img: images.nikeMetconFree,
      bgColor: '#A02E41',
      type: 'TRAINING',
      price: '$108',
      sizes: [6, 7, 8, 9, 10, 11],
    },
  ])

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
                setItem={setSelectedItem}
                showModal={setShowAddToBagModal}
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
                  setSelectedItem={setSelectedItem}
                  setShowAddToBagModal={setShowAddToBagModal}
                />
              )}
            />
          </View>
        </View>
        {/* modal */}
        {selectedItem && (
          <InfoModal
            showAddToBagModal={showAddToBagModal}
            selectedItem={selectedItem}
            selectedSize={selectedSize}
            setSelectedItem={setSelectedItem}
            setSelectedSize={setSelectedSize}
            setShowAddToBagModal={setShowAddToBagModal}
          />
        )}
      </View>
    </SafeAreaView>
  )
}

// export default TelOnAir
