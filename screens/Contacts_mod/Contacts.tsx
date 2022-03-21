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

export const Contacts: FunctionComponent = () => {
  const flatListRef = useRef<FlatList>(null)

  const navigation = useNavigation<useNavigationProp>()

  const [studio, setStudio] = useState<studioTelNumType[]>([
    {
      id: 1,
      name: 'NS-1',
      description: 'NS-1 주요 연락처',
      img: images.mapPin,
      telNumbers: [
        {
          id: 1,
          name: 'NS-1 PD',
          number: '02-780-1111',
          img: icons.phoneContact,
          description: 'NS-1 PD석',
        },
        {
          id: 2,
          name: 'NS-1 영상감독',
          number: '02-780-1112',
          img: icons.phoneContact,
          description: 'NS-1 영상감독',
        },
        {
          id: 3,
          name: 'NS-1 음향감독',
          number: '02-780-1113',
          img: icons.phoneContact,
          description: 'NS-1 영상감독',
        },
      ],
      bgColor: Colors.NS1,
      type: '부조 전화',
      studio: 'NS - 1',
      price: 'TEL',
      sizes: [],
    },
  ])

  const [telNums, setTelNums] = useState<telNumType[]>([
    {
      id: 1,
      name: 'NS-1 PD',
      number: '02-780-1111',
      img: icons.phoneContact,
      description: 'NS-1 PD석',
    },
    {
      id: 2,
      name: 'NS-1 영상감독',
      number: '02-780-1112',
      img: icons.phoneContact,
      description: 'NS-1 영상감독',
    },
    {
      id: 3,
      name: 'NS-1 음향감독',
      number: '02-780-1113',
      img: icons.phoneContact,
      description: 'NS-1 영상감독',
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
          <Text style={styles.titleTxt}>부조 연락처</Text>
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
                setList={setTelNums}
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
              data={telNums}
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
                {stdColor.name} CONTACTS
              </Text>
            </View>
          </View>
        </View>
      </View>
    </SafeAreaView>
  )
}

// export default Contacts
