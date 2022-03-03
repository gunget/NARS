import React, {FunctionComponent} from 'react'
import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native'
import {Colors, Fonts, Sizes} from '../../constants'
import {telNumType} from '../../constants/phoneNumbers'
import * as Linking from 'expo-linking'

type propType = {
  item: telNumType
  index: number
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
    ...Fonts.body4,
  },
  rgtTxtView: {
    flex: 1.5,
    marginLeft: Sizes.radius,
    justifyContent: 'center',
  },
})

const RenderNumberLists: FunctionComponent<propType> = ({item, index}) => {
  return (
    <TouchableOpacity
      style={styles.mainCT_TO}
      onPress={() => {
        Linking.openURL(`tel:${item.number}`)
      }}>
      <View style={styles.lftImgView}>
        <Image source={item.img} resizeMode="contain" style={styles.lftImg} />
      </View>
      <View style={styles.rgtTxtView}>
        <Text style={styles.rgtTxtBody}>{item.name}</Text>
        <Text style={styles.rgtTxtPrice}>{item.description}</Text>
      </View>
    </TouchableOpacity>
  )
}

export default RenderNumberLists
