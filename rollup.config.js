import commonjs from 'rollup-plugin-commonjs';
import uglify from 'rollup-plugin-uglify';
import { minify } from 'uglify-es';

import pkg from './package.json';

const isProduction = !process.env.ROLLUP_WATCH;

export default {
  banner: `/**\n * Rowser v${pkg.version}\n * Copyright 2017-present (@everget) Alex Orekhov. MIT License.\n */`,
  input: './index.js',
  output: {
    file: './static/bundles/rowser.umd.js',
    format: 'umd', // 'iife'
    name: 'rowser',
  },
  plugins: [
    commonjs(),
    // isProduction && uglify({}, minify)
  ],
  treeshake: false,
  watch: {
    exclude: 'node_modules/**',
    include: './lib/**'
  }
};
