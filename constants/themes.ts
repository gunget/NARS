import {Dimensions} from 'react-native'

const {width, height} = Dimensions.get('window')

export const Colors = {
  // colors
  black: '#1E1F20',
  white: '#FFFFFF',
  lightGray: '#ABAFB8',
  gray: '#BEC1D2',
}

export const Sizes = {
  // global sizes
  base: 8,
  font: 14,
  radius: 12,
  padding: 24,

  // font sizes
  navTitle: 25,
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

export const Fonts = {
  navTitle: {fontFamily: 'CarmenSans-Thin', fontSize: Sizes.navTitle},
  largeTitleBold: {fontFamily: 'CarmenSans-SemiBold', fontSize: Sizes.h2},
  h1: {fontFamily: 'CarmenSans-SemiBold', fontSize: Sizes.h1, lineHeight: 36},
  h2: {fontFamily: 'CarmenSans-SemiBold', fontSize: Sizes.h2, lineHeight: 30},
  h3: {fontFamily: 'CarmenSans-SemiBold', fontSize: Sizes.h3, lineHeight: 22},
  h4: {fontFamily: 'CarmenSans-SemiBold', fontSize: Sizes.h4, lineHeight: 22},
  h5: {fontFamily: 'CarmenSans-SemiBold', fontSize: Sizes.h5, lineHeight: 22},
  body1: {
    fontFamily: 'CarmenSans-Regular',
    fontSize: Sizes.body1,
    lineHeight: 36,
  },
  body2: {
    fontFamily: 'CarmenSans-Regular',
    fontSize: Sizes.body2,
    lineHeight: 30,
  },
  body3: {
    fontFamily: 'CarmenSans-Regular',
    fontSize: Sizes.body3,
    lineHeight: 22,
  },
  body4: {
    fontFamily: 'CarmenSans-Regular',
    fontSize: Sizes.body4,
    lineHeight: 22,
  },
  body5: {
    fontFamily: 'CarmenSans-Regular',
    fontSize: Sizes.body5,
    lineHeight: 22,
  },
}

export default {Colors, Fonts, Sizes}
