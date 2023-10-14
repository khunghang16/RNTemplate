import {StyleSheet} from 'react-native';
import React from 'react';
import {View} from 'react-native-ui-lib';

const Home = React.memo(() => {
  return <View style={styles.container} bg-bgColor />;
});

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
