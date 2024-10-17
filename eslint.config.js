/** @type {import('eslint').Linter.FlatConfig} */
const config = [
    {
      languageOptions: {
        globals: {
          window: 'readonly',
          document: 'readonly',
        },
        parserOptions: {
          ecmaVersion: 12,
          sourceType: 'module',
        },
      },
      rules: {
        // Add your custom rules here
      },
    },
  ];
  
  module.exports = config;
  