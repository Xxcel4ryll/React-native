import { StatusBar } from 'expo-status-bar';
import { DefaultTheme, NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { useFonts } from 'expo-font';

import { HomeScreen, ProfileScreen } from './src/screens';

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

  if (!loaded) return null;

  return (
    <NavigationContainer theme={theme}>
      <Stack.Navigator
        screenOptions={{ headerShown: false }}
        initialRouteName="Home"
      >
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{ title: 'One Love' }}
        />
        <Stack.Screen name="Profile" component={ProfileScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
