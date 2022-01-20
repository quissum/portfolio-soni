// Snowpack Configuration File
// See all supported options: https://www.snowpack.dev/reference/configuration

/** @type {import("snowpack").SnowpackUserConfig } */
module.exports = {
  mount: {
    src: '/',
    /* ... */
  },
  plugins: [
    '@snowpack/plugin-sass',
    [
      '@snowpack/plugin-optimize',
      {
        preloadCSS: true,
        preloadCSSFileName: 'styles.css',
      },
    ],
    '@snowpack/plugin-postcss',

    /* ... */
  ],
  packageOptions: {
    /* ... */
  },
  devOptions: {
    /* ... */
  },
  buildOptions: {
    /* ... */
  },
}
