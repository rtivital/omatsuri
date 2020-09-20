# Omatsuri changelog

Omatsuri is a growing set of browser tools. Each month I try to add one new tool and improve UX and performance of existing ones.

## v1.1.0 – September 2020

**New tools:**

- CSS cursors
- JavaScript Events Codes

**Improvements of existing applications:**

- Option to download unstyled svg file to page dividers
- More symbols were added to most used symbols collection
- Tints were added to color shades generator with variable amount of generated colors
- New Tilt page divider available in page dividers application
- Add more correct triangle styles generation for jss

**Migrations:**

- Color picker in HexInput migrated from react-color to [react-colorfull](https://omgovich.github.io/react-colorful/) – improved bundle size and styles options
- All hooks were migrated to separate package – [xooks](https://github.com/rtivital/xooks)
- ESLint and prettier configuration migrated to separate package – [@rtivital/eslint-config](https://www.npmjs.com/package/@rtivital/eslint-config)

**Optimization and performance:**

- Migrate Source Sans Pro font from from npm package to Google fonts -> reduce loading times with cache
- Remove unsued [faker locales](https://github.com/Marak/faker.js/issues/167#issuecomment-119373065) from fake data generator app -> reduce bundle size in half (2.2mb -> 1.31mb)
- Replace all images used in triangle generator with single react component -> 8 less requests to load page
- Remove tinycolor2 depenency -> -20kb to bundle
- Remove react-input-slider depenency -> -60kb to bundle

## v1.0.0 – Initial Release – August 2020

Initial release included 9 tools:

- Triangle generator
- Color shades generator
- Page dividers
- SVG compressor
- SVG to JSX
- Base64 encoding
- Fake data generator
- Symbols collection
- Lorem ipsum generator
