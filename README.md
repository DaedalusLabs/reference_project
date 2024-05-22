# Daedalus Labs Reference Project

A reference project for Daedalus Labs products.

## Recommended IDE Setup

[VSCode](https://code.visualstudio.com/) + [Volar](https://marketplace.visualstudio.com/items?itemName=Vue.volar) (and disable Vetur).

## Project Setup

```sh
yarn # Project setup
yarn dev # Compile and Hot-Reload for Development
yarn build # Type-Check, Compile and Minify for Production
yarn test:unit #Run Unit Tests with Vitest
```

### Run End-to-End Tests with [Playwright](https://playwright.dev)

```sh
# Install browsers for the first run
yarn dlx playwright install

# When testing on CI, must build the project first
yarn build

# Runs the end-to-end tests
yarn test:e2e
# Runs the tests only on Chromium
yarn test:e2e -- --project=chromium
# Runs the tests of a specific file
yarn test:e2e -- tests/example.spec.ts
# Runs the tests in debug mode
yarn test:e2e -- --debug
```

### Lint with [ESLint](https://eslint.org/)

```sh
yarn lint
```
