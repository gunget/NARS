import React, {FunctionComponent} from 'react'
import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native'
import {Colors, Fonts, Sizes} from '../../constants'
import {telNumType} from '../../constants/phoneNumbers'
import * as Linking from 'expo-linking'

type propType = {
  item: telNumType
  index: number
  stdColor: {color: string; name: string}
}

const styles = StyleSheet.create({
  mainCT_TO: {
    flex: 1,
    flexDirection: 'row',
    paddingVertical: 8,
  },
  lftImg: {
    width: 60,
    height: 85,
    // tintColor: '#D7384E',
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
    flex: 2,
    marginLeft: Sizes.radius,
    justifyContent: 'center',
  },
})

const RenderNumberLists: FunctionComponent<propType> = ({
  item,
  index,
  stdColor,
}) => {
  return (
    <TouchableOpacity
      style={styles.mainCT_TO}
      onPress={() => {
        Linking.openURL(`tel:${item.number}`)
      }}>
      <View style={styles.lftImgView}>
        <Image
          source={item.img}
          resizeMode="contain"
          style={[
            styles.lftImg,
            {tintColor: index == 0 ? stdColor.color : Colors.black},
          ]}
        />
      </View>
      <View style={styles.rgtTxtView}>
        <Text style={styles.rgtTxtBody}>{item.name}</Text>
        <Text style={styles.rgtTxtPrice}>{item.description}</Text>
      </View>
    </TouchableOpacity>
  )
}

export default RenderNumberLists
