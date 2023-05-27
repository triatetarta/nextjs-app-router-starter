/** @type {import('prettier').Config} */
module.exports = {
  tabWidth: 2,
  semi: true,
  singleQuote: true,
  trailingComma: 'es5',
  endOfLine: 'lf',
  printWidth: 80,
  plugins: [require('prettier-plugin-tailwindcss')],
};
