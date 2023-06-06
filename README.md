# SWC Plugin Benchmark

**JUST FOR TESTING, DO TRUST IT.**

SWC plugin vs Babel plugin

[See results](https://sxzz.github.io/swc-benchmark/results.html)

## Vue JSX

`swc-plugin-vue-jsx` ↔️ `@vue/babel-plugin-jsx`

```
Running "Vue JSX" suite...
Progress: 100%

  SWC async:
    3 201 ops/s, ±1.41%   | 9.14% slower

  SWC sync:
    3 523 ops/s, ±0.30%   | fastest

  Babel:
    2 839 ops/s, ±3.52%   | slowest, 19.42% slower

Finished 3 cases!
  Fastest: SWC sync
  Slowest: Babel
```

Tested on Apple M1 Max (32GB), Node.js v18.16.0
