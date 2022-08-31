import { View, Image, ActivityIndicator } from 'react-native';
import { assets, COLORS } from '../constants';

const SplashScreen = () => {
  return (
    <View style={{ flex: 1 }}>
      <Image
        source={assets.splash}
        resizeMode="cover"
        style={{
          width: '100%',
          height: '100%',
        }}
      />
      <ActivityIndicator size="large" color={COLORS.white} />
    </View>
  );
};

export default SplashScreen;
