import { useState } from 'react';
import { View, Text } from 'react-native';
import { COLORS, FONTS, SIZES } from '../constants';
import { EthPrice, NFTTitle } from './SubInfo';

const DetailsDesc = ({ data }) => {
  const [text, setText] = useState(data.description.slice(0, 100));
  const [readMore, setReadMore] = useState(false);

  return (
    <>
      <View
        style={{
          width: '100%',
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
        }}
      >
        <NFTTitle
          title={data.name}
          creator={data.creator}
          creatorSize={SIZES.font}
          titleSize={SIZES.extraLarge}
        />

        <EthPrice price={data.price} />
      </View>
      <View style={{ marginVertical: SIZES.extraLarge * 1.5 }}>
        <Text
          style={{
            fontSize: SIZES.font,
            fontFamily: FONTS.semiBold,
            color: COLORS.primary,
          }}
        >
          Description
        </Text>
        <View style={{ marginTop: SIZES.base }}>
          <Text
            style={{
              fontSize: SIZES.small,
              fontFamily: FONTS.regular,
              color: COLORS.secondary,
              lineHeight: SIZES.large,
            }}
          >
            {text}
            {!readMore && '...'}
            <Text
              style={{
                fontSize: SIZES.medium - 3,
                fontFamily: FONTS.semiBold,
                fontStyle: 'italic',
                color: COLORS.secondary,
              }}
              onPress={() => {
                setReadMore(!readMore);
                !readMore
                  ? setText(data.description)
                  : setText(data.description.slice(0, 100));
              }}
            >
              {!readMore ? ' Read More' : ' Show Less'}
            </Text>
          </Text>
        </View>
      </View>
    </>
  );
};

export default DetailsDesc;
