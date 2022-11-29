const code = `
import { defineComponent as _defineComponent } from 'vue'
import { openBlock as _openBlock, createElementBlock as _createElementBlock } from "vue"
import { h } from 'vue'

export default _defineComponent({
    __name: 'basic',
    setup(__props) {
        defineRender(() => h('div'))
        return (_ctx, _cache) => {
            return _openBlock(), _createElementBlock("div")
        }
    }
})
`

import b from 'benny'
import { transform as swcTransform } from '@swc/core'
import { transformDefineRender } from './macro.js'

b.suite(
  'defineRender',

  b.add('swc', async () => {
    await swcTransform(code, {
      jsc: {
        experimental: {
          plugins: [['swc-plugin-vue-macros-define-render', {}]],
        },
      },
    })
  }),

  b.add('babel', () => {
    transformDefineRender(code, 'index.vue')
  }),

  b.cycle(),
  b.complete(),
  b.save({
    format: 'chart.html',
  })
)
