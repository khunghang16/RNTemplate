import {StyleSheet, Button} from 'react-native';
import React from 'react';
import {useTranslation} from 'react-i18next';
import {View, Text, ButtonAnimationDirection} from 'react-native-ui-lib';
import {setTheme} from 'designs/Colors';
import {useAppNavigation} from 'navigations/types';
import {showModalGlobal} from 'components/ModalGlobal';

const Home = () => {
  const {t} = useTranslation();
  const navigation = useAppNavigation();
  return (
    <View style={styles.container} bg-bgColor>
      <Text
        textColor
        onPress={() => {
          setTheme();
        }}>
        {t('home.title')}
      </Text>
      <Button
        onPress={() => {
          showModalGlobal({
            visible: true,
            rowButton: true,
            arrayButton: [
              {
                label: 'Left',
                onPress: () => {
                  console.warn('Left');
                },
              },
              {
                label: 'Right',
                onPress: () => {
                  console.warn('Right');
                },
              },
            ],
          });
        }}
        title="Open Modal"
      />
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
