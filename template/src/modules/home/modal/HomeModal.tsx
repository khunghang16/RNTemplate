import {useAppNavigation} from 'navigations/types';
import React from 'react';
import {StyleSheet} from 'react-native';
import {View, Text} from 'react-native-ui-lib';

interface HomeModalProps {
  prop: string;
}

const HomeModal = (props: HomeModalProps) => {
  const {prop} = props;
  const navigation = useAppNavigation();
  return (
    <View style={styles.container}>
      <Text
        onPress={() => {
          navigation.goBack();
        }}>
        HomeModal
      </Text>
    </View>
  );
};

export default HomeModal;
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
