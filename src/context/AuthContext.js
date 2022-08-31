import { createContext, useEffect, useState } from 'react';
import Axios from 'axios';
import { API_BASE_URL } from '@env';
import AsyncStorage from '@react-native-async-storage/async-storage';

const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const [isLoading, setIsLoading] = useState(false);
  const [userInfo, setUserInfo] = useState({});
  const [splashLoading, setSplashLoading] = useState(true);

  const register = async ({
    firstName,
    lastName,
    password,
    email,
    address,
    phone,
  }) => {
    const payload = {
      firstName,
      lastName,
      password,
      email,
      address,
      pin: '1234',
      countryCode: 'NG',
      phoneNumber: phone,
    };
    setIsLoading(true);

    try {
      const { data } = await Axios.post(
        `${API_BASE_URL}/auth/register`,
        payload
      );

      setIsLoading(false);
      setUserInfo(data);
      AsyncStorage.setItem('userInfo', JSON.stringify(data));
      console.log(data);
    } catch (e) {
      setIsLoading(false);
      console.log(e.message);
    }
  };

  const login = async ({ password, email }) => {
    setIsLoading(true);

    try {
      const { data } = await Axios.post(`${API_BASE_URL}/auth/login`, {
        pin: password,
        email,
      });

      console.log(data);
      setUserInfo(data.data);
      AsyncStorage.setItem('userInfo', JSON.stringify(data.data));
      setIsLoading(false);
    } catch (e) {
      setIsLoading(false);
      console.log(e.message);
    }
  };

  const logOut = () => {
    setIsLoading(true);

    setUserInfo({});
    AsyncStorage.removeItem('userInfo');
    setIsLoading(false);
  };

  const AuthState = async () => {
    try {
      setSplashLoading(true);

      let userInfo = JSON.parse(await AsyncStorage.getItem('userInfo'));

      if (userInfo) {
        setUserInfo(userInfo);
      }

      setSplashLoading(false);
    } catch (err) {
      setSplashLoading(false);
      console.log(err);
    }
  };

  useEffect(() => {
    AuthState();
  }, []);

  return (
    <AuthContext.Provider
      value={{
        register,
        login,
        logOut,
        isLoading,
        splashLoading,
        userInfo,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export { AuthContext, AuthProvider };
