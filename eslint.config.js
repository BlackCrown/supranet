export default [
  { ignores: ['**/*.js'] },
  {
    files: ['*.js'],
    languageOptions: {
      ecmaVersion: 'latest',
      sourceType: 'module',
      parserOptions: { ecmaFeatures: { jsx: true } },
    },
    settings: { react: { version: 'detect' } },
    plugins: {
      'react-refresh': require('eslint-plugin-react-refresh'),
      react: require('eslint-plugin-react'),
    },
    rules: {
      'react-refresh/only-export-components': 'off',
      'react/react-in-jsx-scope': 'off',
      'react/prop-types': 'off',
      'no-unsafe-finally': 'off',
      'no-unused-vars': 'off',
      'react/jsx-key': 'off',
    },
  },
  { files: ['**/*.js'], ignores: ['*.js'] },
];
