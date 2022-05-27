import {StyleSheet, Text, View} from 'react-native';
import React from 'react';

interface Props {
  onLoadSplash: () => void;
}

const Splash = ({onLoadSplash}: Props) => {
  return (
    <View style={styles.container}>
      <Text
        onPress={() => {
          onLoadSplash();
        }}>
        Splash
      </Text>
    </View>
  );
};

export default Splash;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
