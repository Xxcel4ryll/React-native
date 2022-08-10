import { useIsFocused } from '@react-navigation/core';
import { View, Text, StatusBar } from 'react-native';

const FocusStatusBar = (props) => {
  const isFocused = useIsFocused();

  return isFocused && <StatusBar animated={true} {...props} />;
};

export default FocusStatusBar;
