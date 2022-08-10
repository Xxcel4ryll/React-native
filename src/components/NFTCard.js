import { useNavigation } from '@react-navigation/native';
import { View, Image, Text, StyleSheet } from 'react-native';
import { COLORS, SIZES, SHADOWS } from '../constants';

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
      <Text>{data.name}</Text>
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
    heigth: 150,
  },
  nftImage: {
    width: '100%',
    heigth: '50%',
    borderTopLeftRadius: SIZES.font,
    borderTopRightRadius: SIZES.font,
  },
});

export default NFTCard;
