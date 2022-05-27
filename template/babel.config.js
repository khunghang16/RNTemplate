module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    [
      'module-resolver',
      {
        root: ['./src'],
        extensions: ['.ios.js', '.android.js', '.js', '.ts', '.tsx', '.json'],
        alias: {
          '@apis': './src/apis',
          '@assets': './src/assets',
          '@baseComponents': './src/baseComponents',
          '@components': './src/components',
          '@constant': './src/constant',
          '@modules': './src/modules',
          '@navigations': './src/navigations',
          '@services': './src/services',
          '@store': './src/store',
          '@utils': './src/utils',
        },
      },
    ],
    'react-native-reanimated/plugin',
  ],
};
