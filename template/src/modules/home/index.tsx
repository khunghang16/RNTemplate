import {StyleSheet, Button, FlatList} from 'react-native';
import React from 'react';
import {View, Text} from 'react-native-ui-lib';
// import {useAppNavigation} from 'navigations/types';
import {useAsyncFn} from 'react-use';
import {getMovie} from 'api/authApi';

const Home = () => {
  // const navigation = useAppNavigation();

  const [state, doFetch] = useAsyncFn(async () => {
    let response;
    try {
      response = await getMovie;
    } catch (error) {}
    return response?.movies || [];
  }, []);

  React.useEffect(() => {
    doFetch();
  }, [doFetch]);

  return (
    <View style={styles.container} bg-bgColor>
      {state.value && (
        <FlatList
          data={state.value}
          keyExtractor={(item, index) => `${index}`}
          renderItem={({item}) => {
            return (
              <View height={100}>
                <Text>{item.title}</Text>
                <Text>{item.releaseYear}</Text>
              </View>
            );
          }}
        />
      )}
      <Button
        title="load more"
        onPress={() => {
          doFetch();
        }}
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
