const code = `
const App0 = () => <h1>Hello World</h1>
const App1 = () => (
  <>
    <span>I'm</span>
    <span>Fragment</span>
  </>
)
const App2 = () => <input type="email" />;
`

import b from 'benny'
import {
  transform as swcTransform,
  transformSync as swcTransformSync,
} from '@swc/core'
import {
  transform as babelTransform,
  transformSync as babelTransformSync,
} from '@babel/core'

b.suite(
  'Vue JSX',

  b.add('SWC async', async () => {
    await swcTransform(code, {
      jsc: {
        parser: {
          syntax: 'ecmascript',
          jsx: true,
        },
        experimental: {
          plugins: [['swc-plugin-vue-jsx', {}]],
        },
      },
    })
  }),

  b.add('SWC sync', () => {
    swcTransformSync(code, {
      jsc: {
        parser: {
          syntax: 'ecmascript',
          jsx: true,
        },
        experimental: {
          plugins: [['swc-plugin-vue-jsx', {}]],
        },
      },
    })
  }),

  b.add('Babel sync', () => {
    babelTransformSync(code, {
      plugins: ['@vue/babel-plugin-jsx'],
    })
  }),

  b.add('Babel async', async () => {
    // https://github.com/sxzz/swc-benchmark/pull/1
    await babelTransform(code, {
      plugins: ['@vue/babel-plugin-jsx'],
    })
  }),

  b.cycle(),
  b.complete(),
  b.save({
    format: 'chart.html',
  })
)
