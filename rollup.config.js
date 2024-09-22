import commonjs from '@rollup/plugin-commonjs';
import babel from '@rollup/plugin-babel';
import postcss from 'rollup-plugin-postcss';
import pkg from './package.json';
import { nodeResolve } from '@rollup/plugin-node-resolve';

export default {
  input: 'src/index.js', // Entry point for your component
  output: [
    {
      file: pkg.main,   // CommonJS output
      format: 'cjs',
      exports: 'named',
      sourcemap: true,
    },
    {
      file: pkg.module, // ES module output
      format: 'es',
      exports: 'named',
      sourcemap: true,
    },
  ],
  external: ['react', 'react-dom', 'prop-types'], // Exclude React and ReactDOM from the bundle
  plugins: [
    nodeResolve(),
    commonjs(),
    babel({
      exclude: 'node_modules/**',
      babelHelpers: 'bundled',
      presets: [
        '@babel/preset-env',
        '@babel/preset-react',
        // Include this if you're using TypeScript
        '@babel/preset-typescript'
      ],
      plugins: [
        '@babel/plugin-proposal-class-properties',
      ],
      extensions: ['.js', '.jsx'], // Ensure .jsx is included
    }),

    postcss({
      extract: 'dist/styles.css',           // Extract to a CSS file
      minimize: true,                       // Minify CSS
      sourceMap: true,
    }),
  ],
};
