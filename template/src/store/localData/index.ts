import {MMKVLoader, useMMKVStorage} from 'react-native-mmkv-storage';
const storage = new MMKVLoader().initialize();

export type KeyStoreType = 'intro' | 'go' | 'next' | 'search' | 'send';

interface Props {
  key: KeyStoreType;
  defaultData?: string;
}

export const useLocalData = ({key, defaultData}: Props) => {
  const [data, setData] = useMMKVStorage(key, storage, defaultData);

  return {
    data,
    setData,
  };
};
