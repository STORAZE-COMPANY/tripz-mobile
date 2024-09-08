// https://docs.expo.dev/guides/using-eslint/
module.exports = {
  extends: 'expo',
  setting: {
    'import/resolver': {
      typescript: {
        project: './tsconfig.json',
      },
    },
  }
};
