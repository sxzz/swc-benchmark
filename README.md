# benchmark

```
Running "Vue JSX" suite...
Progress: 100%

  SWC async:
    2 109 ops/s, ±6.08%   | 69.36% slower

  SWC sync:
    2 000 ops/s, ±6.57%   | slowest, 70.95% slower

  Babel sync:
    6 612 ops/s, ±4.08%   | 3.95% slower

  Babel async:
    6 884 ops/s, ±0.59%   | fastest

Finished 4 cases!
  Fastest: Babel async
  Slowest: SWC sync
```

Tested on Apple M1 Max (32GB), Node.js v18.12.1
