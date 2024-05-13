/* eslint-disable no-undef */
/* eslint-disable @typescript-eslint/no-var-requires */
const { CracoAliasPlugin } = require('react-app-alias');

module.exports = {
  plugins: [
    {
      plugin: CracoAliasPlugin,
      options: {
        baseUrl: './',
        source: 'tsconfig',
        tsConfigPath: './tsconfig.aliases.json'
      }
    }
  ]
};
