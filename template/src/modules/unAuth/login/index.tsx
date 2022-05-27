import {StyleSheet, Text, View} from 'react-native';
import React from 'react';

interface Props {
  onLogin: (token: string) => void;
}

const Login = ({onLogin}: Props) => {
  return (
    <View style={styles.container}>
      <Text
        onPress={() => {
          onLogin('token');
        }}>
        Login
      </Text>
    </View>
  );
};

export default Login;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
