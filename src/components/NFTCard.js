import { useNavigation } from '@react-navigation/native';
import { View, Image, Text, StyleSheet } from 'react-native';
import { COLORS, SIZES, SHADOWS, assets } from '../constants';
import { CircleButton } from './Button';
import { NFTTitle, SubInfo } from './SubInfo';

const NFTCard = ({ data }) => {
  const navigation = useNavigation();
  return (
    <View style={NFTCardStyle.card}>
      <View style={NFTCardStyle.nft}>
        <Image
          source={data.image}
          resizeMode="cover"
          style={NFTCardStyle.nftImage}
        />
      </View>

      <CircleButton imgUrl={assets.heart} right={10} top={10} />

      <SubInfo />

      <View style={NFTCardStyle.nftWrapper}>
        <NFTTitle />
      </View>
    </View>
  );
};

const NFTCardStyle = StyleSheet.create({
  card: {
    backgroundColor: COLORS.white,
    borderRadius: SIZES.font,
    marginBottom: SIZES.extraLarge,
    margin: SIZES.base,
    ...SHADOWS.dark,
  },
  nft: {
    width: '100%',
    height: 150,
  },
  nftImage: {
    width: '100%',
    height: '100%',
    borderTopLeftRadius: SIZES.font,
    borderTopRightRadius: SIZES.font,
  },
  nftWrapper: {
    padding: SIZES.font,
    width: '100%',
  },
});

export default NFTCard;
