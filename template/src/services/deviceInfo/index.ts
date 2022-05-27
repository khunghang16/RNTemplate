import DeviceInfo from 'react-native-device-info';

export const getVersionApp = (): string => {
  let version = DeviceInfo.getVersion();
  return version;
};
