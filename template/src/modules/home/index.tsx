import {StyleSheet, Button} from 'react-native';
import React from 'react';
import {useTranslation} from 'react-i18next';
import {View, Text} from 'react-native-ui-lib';
import {setTheme} from 'designs/Colors';
import {useAppNavigation} from 'navigations/types';
import {showModalGlobal} from 'components/ModalGlobal';
import {useAsyncFn} from 'react-use';
import {getMovie} from 'api/authApi';

const Home = () => {
  const {t, i18n} = useTranslation();
  const navigation = useAppNavigation();

  const [state, doFetch] = useAsyncFn(async () => {
    let response;
    try {
      response = await getMovie;
    } catch (error) {}
    return response;
  }, []);

  React.useEffect(() => {
    doFetch();
  }, [doFetch]);

  return (
    <View style={styles.container} bg-bgColor>
      <Text
        onPress={() => {
          setTheme();
        }}>
        {t('home.title')}
      </Text>
      <Text
        onPress={() => {
          i18n.changeLanguage(i18n.language === 'vi' ? 'en' : 'vi');
        }}>
        {t('home.changeLanguage')}
      </Text>
      <Button
        onPress={() => {
          showModalGlobal({
            visible: true,
            rowButton: true,
            arrayButton: [
              {
                label: 'Left',
                onPress: () => {},
              },
              {
                label: 'Right',
                onPress: () => {},
              },
            ],
          });
        }}
        title="Open Modal"
      />
      <Button
        onPress={() => {
          navigation.navigate('HomeModal');
        }}
        title="Open Home Modal"
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
