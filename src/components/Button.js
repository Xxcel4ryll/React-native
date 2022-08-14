import { View, Image, TouchableOpacity, StyleSheet, Text } from 'react-native';
import { COLORS, FONTS, SHADOWS, SIZES } from '../constants';

// How to pass style as prop to StyleSheet
export const CircleButton = ({ imgUrl, handlePress, top, left, right }) => {
  return (
    <TouchableOpacity
      style={{
        width: 40,
        height: 40,
        left: left,
        right: right || 10,
        top: top || 10,
        backgroundColor: COLORS.white,
        borderRadius: SIZES.extraLarge,
        position: 'absolute',
        alignItems: 'center',
        justifyContent: 'center',
        ...SHADOWS.light,
      }}
      onPress={handlePress ? () => handlePress() : null}
    >
      <Image
        style={CircleButtonStyle.touchableImage}
        source={imgUrl}
        resizeMode="contain"
      ></Image>
    </TouchableOpacity>
  );
};

export const RectButton = ({ minWidth, fontSize, handlePress }) => {
  return (
    <TouchableOpacity
      style={{
        backgroundColor: COLORS.primary,
        borderRadius: SIZES.extraLarge,
        minWidth,
        padding: SIZES.small,
      }}
      onPress={() => handlePress()}
    >
      <Text
        style={{
          fontSize,
          fontFamily: FONTS.semiBold,
          color: COLORS.white,
          textAlign: 'center',
        }}
      >
        Place a bid
      </Text>
    </TouchableOpacity>
  );
};

const CircleButtonStyle = StyleSheet.create({
  touchable: {
    width: 40,
    height: 40,
    right: 10,
    top: 10,
    backgroundColor: COLORS.white,
    borderRadius: SIZES.extraLarge,
    position: 'absolute',
    alignItems: 'center',
    justifyContent: 'center',
    ...SHADOWS.light,
  },
  rectTouchable: {
    backgroundColor: COLORS.primary,
    borderRadius: SIZES.extraLarge,
    minWidth: 120,
    padding: SIZES.small,
  },
  touchableImage: {
    width: 24,
    height: 24,
  },
});
