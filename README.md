# benchmark

```
Running "Vue JSX" suite...
Progress: 100%

  SWC async:
    634 ops/s, ±46.75%     | 90.54% slower

  SWC sync:
    417 ops/s, ±29.20%     | slowest, 93.78% slower

  Babel sync:
    6 629 ops/s, ±1.32%   | 1.07% slower

  Babel async:
    6 701 ops/s, ±1.87%   | fastest

Finished 4 cases!
  Fastest: Babel async
  Slowest: SWC sync
```

Tested on Apple M1 Max (32GB)
