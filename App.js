import { StatusBar } from 'expo-status-bar';
import { DefaultTheme, NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useFonts } from 'expo-font';

import { HomeScreen, OnboardingScreen, ProfileScreen } from './src/screens';
import { useEffect, useState } from 'react';

const Stack = createNativeStackNavigator();

const theme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    background: 'transparent',
  },
};

export default () => {
  const [loaded] = useFonts({
    InterBold: require('./src/assets/fonts/Inter-Bold.ttf'),
    InterLight: require('./src/assets/fonts/Inter-Light.ttf'),
    InterMedium: require('./src/assets/fonts/Inter-Medium.ttf'),
    InterRegular: require('./src/assets/fonts/Inter-Regular.ttf'),
    InterSemiBold: require('./src/assets/fonts/Inter-SemiBold.ttf'),
  });
  const [isAppFirstLaunched, setIsAppFirstLaunched] = useState(null);

  if (!loaded) return null;

  useEffect(async () => {
    const appData = await AsyncStorage.getItem('isAppFirstLaunched');
    console.log(appData);
    if (appData == null) {
      setIsAppFirstLaunched(true);
      AsyncStorage.setItem('isAppFirstLaunched', 'false');
    } else {
      setIsAppFirstLaunched(false);
    }
  }, []);

  return (
    isAppFirstLaunched != null && (
      <NavigationContainer theme={theme}>
        <Stack.Navigator
          screenOptions={{ headerShown: false }}
          // initialRouteName="OnBoard"
        >
          {isAppFirstLaunched && (
            <Stack.Screen name="OnBoard" component={OnboardingScreen} />
          )}
          <Stack.Screen
            name="Home"
            component={HomeScreen}
            options={{ title: 'One Love' }}
          />
          <Stack.Screen name="Details" component={ProfileScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    )
  );
};
