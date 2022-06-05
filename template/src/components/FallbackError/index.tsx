import React from 'react';
import {StyleSheet, Button} from 'react-native';
import {View, Text} from 'react-native-ui-lib';

export const errorHandler = (error: Error, stackTrace: string) => {
  /* Log the error to an error reporting service */
};

const FallbackError = (props: {error: Error; resetError: Function}) => {
  return (
    <View style={styles.container}>
      <Text>Something happened!</Text>
      <Text>{props.error.toString()}</Text>
      <Button onPress={() => props.resetError()} title={'Try again'} />
    </View>
  );
};

export default FallbackError;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
