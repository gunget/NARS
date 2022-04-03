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
  },
  lftImgView: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  rgtTxtTitle: {
    color: Colors.black,
    ...Fonts.h3T2,
    marginBottom: 5,
  },
  rgtTxtDetail: {
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
            {tintColor: index == 0 ? stdColor.color : Colors.darkBlue2},
          ]}
        />
      </View>
      <View style={styles.rgtTxtView}>
        <Text
          style={[
            styles.rgtTxtTitle,
            {color: index == 0 ? stdColor.color : Colors.darkBlue2},
          ]}>
          {item.name}
        </Text>
        <Text
          style={[
            styles.rgtTxtDetail,
            {color: index == 0 ? stdColor.color : Colors.darkBlue2},
          ]}>
          {item.description}
        </Text>
      </View>
    </TouchableOpacity>
  )
}

export default RenderNumberLists
