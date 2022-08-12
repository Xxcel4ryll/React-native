import { View, Image, TouchableOpacity, StyleSheet, Text } from 'react-native';
import { COLORS, SHADOWS, SIZES } from '../constants';

// How to pass style as prop to StyleSheet
export const CircleButton = ({ imgUrl, handlePress }) => {
  return (
    <TouchableOpacity style={CircleButtonStyle.touchable}>
      <Image
        style={CircleButtonStyle.touchableImage}
        source={imgUrl}
        resizeMode="contain"
      ></Image>
    </TouchableOpacity>
  );
};

export const RectButton = () => {
  return (
    <View>
      <Text>rect</Text>
    </View>
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
  touchableImage: {
    width: 24,
    height: 24,
  },
});
