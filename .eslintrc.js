module.exports = {
  globals: {
    window: true
  },
  env: {
    mocha: true,
    node: true,
    browser: true,
  },
  extends: 'airbnb-base',
  plugins: [
    'mocha'
  ],
  root: true,
};
