Running this repo with `yarn webpack --mode production` produces the following output:

```
yarn webpack --mode production
yarn run v1.22.0
$ /home/ntucker/src/webpack-example/node_modules/.bin/webpack --mode production

 Compilation Results

 Version: 5.0.0-beta.29
 Built: Sun Aug 30 2020 16:10:01 GMT-0700 (Pacific Daylight Time)
 Compile Time: 177ms
 Output Directory: /home/ntucker/src/webpack-example/dist
 Hash: 0157cb8e91352147d937

┌────────────┬─────────────────────────────────┐
│ Entrypoint │ Bundle                          │
├────────────┼─────────────────────────────────┤
│ main       │  Bundle Name       │ main.js    │
│            │  Compared For Emit │ true       │
│            │  Bundle size       │ 0.07 kb    │
│            │                                 │
│            │ Modules:                        │
│            │ ./src/index.js [size: 34 bytes] │
└────────────┴─────────────────────────────────┘

Done in 0.82s.
```

This indicates that our webpack config is not used. Furthermore, with no console.log - the function isn't even run!
