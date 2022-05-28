import AppButton from 'baseComponents/AppButton';
import React from 'react';
import {StyleSheet} from 'react-native';
import {Text, Dialog, Colors, View, ButtonProps} from 'react-native-ui-lib';

interface ModalGlobalProps {}

interface IState {
  visible: boolean;
  rowButton: boolean;
  arrayButton: ButtonProps[];
  bottom?: boolean;
}

export var showModalGlobal: (value: IState) => void;
export var hideModalGlobal: () => void;

const initState: IState = {
  visible: false,
  rowButton: true,
  arrayButton: [
    {
      label: '',
      onPress: () => {},
    },
  ],
  bottom: true,
};

const ModalGlobal = (props: ModalGlobalProps) => {
  const {} = props;

  const [stateModal, setStateModal] = React.useState<IState>(initState);

  React.useEffect(() => {
    showModalGlobal = ({
      visible = true,
      rowButton = true,
      arrayButton = [],
      bottom = true,
    }) => {
      setStateModal({
        visible,
        rowButton,
        arrayButton,
        bottom,
      });
    };
    hideModalGlobal = () => {
      setStateModal(initState);
    };
  }, []);

  return (
    <Dialog
      useSafeArea
      bottom={stateModal.bottom}
      visible={stateModal.visible}
      onDismiss={() => setStateModal(prev => ({...prev, visible: false}))}
      containerStyle={styles.containerStyle}
      panDirection={'down'}
      renderPannableHeader={() => {
        return (
          <View center paddingV-8 bg-bgColor>
            <View bg-bgPan height={4} width={48} br100 />
          </View>
        );
      }}
      overlayBackgroundColor={Colors.rgba(Colors.black, 0.4)}>
      <View paddingT-24 paddingB-32 paddingH-30 centerH bg-bgColor>
        <Text marginB-8>Modal Global</Text>
        <Text marginB-8>Description Modal Global</Text>
        {stateModal.rowButton ? (
          <View row width={'100%'} marginT-40>
            {stateModal.arrayButton.map((e, i) => (
              <React.Fragment key={i}>
                <AppButton label={e.label} flex onPress={e.onPress} />
                <View width={8} />
              </React.Fragment>
            ))}
          </View>
        ) : (
          <View width={'100%'} marginT-40>
            {stateModal.arrayButton.map((e, i) => (
              <React.Fragment key={i}>
                <AppButton label={e.label} onPress={e.onPress} />
                <View height={8} />
              </React.Fragment>
            ))}
          </View>
        )}
      </View>
    </Dialog>
  );
};

export default ModalGlobal;
const styles = StyleSheet.create({
  containerStyle: {
    borderRadius: 16,
  },
});
