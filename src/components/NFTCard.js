import { useNavigation } from '@react-navigation/native';
import { useContext } from 'react';
import { View, Image, Text, StyleSheet } from 'react-native';
import { COLORS, SIZES, SHADOWS, assets, FONTS } from '../constants';
import { AuthContext } from '../context/AuthContext';
import { CircleButton, RectButton } from './Button';
import { EthPrice, NFTTitle, SubInfo } from './SubInfo';

const NFTCard = ({ data }) => {
  const navigation = useNavigation();

  const { logOut } = useContext(AuthContext);

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
        <NFTTitle
          title={data.name}
          creator={data.creator}
          titleSize={SIZES.large}
          creatorSize={SIZES.small}
        />

        <View style={NFTCardStyle.coinType}>
          <EthPrice price={data.price} />
          <RectButton
            minWidth={120}
            fontSize={FONTS.font}
            // handlePress={() => navigation.navigate('Details', { data })}
            handlePress={() => logOut()}
          />
        </View>
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
  coinType: {
    marginTop: SIZES.font,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
});

export default NFTCard;
