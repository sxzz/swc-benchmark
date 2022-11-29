# SWC Plugin Benchmark

SWC plugin vs Babel plugin

[See results](https://blog.sxzz.moe/swc-benchmark/results.html)

## Vue JSX

`swc-plugin-vue-jsx` ↔️ `@vue/babel-plugin-jsx`

```
Running "Vue JSX" suite...
Progress: 100%

  SWC async:
    1 233 ops/s, ±10.58%   | 60.26% slower

  SWC sync:
    713 ops/s, ±19.69%     | slowest, 77.02% slower

  Babel sync:
    2 839 ops/s, ±4.41%   | 8.51% slower

  Babel async:
    3 103 ops/s, ±0.78%   | fastest

Finished 4 cases!
  Fastest: Babel async
  Slowest: SWC sync
```

Tested on Apple M1 Max (32GB), Node.js v18.12.1
