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
    3 258 ops/s, ±0.72%   | 8.64% slower

  SWC sync:
    3 566 ops/s, ±0.95%   | fastest

  Babel async:
    1 807 ops/s, ±2.02%   | slowest, 49.33% slower

  Babel sync:
    3 184 ops/s, ±1.50%   | 10.71% slower

Finished 4 cases!
  Fastest: SWC sync
  Slowest: Babel async
```

Tested on Apple M1 Max (32GB), Node.js v18.16.0
