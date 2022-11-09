module.exports = {
  presets: [
    [
      'module:metro-react-native-babel-preset',
      { useTransformReactJSXExperimental: true },
    ],
  ],
  plugins: [
    [
      'module-resolver',
      {
        root: ['./'],
        extensions: ['.tsx'],
        alias: {
          src: ['src'],
        },
      },
    ],
    [
      '@babel/plugin-transform-react-jsx',
      {
        runtime: 'automatic',
      },
    ],
    'react-native-reanimated/plugin',
  ],
};
