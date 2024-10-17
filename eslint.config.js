/** @type {import('eslint').Linter.FlatConfig} */
const config = [
    {
      languageOptions: {
        globals: {
          // Define global variables here
          window: 'readonly',
          document: 'readonly',
          // Add any other global variables you might need
        },
        parserOptions: {
          ecmaVersion: 12,
          sourceType: 'module',
        },
      },
      rules: {
        // Your custom rules can be added here
      },
    },
  ];
  
  module.exports = config;
  