module.exports = (api) => {
  api.cache(true);

  return {
    presets: [
      [
        '@babel/preset-env',
        {
          targets: {
            node: 'current',
          },
          useBuiltIns: 'usage',
          corejs: 3,
        },
      ],
      '@babel/preset-typescript',
    ],
    plugins: [
      [
        'module-resolver',
        {
          root: ['./src/'],
          extensions: ['.ts'],
        },
      ],
    ],
    ignore: ['**/*.spec.ts', '**/*.test.ts'],
  };
};
