import DeviceInfo from 'react-native-device-info';

export const getVersionApp = (): string => {
  return DeviceInfo.getVersion();
};

export const getNumberBuildApp = (): string => {
  return DeviceInfo.getBuildNumber();
};
