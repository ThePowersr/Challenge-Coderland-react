module.exports = {
  presets: [
    ['@babel/preset-env', { targets: { node: true } }],
    ['@babel/preset-react', { runtime: 'automatic' }],
    '@babel/preset-typescript'
  ],
};