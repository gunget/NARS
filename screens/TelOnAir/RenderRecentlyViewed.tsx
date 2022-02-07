import React, {FunctionComponent} from 'react'
import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native'
import {recentlyViewedType, trendingType} from '../TelOnAir/TelOnAir'
import {Colors, Fonts, Sizes} from '../../constants'

type propType = {
  item: recentlyViewedType
  index: number
  setSelectedItem: (item: trendingType | undefined) => void
  setShowAddToBagModal: (type: boolean) => void
}

const styles = StyleSheet.create({
  mainCT_TO: {
    flex: 1,
    flexDirection: 'row',
  },
  lftImg: {
    width: 130,
    height: 85,
  },
  lftImgView: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  rgtTxtBody: {
    color: Colors.gray,
    ...Fonts.body3,
  },
  rgtTxtPrice: {
    ...Fonts.h3,
  },
  rgtTxtView: {
    flex: 1.5,
    marginLeft: Sizes.radius,
    justifyContent: 'center',
  },
})

const RenderRecentlyViewed: FunctionComponent<propType> = ({
  item,
  index,
  setSelectedItem,
  setShowAddToBagModal,
}) => {
  return (
    <TouchableOpacity
      style={styles.mainCT_TO}
      onPress={() => {
        setSelectedItem(item)
        setShowAddToBagModal(true)
      }}>
      <View style={styles.lftImgView}>
        <Image source={item.img} resizeMode="contain" style={styles.lftImg} />
      </View>
      <View style={styles.rgtTxtView}>
        <Text style={styles.rgtTxtBody}>{item.name}</Text>
        <Text style={styles.rgtTxtPrice}>{item.price}</Text>
      </View>
    </TouchableOpacity>
  )
}

export default RenderRecentlyViewed
