import babel from 'rollup-plugin-babel';

export default {
  entry: 'lib/index.js',
  sourceMap: true,
  plugins: [babel({
    presets: ['es2015-rollup'],
    babelrc: false,
    plugins: ['external-helpers-2'],
    externalHelpers: true
  })]
};
