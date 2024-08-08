module.exports = function (api) {
  api.cache(true)
  return {
    presets: ['babel-preset-expo'],
    plugins: [
      [
        'module-resolver',
        {
          alias: {
            pages: './src/pages',
            utils: './src/utils',
            tasks: './src/tasks',
            hooks: './src/hooks',
            constants: './src/constants',
            components: './src/components',
            assets: './public/assets',
            images: './public/images',
            fonts: './public/fonts',
          },
        },
      ],
    ],
  }
}
