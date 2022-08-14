import { View, Image, Text, StyleSheet } from 'react-native';
import { assets, COLORS, FONTS, SHADOWS, SIZES } from '../constants';

export const NFTTitle = ({ title, creator, titleSize, creatorSize }) => {
  return (
    <View>
      <Text
        style={{
          fontFamily: FONTS.semiBold,
          fontSize: titleSize,
          color: COLORS.primary,
        }}
      >
        {title}
      </Text>
      <Text
        style={{
          fontFamily: FONTS.regular,
          fontSize: creatorSize,
          color: COLORS.primary,
        }}
      >
        {creator}
      </Text>
    </View>
  );
};

export const EthPrice = ({ price }) => {
  return (
    <View style={subInfoStyle.flex}>
      <Image
        source={assets.eth}
        resizeMode="contain"
        style={subInfoStyle.image}
      ></Image>
      <Text>{price}</Text>
    </View>
  );
};

export const ImageCmp = ({ image, index }) => {
  return (
    <View style={subInfoStyle.ImageCmp}>
      <Image
        source={image}
        resizeMode="contain"
        style={{
          width: 48,
          height: 48,
          marginLeft: index === 0 ? 0 : -SIZES.font,
        }}
      />
    </View>
  );
};

export const People = () => {
  return (
    <View style={subInfoStyle.people}>
      {[assets.person02, assets.person03, assets.person04].map(
        (image, index) => (
          <ImageCmp image={image} index={index} key={`People-${index}`} />
        )
      )}
    </View>
  );
};

export const EndDate = () => {
  return (
    <View style={subInfoStyle.endDate}>
      <Text style={subInfoStyle.text}>Ends in</Text>
      <Text style={subInfoStyle.endDateText}>12hrs 30mins</Text>
    </View>
  );
};

export const SubInfo = () => {
  return (
    <View style={subInfoStyle.subInfo}>
      <People />
      <EndDate />
    </View>
  );
};

const subInfoStyle = StyleSheet.create({
  subInfo: {
    width: '100%',
    paddingHorizontal: SIZES.font,
    marginTop: -SIZES.extraLarge,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  people: {
    flexDirection: 'row',
  },
  endDate: {
    paddingHorizontal: SIZES.font,
    paddingVertical: SIZES.base,
    backgroundColor: COLORS.white,
    justifyContent: 'center',
    alignitems: 'center',
    ...SHADOWS.light,
    elevation: 1,
    maxWidth: '50%',
  },
  text: {
    fontSize: SIZES.small,
    color: COLORS.primary,
    fontFamily: FONTS.regular,
  },
  endDateText: {
    fontSize: SIZES.medium,
    color: COLORS.primary,
    fontFamily: FONTS.semiBold,
  },
  image: {
    width: 20,
    height: 20,
    marginRight: 2,
  },
  flex: {
    justifyContent: 'center',
    alignitems: 'row',
    flexDirection: 'row',
  },
});
