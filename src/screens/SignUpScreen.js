import { useContext, useState } from 'react';
import {
  SafeAreaView,
  KeyboardAvoidingView,
  TextInput,
  TouchableOpacity,
  StatusBar,
  StyleSheet,
  View,
  Text,
  ScrollView,
} from 'react-native';
import Spinner from 'react-native-loading-spinner-overlay/lib';
import { auth } from '../../firebase';
import { COLORS, SIZES } from '../constants';
import { AuthContext } from '../context/AuthContext';

const SignUpScreen = ({ navigation }) => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [address, setAddress] = useState('');
  const [phone, setPhone] = useState('');

  const { register, isLoading } = useContext(AuthContext);

  const handleSignUp = async () => {
    const { user } = await auth.createUserWithEmailAndPassword(
      email,
      // firstName,
      // lastName,
      // address,
      // phone,
      password
    );
    console.log(user);
  };

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: COLORS.white }}>
      <StatusBar
        backgroundColor={COLORS.white}
        barStyle="dark-content"
        translucent={true}
      />
      <ScrollView
        showsVerticalScrollIndicator={false}
        alwaysBounceVertical={true}
        alwaysBounceHorizontal={true}
        style={{ height: '100%' }}
      >
        <View style={signUpStyle.signUpWrapper}>
          <Spinner visible={isLoading} />
          <View style={signUpStyle.signUpHeader}>
            <Text style={signUpStyle.signHead}>NFT Sign Up</Text>
            <Text style={signUpStyle.signSubTitle}>
              Please enter your correct details to sign up
            </Text>
          </View>

          <KeyboardAvoidingView
            style={signUpStyle.inputContainer}
            behavior="padding"
          >
            <View style={signUpStyle.signUpInput}>
              <Text style={signUpStyle.signUpText}>First Name</Text>
              <TextInput
                placeholder="Enter your first name"
                style={signUpStyle.inputArea}
                value={firstName}
                onChangeText={(text) => setFirstName(text)}
              />
              <Text style={signUpStyle.signUpText}>Last Name</Text>
              <TextInput
                placeholder="Enter your last name"
                style={signUpStyle.inputArea}
                value={lastName}
                onChangeText={(text) => setLastName(text)}
              />
              <Text style={signUpStyle.signUpText}>Email Address</Text>
              <TextInput
                placeholder="Enter your email address"
                style={signUpStyle.inputArea}
                value={email}
                onChangeText={(text) => setEmail(text)}
              />
              <Text style={signUpStyle.signUpText}>Phone number</Text>
              <TextInput
                placeholder="Enter your phone number"
                style={signUpStyle.inputArea}
                value={phone}
                onChangeText={(text) => setPhone(text)}
              />
              <Text style={signUpStyle.signUpText}>Home Address</Text>
              <TextInput
                placeholder="Enter your home address"
                style={signUpStyle.inputArea}
                value={address}
                onChangeText={(text) => setAddress(text)}
              />
              <Text style={signUpStyle.signUpText}>Password</Text>
              <TextInput
                placeholder="Enter your password"
                secureTextEntry
                style={signUpStyle.inputArea}
                value={password}
                onChangeText={(text) => setPassword(text)}
              />
              <View style={signUpStyle.forgotStyle}>
                <Text>Already have an account? </Text>
                <TouchableOpacity onPress={() => navigation.navigate('Login')}>
                  <Text>Sign In</Text>
                </TouchableOpacity>
              </View>
            </View>

            <View style={signUpStyle.sigInButton}>
              <TouchableOpacity
                style={signUpStyle.signIn}
                onPress={() =>
                  register({
                    email,
                    firstName,
                    lastName,
                    address,
                    phone,
                    password,
                  })
                }
              >
                <Text style={signUpStyle.signInText}>Sign Up</Text>
              </TouchableOpacity>
            </View>
          </KeyboardAvoidingView>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const signUpStyle = StyleSheet.create({
  signUpWrapper: {
    paddingHorizontal: 20,
    paddingVertical: 30,
  },
  signUpHeader: {
    marginTop: 30,
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
  signUpInput: {
    marginTop: SIZES.extraLarge * 1.5,
    width: '100%',
  },
  signUpText: {
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
    flexDirection: 'row',
    justifyContent: 'flex-end',
    alignItems: 'center',
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

export default SignUpScreen;
