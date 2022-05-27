import {StyleSheet} from 'react-native';
import React from 'react';
import {useTranslation} from 'react-i18next';
import {View, Text} from 'react-native-ui-lib';
import {setTheme} from 'designs/Colors';

const Home = () => {
  const {t} = useTranslation();
  return (
    <View style={styles.container} bg-bgColor>
      <Text
        textColor
        onPress={() => {
          setTheme();
        }}>
        {t('home.title')}
      </Text>
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
