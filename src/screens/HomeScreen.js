import { useState } from 'react';
import {
  Button,
  FlatList,
  View,
  StyleSheet,
  SafeAreaView,
  Text,
} from 'react-native';

import { COLORS, NFTData } from '../constants';

import { HomeHeader, FocusStatusBar, NFTCard } from '../components';

const HomeScreen = ({ navigation }) => {
  const [nftData, setNftData] = useState(NFTData);

  const handleSearch = (value) => {
    if (!value.length) return setNftData(NFTData);

    const filteredData = NFTData.filter((item) => {
      return item.name.toLowerCase().includes(value.toLowerCase());
    });

    filteredData.length ? setNftData(filteredData) : setNftData(NFTData);
  };

  return (
    <SafeAreaView style={HomeStyles.wrapper}>
      <FocusStatusBar />
      <View style={{ flex: 1 }}>
        <View style={{ zIndex: 0 }}>
          <FlatList
            data={nftData}
            renderItem={({ item }) => <NFTCard data={item} />}
            keyExtractor={(item) => item.id}
            showsVerticalScrollIndicator={false}
            ListHeaderComponent={<HomeHeader onSearch={handleSearch} />}
          />
        </View>

        <View style={HomeStyles.NFTBackground}>
          <View style={HomeStyles.NFTTop} />
          <View style={HomeStyles.NFT} />
        </View>
      </View>
    </SafeAreaView>
  );
};

const HomeStyles = StyleSheet.create({
  wrapper: {
    flex: 1,
  },
  NFTBackground: {
    position: 'absolute',
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
    zIndex: -1,
  },
  NFTTop: {
    height: 300,
    backgroundColor: COLORS.primary,
  },
  NFTBottom: {
    flex: 1,
    backgroundColor: COLORS.white,
  },
});

export default HomeScreen;

{
  /* <Button
  title="Go to Jane's profile"
  onPress={() => navigation.navigate('Profile', { name: 'Jane' })}
/> */
}
