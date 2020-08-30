module.exports = function (env, argv) {
  console.log('running webpack');
  return {
    output: 'out.js',
    entry: { first: './src2' },
  };
}
