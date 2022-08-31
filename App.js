import { StatusBar } from 'expo-status-bar';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useFonts } from 'expo-font';

import { useEffect, useState } from 'react';
import Navigation from './src/components/Navigation';
import { AuthProvider } from './src/context/AuthContext';

const Stack = createNativeStackNavigator();

export default () => {
  const [isAppFirstLaunched, setIsAppFirstLaunched] = useState(true);

  // useEffect(() => {
  //   const appData = AsyncStorage.getItem('isAppFirstLaunched');
  //   if (appData == null) {
  //     setIsAppFirstLaunched(true);
  //     AsyncStorage.setItem('isAppFirstLaunched', 'false');
  //   } else {
  //     setIsAppFirstLaunched(false);
  //   }
  // }, []);

  const [loaded] = useFonts({
    InterBold: require('./src/assets/fonts/Inter-Bold.ttf'),
    InterLight: require('./src/assets/fonts/Inter-Light.ttf'),
    InterMedium: require('./src/assets/fonts/Inter-Medium.ttf'),
    InterRegular: require('./src/assets/fonts/Inter-Regular.ttf'),
    InterSemiBold: require('./src/assets/fonts/Inter-SemiBold.ttf'),
  });

  if (!loaded) return null;

  return (
    <AuthProvider>
      <Navigation />
    </AuthProvider>
  );
};
