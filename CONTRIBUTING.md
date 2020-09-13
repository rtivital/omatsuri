# Contributing to Omatsuri

Thanks for taking a look at the project and thinking about contributing! I'm always looking forward to add more applications to Omatsuri, improve UX of existing tools and decrease loading time. You are welcome to become contributor and create pull request with any improvements and new features.

## Getting started

To start contributing, fork the [original repository](https://github.com/rtivital/omatsuri) and clone it to your computer.

To get started with application locally use these commands:

```sh
# Install dependencies
yarn

# Start application, browser will open automatically
npm start
```

After you've finished your changes please create pull request to [original repository](https://github.com/rtivital/omatsuri). I'll review your changes and merge them if everything works fine.

## Features to contribute

There are a lot of missing features that can be added, let's focus on most interesting:

- Full offline support with service workers
- Dark theme support (automatically detected from user os)
- New application – e.g. gradient generator

If you decide to build one of these features please be aware of design language of the app and recreate it as similar as possible for new design elements. Please use eslint and prettier during development. **Make sure you do not have eslint errors before submitting pull request.** You can check that by running `npm run lint` script.

If you consider your contribution to be large, please add yourself to contributors list [here](./src/data/settings.js)
