# SWC Plugin Benchmark

**JUST FOR TESTING, DO TRUST IT.**

SWC plugin vs Babel plugin

[See results](https://blog.sxzz.moe/swc-benchmark/results.html)

## Vue JSX

`swc-plugin-vue-jsx` ↔️ `@vue/babel-plugin-jsx`

```
Running "Vue JSX" suite...
Progress: 100%

  SWC async:
    3 236 ops/s, ±1.00%   | 9.79% slower

  SWC sync:
    3 587 ops/s, ±0.80%   | fastest

  Babel:
    2 878 ops/s, ±3.71%   | slowest, 19.77% slower

Finished 3 cases!
  Fastest: SWC sync
  Slowest: Babel
```

Tested on Apple M1 Max (32GB), Node.js v18.16.0
