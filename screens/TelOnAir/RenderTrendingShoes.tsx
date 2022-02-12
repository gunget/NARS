import React, {FunctionComponent} from 'react'
import {StyleSheet, Text, View, TouchableOpacity, Image} from 'react-native'
import Svg, {Polygon, Circle} from 'react-native-svg'
import {trendingType} from '../TelOnAir/TelOnAir'
import {Colors, Fonts, Sizes} from '../../constants'
import {studioTelNumType, telNumType} from '../../constants/phoneNumbers'

type propType = {
  item: studioTelNumType
  index: number
  // setItem: (item: trendingType) => void
  // showModal: (type: boolean) => void
  setList: React.Dispatch<React.SetStateAction<telNumType[]>>
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
    paddingRight: Sizes.padding,
    paddingBottom: Sizes.radius,
    elevation: -1,
  },
  boxViewImage: {
    position: 'absolute',
    top: 50,
    right: 0,
    width: '98%',
    height: 80,
    transform: [{rotate: '-15deg'}],
  },
  boxViewTxtName: {
    color: Colors.white,
    ...Fonts.body4,
  },
  boxViewTxtPrice: {
    color: Colors.white,
    ...Fonts.h3,
  },
  boxViewTxtView: {
    height: '35%',
    justifyContent: 'space-between',
  },
  mainCT_TO: {
    height: 240,
    width: 180,
    justifyContent: 'center',
    marginHorizontal: Sizes.base,
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
  },

  trendingShadow: {
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 5,
    },
    shadowOpacity: 0.29,
    shadowRadius: 4.65,

    // elevation: 7,
  },
  topTxt: {
    color: Colors.gray,
    ...Fonts.h5,
  },
})

const RenderTrendingShoes: FunctionComponent<propType> = ({
  item,
  index,
  setList,
  // setItem,
  // showModal,
}) => {
  let firstItemStyle = {}
  if (index == 0) {
    firstItemStyle = {marginLeft: Sizes.padding}
  }

  return (
    <TouchableOpacity
      style={[styles.mainCT_TO, {...firstItemStyle}]}
      onPress={() => {
        setList(item.telNumbers)
        // setItem(item)
        // showModal(true)
      }}>
      <Text style={styles.topTxt}>{item.type}</Text>
      <View
        style={[
          styles.boxView,
          styles.trendingShadow,
          {backgroundColor: item.bgColor, zIndex: 1},
        ]}>
        <View style={styles.boxViewTxtView}>
          <Text style={styles.boxViewTxtName}>{item.name}</Text>
          <Text style={styles.boxViewTxtPrice}>{item.price}</Text>
        </View>
      </View>
      <View style={styles.svgView}>
        <Svg style={styles.svg}>
          <Polygon points="0,0 160,0 160,80" fill="white" />
          {/* x,y좌표 스페이스가 점 구분기호. 최소 3개 필요 */}
          {/* <Circle
            cx="50"
            cy="50"
            r="45"
            // stroke="blue"
            strokeWidth="2.5"
            fill="white"
          /> */}
        </Svg>
      </View>
      <Image source={item.img} resizeMode="cover" style={styles.boxViewImage} />
    </TouchableOpacity>
  )
}

export default RenderTrendingShoes
