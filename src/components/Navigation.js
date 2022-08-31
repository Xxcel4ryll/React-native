import { DefaultTheme, NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import {
  HomeScreen,
  OnboardingScreen,
  ProfileScreen,
  LoginScreen,
  SplashScreen,
  SignUpScreen,
} from '../screens';
import { useContext, useState } from 'react';
import { AuthContext } from '../context/AuthContext';

const Stack = createNativeStackNavigator();

const theme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    background: 'transparent',
  },
};

export default () => {
  const [isAppFirstLaunched, setIsAppFirstLaunched] = useState(true);
  const { userInfo, splashLoading } = useContext(AuthContext);

  console.log(userInfo);
  return (
    isAppFirstLaunched != null && (
      <NavigationContainer theme={theme}>
        <Stack.Navigator screenOptions={{ headerShown: false }}>
          {splashLoading ? (
            <Stack.Screen name="Splash" component={SplashScreen} />
          ) : userInfo.token ? (
            <>
              <Stack.Screen name="Home" component={HomeScreen} />
              <Stack.Screen name="Details" component={ProfileScreen} />
            </>
          ) : (
            !userInfo.token &&
            isAppFirstLaunched && (
              <>
                <Stack.Screen name="OnBoard" component={OnboardingScreen} />
                <Stack.Screen name="Login" component={LoginScreen} />
                <Stack.Screen name="SignUp" component={SignUpScreen} />
              </>
            )
          )}
          {/* {!userInfo.token && isAppFirstLaunched && (
            <>
              <Stack.Screen name="OnBoard" component={OnboardingScreen} />
              <Stack.Screen name="Login" component={LoginScreen} />
              <Stack.Screen name="SignUp" component={SignUpScreen} />
            </>
          )}
          {userInfo.token && (
            <>
              <Stack.Screen name="Home" component={HomeScreen} />
              <Stack.Screen name="Details" component={ProfileScreen} />
            </>
          )} */}
        </Stack.Navigator>
      </NavigationContainer>
    )
  );
};
