import {Dimensions} from 'react-native'

const {width, height} = Dimensions.get('window')

export const Colors = {
  // colors
  black: '#1E1F20',
  darkBlue: '#3a5978',
  white: '#FFFFFF',
  lightGray: '#ABAFB8',
  gray: '#BEC1D2',

  //studio main theme color
  NS1: '#D7384E',
  NS2: '#965DC2',
  NS4: '#0978D9',
  RaOn: '#008DA5',
}

export const Sizes = {
  // global sizes
  base: 8,
  font: 14,
  radius: 12,
  padding: 24,

  // font sizes
  navTitle: 25,
  studioTitle: 60,
  h1: 30,
  h2: 22,
  h3: 16,
  h4: 14,
  h5: 12,
  body1: 30,
  body2: 20,
  body3: 16,
  body4: 14,
  body5: 12,

  // app dimensions
  width,
  height,
}

const thin = 'Cafe24Sp'
const bold = 'Cafe24DJ'
const regular = 'Cafe24Sp'
const title = 'SDKukdaeL'

export const Fonts = {
  navTitle: {fontFamily: thin, fontSize: Sizes.navTitle},
  largeTitleBold: {fontFamily: bold, fontSize: Sizes.h2},
  studioTitleBold: {fontFamily: title, fontSize: Sizes.studioTitle},
  h1: {fontFamily: bold, fontSize: Sizes.h1, lineHeight: 36},
  h2: {fontFamily: bold, fontSize: Sizes.h2, lineHeight: 30},
  h3: {fontFamily: bold, fontSize: Sizes.h3, lineHeight: 22},
  h4: {fontFamily: bold, fontSize: Sizes.h4, lineHeight: 22},
  h5: {fontFamily: bold, fontSize: Sizes.h5, lineHeight: 22},
  body1: {
    fontFamily: regular,
    fontSize: Sizes.body1,
    lineHeight: 36,
  },
  body2: {
    fontFamily: regular,
    fontSize: Sizes.body2,
    lineHeight: 30,
  },
  body3: {
    fontFamily: regular,
    fontSize: Sizes.body3,
    lineHeight: 22,
  },
  body4: {
    fontFamily: regular,
    fontSize: Sizes.body4,
    lineHeight: 22,
  },
  body5: {
    fontFamily: regular,
    fontSize: Sizes.body5,
    lineHeight: 22,
  },
}

export default {Colors, Fonts, Sizes}
