import { useContext, useEffect, useState } from 'react';
import {
  SafeAreaView,
  KeyboardAvoidingView,
  TextInput,
  TouchableOpacity,
  StatusBar,
  StyleSheet,
  View,
  Text,
} from 'react-native';
import Spinner from 'react-native-loading-spinner-overlay/lib';
import { auth } from '../../firebase';
import { COLORS, SIZES } from '../constants';
import { AuthContext } from '../context/AuthContext';

const LoginScreen = ({ navigation }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const { login, isLoading } = useContext(AuthContext);

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      if (user) {
        navigation.navigate('Home');
      }
    });

    return unsubscribe;
  }, []);
  const handleLogin = async () => {
    const { user } = await auth.signInWithEmailAndPassword(email, password);
    console.log(user);
  };
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: COLORS.white }}>
      <StatusBar
        backgroundColor={COLORS.white}
        barStyle="dark-content"
        translucent={true}
      />
      <View style={loginStyle.loginWrapper}>
        <Spinner visible={isLoading} />
        <View style={loginStyle.loginHeader}>
          <Text style={loginStyle.signHead}>NFT Sign In</Text>
          <Text style={loginStyle.signSubTitle}>
            Please enter your correct details to sign in
          </Text>
        </View>

        <KeyboardAvoidingView
          style={loginStyle.inputContainer}
          behavior="padding"
        >
          <View style={loginStyle.loginInput}>
            <Text style={loginStyle.loginText}>Email</Text>
            <TextInput
              placeholder="Enter your email"
              style={loginStyle.inputArea}
              value={email}
              onChangeText={(text) => setEmail(text)}
            />
            <Text style={loginStyle.loginText}>Password</Text>
            <TextInput
              placeholder="Enter your password"
              value={password}
              onChangeText={(text) => setPassword(text)}
              style={loginStyle.inputArea}
              secureTextEntry
            />
            <View style={loginStyle.forgotStyle}>
              <Text style={loginStyle.forgotTextStyle}>
                Forgot Password? Click here
              </Text>
              <View
                style={{
                  flexDirection: 'row',
                }}
              >
                <Text>Dont have an account? </Text>
                <TouchableOpacity onPress={() => navigation.navigate('SignUp')}>
                  <Text>Sign Up</Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>

          <View style={loginStyle.sigInButton}>
            <TouchableOpacity
              style={loginStyle.signIn}
              onPress={() => login({ password, email })}
            >
              <Text style={loginStyle.signInText}>Sign In</Text>
            </TouchableOpacity>
          </View>
        </KeyboardAvoidingView>
      </View>
    </SafeAreaView>
  );
};

const loginStyle = StyleSheet.create({
  loginWrapper: {
    paddingHorizontal: 20,
    paddingVertical: 30,
  },
  loginHeader: {
    marginTop: 100,
  },
  signHead: {
    fontSize: SIZES.extraLarge + 5,
    fontWeight: 'bold',
    color: COLORS.primary,
  },
  signSubTitle: {
    fontSize: SIZES.font,
    color: COLORS.primary,
    marginTop: SIZES.base,
  },
  inputContainer: {
    // flex: 1,
    // justifyContent: 'center',
    // alignItems: 'center',
  },
  loginInput: {
    marginTop: SIZES.extraLarge * 1.5,
    width: '100%',
  },
  loginText: {
    fontSize: SIZES.font,
    fontWeight: 'bold',
    letterSpacing: 0.25,
  },
  inputArea: {
    backgroundColor: COLORS.white,
    borderRadius: SIZES.base,
    borderWidth: 1,
    height: SIZES.extraLarge + 20,
    borderColor: COLORS.gray,
    paddingHorizontal: 10,
    marginVertical: 15,
  },
  forgotStyle: {
    justifyContent: 'center',
    alignItems: 'flex-end',
  },
  forgotTextStyle: {
    marginBottom: SIZES.base,
  },
  sigInButton: {
    marginVertical: SIZES.extraLarge + 15,
    justifyContent: 'center',
    alignContent: 'center',
    width: '100%',
  },
  signIn: {
    backgroundColor: COLORS.primary,
    padding: SIZES.large,
    borderRadius: 50,
  },
  signInText: {
    textAlign: 'center',
    color: COLORS.white,
    fontWeight: 'bold',
    fontSize: SIZES.medium,
    letterSpacing: 0.28,
  },
});

export default LoginScreen;
