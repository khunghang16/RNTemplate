import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {getVersionApp} from 'services/deviceInfo';
import {useTranslation} from 'react-i18next';
interface Props {
  onLoadSplash: () => void;
}

const Splash = ({onLoadSplash}: Props) => {
  const {t} = useTranslation();

  return (
    <View style={styles.container}>
      <Text
        onPress={() => {
          onLoadSplash();
          // i18n.changeLanguage(i18n.language === 'vi' ? 'en' : 'vi');
        }}>
        {t('splash.version', {appVersion: getVersionApp()})}
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
