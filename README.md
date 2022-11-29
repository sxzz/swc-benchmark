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
    1 790 ops/s, ±4.23%   | 43.23% slower

  SWC sync:
    1 642 ops/s, ±6.70%   | slowest, 47.92% slower

  Babel sync:
    3 020 ops/s, ±3.13%   | 4.22% slower

  Babel async:
    3 153 ops/s, ±1.07%   | fastest

Finished 4 cases!
  Fastest: Babel async
  Slowest: SWC sync
```

Tested on Apple M1 Max (32GB), Node.js v18.12.1
