import React, {FunctionComponent} from 'react'
import {Text, View, StyleSheet, ImageBackground, FlatList} from 'react-native'
import {SafeAreaView} from 'react-native-safe-area-context'
import {Colors, Fonts, images, Sizes} from '../../constants'
import {copyRight, copyRightDataType} from '../../constants/phoneNumbers'

const styles = StyleSheet.create({
  backgroundImage: {
    width: Sizes.width,
    height: Sizes.height,
  },
  itemCT: {
    width: '100%',
    marginBottom: 20,
    backgroundColor: Colors.white,
    borderTopEndRadius: 15,
    borderBottomLeftRadius: 15,
  },
  itemView: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    // padding: 15,
    borderTopRightRadius: 30,
    borderBottomLeftRadius: 30,
  },
  leftImg: {
    height: 40,
    width: 40,
  },
  leftImgVw: {
    flex: 1,
    backgroundColor: Colors.white,
    alignItems: 'center',
    paddingTop: 5,
    borderTopRightRadius: 15,
    borderBottomLeftRadius: 15,
  },
  mainCT: {
    flex: 1,
    marginHorizontal: '7%',
    marginVertical: '5%',
    marginBottom: 70,
  },
  rightTxtVw: {flex: 4, padding: 15},
  rightTxtVwTxtNm: {
    ...Fonts.h2,
    textDecorationLine: 'underline',
  },
  rightTxtVwTxtSrc: {...Fonts.body3},
  rightTxtVwTxtOnr: {...Fonts.body3},
  titleTxt: {
    ...Fonts.h1,
    // textDecorationLine: 'underline',
  },
  titleTxtBody: {
    ...Fonts.body4,
  },
  titleTxtVw: {
    paddingTop: 20,
    paddingLeft: 30,
  },
})

export const CopyRight: FunctionComponent = () => {
  const renderItems = ({item}: {item: copyRightDataType}) => {
    return (
      <View style={styles.itemCT}>
        <View style={[styles.itemView]}>
          <View
            style={[
              styles.leftImgVw,
              {backgroundColor: item.color ? item.color : Colors.white},
            ]}></View>
          <View style={styles.rightTxtVw}>
            <Text
              style={[
                styles.rightTxtVwTxtNm,
                {color: item.color ? item.color : Colors.black},
              ]}>
              {item.name}
            </Text>
            <Text style={styles.rightTxtVwTxtSrc}>Source : {item.source}</Text>
            <Text style={styles.rightTxtVwTxtOnr}>Creator : {item.owner}</Text>
          </View>
        </View>
      </View>
    )
  }
  return (
    <SafeAreaView>
      <ImageBackground
        source={images.splashScreen}
        style={[styles.backgroundImage]}
        blurRadius={30}>
        <View style={styles.titleTxtVw}>
          <Text style={styles.titleTxt}>Resource</Text>
          <Text style={styles.titleTxtBody}>
            All resources have come from the following sites
          </Text>
        </View>
        <View style={styles.mainCT}>
          <FlatList
            data={copyRight}
            keyExtractor={item => item.id.toString()}
            renderItem={renderItems}
          />
        </View>
      </ImageBackground>
    </SafeAreaView>
  )
}

// export default CopyRight
