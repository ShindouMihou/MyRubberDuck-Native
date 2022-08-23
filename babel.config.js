module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    "nativewind/babel",
    "@babel/plugin-transform-flow-strip-types",
    ["@babel/plugin-proposal-decorators", {
      "legacy": true
    }],
    ["@babel/plugin-proposal-class-properties", {
      "loose": true
    }],
    [
      "module-resolver",
      {
        alias: {
          "@utils": "./src/utils",
          "@components": "./src/components",
          "@screens": "./src/screens",
          "@slices": "./src/redux/slices",
          "@type": "./src/types",
          "@tasks": "./src/tasks",
          "@store": "./src/redux/store.ts",
          "@storage": "./src/redux/storage.ts"
        },
        extensions: [
          ".js", ".jsx", ".ts", ".tsx"
        ]
      }
    ],
    // Remember to keep reanimated at the very last since according to the docs, it has to be the last plugin.
    'react-native-reanimated/plugin'
  ]
};