const settings = {
  repository: 'https://github.com/rtivital/omatsuri',
  bugs: 'https://github.com/rtivital/omatsuri/issues/new',

  meta: [
    { internal: true, to: '/about', label: 'About' },
    {
      href: 'https://github.com/rtivital/omatsuri/issues/new',
      label: 'Report issue',
    },
    {
      href: 'https://github.com/rtivital/omatsuri/blob/master/CONTRIBUTING.md',
      label: 'Contribute',
    },
    {
      href: 'https://github.com/rtivital/omatsuri/blob/master/CHANGELOG.md',
      label: 'Changelog',
    },
  ],

  maintainers: {
    author: {
      avatar:
        'https://avatars0.githubusercontent.com/u/10353856?s=460&u=88394dfd67727327c1f7670a1764dc38a8a24831&v=4',
      name: 'Vitaly Rtishchev',
      tg: 'rtivital',
      github: 'rtivital',
      website: 'https://github.com/rtivital',
    },

    contributors: [
      {
        avatar:
          'https://avatars1.githubusercontent.com/u/206567?s=460&u=e8dc0aa4202c8e3e5e43a530253297e8bab46407&v=4',
        name: 'Vlad Shilov',
        tg: 'omgovich',
        github: 'omgovich',
        twitter: 'omgovich',
        website: 'https://omgovich.ru/',
      },
      /* Become contributor and insert you name here */
    ],
  },

  tools: [
    {
      link: '/triangle-generator',
      name: 'Triangle generator',
      description: 'Generate css triangles styles for elements and pseudo-elements',
    },

    {
      link: '/color-shades-generator',
      name: 'Color shades generator',
      description: 'Generate tints and shades of a given color',
    },

    {
      link: '/gradient-generator',
      name: 'Gradient generator',
      description: 'Generate linear and radial css gradients',
    },

    {
      link: '/page-dividers',
      name: 'Page dividers',
      description: 'Tool to generate page dividers with css and svg images',
    },

    {
      link: '/svg-compressor',
      name: 'SVG compressor',
      description:
        'Compress SVG images with SVGO tool, convert to react component immediately after if needed',
    },

    {
      link: '/svg-to-jsx',
      name: 'SVG → JSX',
      description:
        'Convert SVG icons and illustrations to react components (or components for other libraries with JSX support)',
    },

    {
      link: '/b64-encoding',
      name: 'Base64 encoding',
      description: 'Convert images or files to base64, generate styles to use as background image',
    },

    {
      link: '/fake-data-generator',
      name: 'Fake data generator',
      description:
        'Generate wide variety of realistic fake data: address, avatars, names, phones...',
    },

    {
      link: '/html-symbols',
      name: 'Symbols collection',
      description:
        'Collection of commonly used html symbols: arrows, marks, currency signs and many others',
    },

    {
      link: '/lorem-ipsum',
      name: 'Lorem ipsum',
      description: 'Generate different kinds of lorem ipsum text',
    },

    {
      link: '/css-cursors',
      name: 'CSS cursors',
      description: 'All existing CSS cursor property values collection',
    },

    {
      link: '/events-keycode',
      name: 'Keyboard events codes',
      description: 'JavaScript events keycode values',
    },
  ],
};

export default settings;
