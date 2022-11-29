# benchmark

```
Running "Vue JSX" suite...
Progress: 100%

  SWC async:
    2 184 ops/s, ±4.46%   | slowest, 67.68% slower

  SWC sync:
    2 198 ops/s, ±8.93%   | 67.48% slower

  Babel sync:
    6 557 ops/s, ±2.63%   | 2.97% slower

  Babel async:
    6 758 ops/s, ±0.53%   | fastest

Finished 4 cases!
  Fastest: Babel async
  Slowest: SWC async
```

Tested on Apple M1 Max (32GB), Node.js v18.12.1
