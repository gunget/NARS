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
  studioConNum,
  studioTelNumType,
  telNumType,
} from '../../constants/phoneNumbers'
import {RenderNumberLists} from './RenderNumberLists'
import {RenderStudioLists} from './RenderStudioLists'

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

export const Contacts: FunctionComponent = () => {
  const flatListRef = useRef<FlatList>(null)

  const navigation = useNavigation<useNavigationProp>()

  const [studio, setStudio] = useState<studioTelNumType[]>([
    {
      id: 1,
      name: 'NDC',
      description: 'NDC(MNG수신기 위치) 연락처',
      img: images.nikeMetcon3,
      telNumbers: [
        {
          id: 1,
          name: 'NDC TD1',
          number: '02-780-1111',
          img: images.nikeMetcon3,
          description: 'NDC 기술감독',
        },
        {
          id: 2,
          name: 'NDC TD2',
          number: '02-780-1111',
          img: images.nikeMetconFree,
          description: 'NDC 기술감독',
        },
      ],
      bgColor: '#BF012C',
      type: 'RUNNING',
      price: '$186',
      sizes: [6, 7, 8, 9, 10],
    },
  ])

  const [telNums, setTelNums] = useState<telNumType[]>([
    {
      id: 1,
      name: 'NDC TD1',
      number: '02-780-1111',
      img: images.nikeMetcon3,
      description: 'NDC 기술감독',
    },
    {
      id: 2,
      name: 'NDC TD2',
      number: '02-780-1111',
      img: images.nikeMetconFree,
      description: 'NDC 기술감독',
    },
  ])

  //전화 flatList 바뀔때마다 제일 위로 올리기
  const setNumScrollToTop = (flatListRef: React.RefObject<FlatList<any>>) => {
    flatListRef.current?.scrollToOffset({animated: false, offset: 0})
  }

  useEffect(() => {
    const studioData = studioConNum
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
          <Text style={styles.titleTxt}>주요 연락처</Text>
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

// export default Contacts
