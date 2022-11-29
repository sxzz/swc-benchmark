const code = `const Comp = () => <h1>Hello World</h1>`

import b from 'benny'
import { transform as swcTransform } from '@swc/core'
import { transform as babelTransform } from '@babel/core'

b.suite(
  'Vue JSX',

  b.add('swc', async () => {
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

  b.add('babel', async () => {
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
