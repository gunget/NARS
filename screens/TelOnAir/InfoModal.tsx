import React, {FunctionComponent} from 'react'
import {
  Alert,
  Button,
  Image,
  Modal,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native'
import {trendingType} from '../TelOnAir/TelOnAir'
import {Colors, Fonts, Sizes} from '../../constants'
import RenderShoeSizes from './RenderShoeSizes'

type propType = {
  showAddToBagModal: boolean
  selectedItem: trendingType
  selectedSize: number | undefined
  setSelectedItem: (item: trendingType | undefined) => void
  setSelectedSize: (size: number | undefined) => void
  setShowAddToBagModal: (type: boolean) => void
}

const styles = StyleSheet.create({
  flexCT: {
    // marginTop: '20%',
    display: 'flex',
    alignItems: 'center',
    flexDirection: 'column',
    height: '100%',
    // backgroundColor: Colors.lightGray,
  },
  blrView: {
    flex: 1,
    alignItems: 'center',
  },
  blrViewTO: {
    position: 'absolute',
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
    backgroundColor: Colors.white,
    opacity: 0.7,
  },
  bttmBtnTO: {
    width: '100%',
    height: 70,
    marginTop: Sizes.radius,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'rgba(0,0,0,0.5)',
  },
  bttmBtnTxt: {
    color: Colors.white,
    ...Fonts.largeTitleBold,
  },
  mainCT: {
    // flex: 1,
    // justifyContent: 'flex-end',
    width: '85%',
    borderBottomRightRadius: 15,
    borderBottomLeftRadius: 15,
    borderTopRightRadius: 15,
    borderTopLeftRadius: 15,
    padding: 25,
    marginTop: '35%',
  },
  img: {
    width: '100%',
    height: 170,
    transform: [{rotate: '-15deg'}],
  },
  imgCT: {
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: -Sizes.padding * 3.5,
  },
  rndrShoesCTTO: {
    width: 35,
    height: 25,
    alignItems: 'center',
    justifyContent: 'center',
    marginHorizontal: 2,
    marginBottom: 5,
    borderWidth: 1,
    borderColor: Colors.white,
    borderRadius: 5,
  },
  rndrShoesTxt: {
    ...Fonts.body4,
  },
  szPickCT: {
    flexDirection: 'row',
    marginTop: Sizes.radius,
    // marginHorizontal: Sizes.radius,
  },
  szPickItems: {
    flex: 1,
    flexWrap: 'wrap',
    flexDirection: 'row',
    marginLeft: Sizes.base,
  },
  szPickTxt: {
    color: Colors.white,
    ...Fonts.body3,
  },
  txtName: {
    marginTop: 30,
    // marginHorizontal: Sizes.padding,
    color: Colors.white,
    ...Fonts.body2,
  },
  txtPrice: {
    marginTop: Sizes.radius,
    // marginHorizontal: Sizes.padding,
    color: Colors.white,
    ...Fonts.h1,
  },
  txtType: {
    marginTop: Sizes.base / 2,
    // marginHorizontal: Sizes.padding,
    color: Colors.white,
    ...Fonts.body3,
  },
})

const InfoModal: FunctionComponent<propType> = ({
  showAddToBagModal,
  setSelectedItem,
  setSelectedSize,
  setShowAddToBagModal,
  selectedItem,
  selectedSize,
}) => {
  const shoesSizes = selectedItem.sizes.map((item, index) => {
    let itemColor =
      selectedItem.sizes[index] == selectedSize ? Colors.white : undefined
    let textColor =
      selectedItem.sizes[index] == selectedSize ? Colors.black : Colors.white
    return (
      <TouchableOpacity
        key={index}
        style={[styles.rndrShoesCTTO, {backgroundColor: itemColor}]}
        onPress={() => {
          setSelectedSize(item)
        }}>
        <Text style={[styles.rndrShoesTxt, {color: textColor}]}>{item}</Text>
      </TouchableOpacity>
    )
  })

  return (
    <Modal
      animationType="slide"
      transparent={true}
      visible={showAddToBagModal}
      onRequestClose={() => {
        Alert.alert('Modal has been closed')
      }}>
      <View style={styles.flexCT}>
        <TouchableOpacity
          style={styles.blrViewTO}
          onPress={() => {
            setSelectedItem(undefined)
            setSelectedSize(undefined)
            setShowAddToBagModal(false)
          }}></TouchableOpacity>
        <View style={[styles.mainCT, {backgroundColor: selectedItem.bgColor}]}>
          <View style={styles.imgCT}>
            <Image
              source={selectedItem.img}
              resizeMode="contain"
              style={styles.img}
            />
          </View>
          <Text style={styles.txtName}>{selectedItem.name}</Text>
          <Text style={styles.txtType}>{selectedItem.type}</Text>
          <Text style={styles.txtPrice}>{selectedItem.price}</Text>
          <View style={styles.szPickCT}>
            <View>
              <Text style={styles.szPickTxt}>Select Size</Text>
            </View>
            <View style={styles.szPickItems}>{shoesSizes}</View>
          </View>
          <TouchableOpacity
            style={styles.bttmBtnTO}
            onPress={() => {
              setSelectedItem(undefined)
              setSelectedSize(undefined)
              setShowAddToBagModal(false)
            }}>
            <Text style={styles.bttmBtnTxt}>Add to Bag</Text>
          </TouchableOpacity>
        </View>
      </View>
    </Modal>
  )
}

export default InfoModal
