import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {useLocalData} from 'store/localData';
import {useAppNavigation} from 'navigations/types';

const Intro = () => {
  const navigation = useAppNavigation();
  const {setData: setLocalIntro} = useLocalData({key: 'intro'});
  return (
    <View style={styles.container}>
      <Text
        onPress={() => {
          navigation.navigate('Login');
          setLocalIntro('ok');
        }}>
        Intro
      </Text>
    </View>
  );
};

export default Intro;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
