import resolve from 'rollup-plugin-node-resolve'
import commonjs from 'rollup-plugin-commonjs'
import sourceMaps from 'rollup-plugin-sourcemaps'
import { camelCase } from 'lodash'

import typescript from 'rollup-plugin-typescript2'
import json from 'rollup-plugin-json'
// @ts-ignore
import less from 'rollup-plugin-less'
// @ts-ignore
import { terser } from 'rollup-plugin-terser'

// @ts-ignore
import babel from 'rollup-plugin-babel'

const pkg = require('./package.json')
const libraryName = 'hello-react-cascader'

export default {
  input: `src/cascader/index.tsx`,
  output: [
    { file: pkg.browser, name: camelCase(libraryName), format: 'umd', sourcemap: true, globals: { react: 'React', 'react-dom': 'ReactDOM', antd: 'antd', crypto: 'crypto' } },
    { file: pkg.module, format: 'es', sourcemap: true },
    { file: pkg.main, format: 'cjs', exports: 'named', sourcemap: true }
  ],
  // Indicate here external modules you don't wanna include in your bundle (i.e.: 'lodash')
  external: ['react', 'react-dom', 'prop-types', 'antd', 'crypto'],
  watch: {
    include: 'src/**'
  },
  plugins: [
    less({
      output: pkg.style
    }),
    // Allow json resolution
    json(),
    // Compile TypeScript files
    typescript({ useTsconfigDeclarationDir: true }),
    // Allow bundling cjs modules (unlike webpack, rollup doesn't understand cjs)
    commonjs({
      include: 'node_modules/**',
      namedExports: {
        'node_modules/react/index.js': [
          'Component',
          'PureComponent',
          'Fragment',
          'Children',
          'createElement'
        ]
      }
    }),
    // Allow node_modules resolution, so you can use 'external' to control
    // which external modules to include in the bundle
    // https://github.com/rollup/rollup-plugin-node-resolve#usage
    resolve({ preferBuiltins: false }),
    babel({
      exclude: 'node_modules/**' // only transpile our source code
    }),
    // Resolve source maps to the original source
    sourceMaps(),
    terser()
  ]
}
