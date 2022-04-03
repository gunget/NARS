import React, {FunctionComponent} from 'react'
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image,
  FlatList,
} from 'react-native'
import Svg, {Polygon, Circle} from 'react-native-svg'
import {Colors, Fonts, Sizes} from '../../constants'
import {arsNumType, studioArsNumType} from '../../constants/phoneNumbers'

type propType = {
  item: studioArsNumType
  index: number
  setList: React.Dispatch<React.SetStateAction<arsNumType[]>>
  setStdColor: React.Dispatch<
    React.SetStateAction<{
      color: string
      name: string
    }>
  >
  setListToTop: (flatListRef: React.RefObject<FlatList<any>>) => void
  flatListRef: React.RefObject<FlatList<any>>
}

const styles = StyleSheet.create({
  boxView: {
    flex: 1,
    justifyContent: 'flex-end',
    marginTop: Sizes.base,
    borderTopLeftRadius: 10,
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10,
    marginRight: Sizes.padding,
    paddingLeft: Sizes.radius,
    paddingRight: Sizes.radius,
    paddingBottom: Sizes.radius,
    elevation: -1,
  },
  boxViewImage: {
    position: 'absolute',
    top: 20,
    left: 18,
    width: '110%',
    height: 140,
  },
  boxViewImage2: {
    position: 'absolute',
    top: 50,
    right: 0,
    ...Fonts.studioTitleBold,
    color: Colors.gray,
    transform: [{rotate: '-15deg'}],
  },
  boxViewTxtName: {
    color: Colors.white,
    ...Fonts.body4,
  },
  boxViewTxtStudio: {
    color: Colors.white,
    ...Fonts.h1,
  },
  boxViewTxtView: {
    height: '27%',
    justifyContent: 'space-between',
  },
  mainCT_TO: {
    height: 250,
    width: 180,
    justifyContent: 'center',
    marginHorizontal: Sizes.base,
    transform: [{rotate: '-7deg'}, {scale: 0.95}, {translateY: -5}],
    zIndex: 1,
    elevation: 15,
  },
  shadowBox: {
    position: 'absolute',
    top: 0,
    left: 0,
    backgroundColor: Colors.lightGray,
    opacity: 0.4,
    width: 159,
    height: 220,
    zIndex: -30,
    elevation: -30,
    transform: [{translateY: 30}, {translateX: -8}],
    borderTopLeftRadius: 15,
    borderBottomRightRadius: 10,
    borderBottomLeftRadius: 10,
  },
  svg: {
    height: '100%',
    width: '100%',
  },
  svgView: {
    position: 'absolute',
    top: 27,
    right: 0,
    width: '95%',
    height: '100%',
    elevation: 0,
  },

  trendingShadow: {
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 5,
    },
    shadowOpacity: 0.29,
    shadowRadius: 4.65,
  },
  topTxt: {
    color: Colors.gray,
    ...Fonts.h5,
    opacity: 0.8,
  },
})

const RenderStudioLists: FunctionComponent<propType> = ({
  item,
  index,
  setList,
  setStdColor,
  setListToTop,
  flatListRef,
}) => {
  let firstItemStyle = {}
  if (index == 0) {
    firstItemStyle = {marginLeft: Sizes.padding}
  }

  return (
    <TouchableOpacity
      style={[styles.mainCT_TO, {...firstItemStyle}]}
      onPress={() => {
        setList(item.arsNumRpt)
        setListToTop(flatListRef)
        setStdColor({color: item.bgColor, name: item.name})
      }}>
      <Text style={styles.topTxt}>{item.type}</Text>
      <View
        style={[styles.boxView, {backgroundColor: item.bgColor, zIndex: 0}]}>
        <View style={styles.boxViewTxtView}>
          <Text style={styles.boxViewTxtName}>{item.type}</Text>
          <Text style={styles.boxViewTxtStudio}>{item.studio}</Text>
        </View>
      </View>
      <View style={styles.svgView}>
        <Svg style={styles.svg}>
          <Polygon points="0,0 160,0 160,140 " fill="white" />
          {/* x,y좌표 스페이스가 점 구분기호. 최소 3개 필요 */}
          <Circle
            cx="100"
            cy="70"
            r="70"
            // stroke="blue"
            strokeWidth="2.5"
            fill="white"
          />
          <Circle
            cx="50"
            cy="130"
            r="10"
            // stroke="blue"
            strokeWidth="2.5"
            fill="white"
          />
        </Svg>
      </View>
      <Image
        source={item.img}
        resizeMode="contain"
        style={styles.boxViewImage}
      />
      <View style={styles.shadowBox}></View>
    </TouchableOpacity>
  )
}

export default RenderStudioLists
