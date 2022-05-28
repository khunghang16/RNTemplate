import {StyleSheet} from 'react-native';
import React from 'react';
import {Button, ButtonProps, Colors} from 'react-native-ui-lib';
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withSpring,
} from 'react-native-reanimated';

const AnimatedButton = Animated.createAnimatedComponent(Button);

type Props = ButtonProps & {};

const AppButton = React.memo((props: Props) => {
  const springValue = useSharedValue(1);
  const styleAni = useAnimatedStyle(() => {
    return {
      transform: [{scale: springValue.value}],
    };
  });

  return (
    <AnimatedButton
      bg-primary
      {...props}
      style={[styles.container, styleAni]}
      color={Colors.white}
      onPressIn={() => {
        springValue.value = withSpring(0.9, {
          stiffness: 300,
        });
        props.onPress && props.onPress();
      }}
      onPressOut={() => {
        springValue.value = withSpring(1, {
          stiffness: 300,
        });
      }}
    />
  );
});

export default AppButton;

const styles = StyleSheet.create({
  container: {
    height: 50,
    borderRadius: 6,
  },
});
