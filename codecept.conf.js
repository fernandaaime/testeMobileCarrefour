require('./hooks/clearAppCache');

exports.config = {
  tests: './tests/*_test.js',
  timeout: 10,
  output: './output',
  helpers: {
    Appium: {
      platformName: 'Android',
      app: 'bs://293687243fde616dc5b2189c030d964bc89f71d2',

      host: 'hub-cloud.browserstack.com/wd/hub',
      port: 443,
      // --- Adicione esta linha ---
      protocol: 'https', // Força a conexão a usar HTTPS
      // --- Fim da adição ---
      user: process.env.BROWSERSTACK_USERNAME,
      key: process.env.BROWSERSTACK_ACCESS_KEY,
      restart: false,
      keepBrowserState: true,
      keepCookies: true,
      waitForTimeout: 15000,

      desiredCapabilities: {
        platformName: 'Android',
        'bstack:options': {
          deviceName: 'Samsung Galaxy S22 Ultra',
          app: 'bs://293687243fde616dc5b2189c030d964bc89f71d2',
          automationName: 'UiAutomator2',
          appWaitActivity: '*',
        },
      },

      webdriverio: {
        version: '8.18.2'
      },
    }
  },
  include: {
    I: './steps_file.js'
  },
  plugins: {
    allure: {
      enabled: true,
      require: '@codeceptjs/allure-legacy',
      outputDir: './output',
      useCucumberStepReporter: false
    },
    screenshotOnFail: {
      enabled: true
    }
  },
  name: 'carrefour-mobile-e2e'
};