require('./hooks/clearAppCache');

exports.config = {
  tests: './tests/*_test.js',
  timeout: 10, // Ajustado para segundos
  output: './output',
  helpers: {
    Appium: {

      platformName: 'Android', // Duplicar aqui para a verificação inicial do CodeceptJS
      app: 'bs://293687243fde616dc5b2189c030d964bc89f71d2', // Duplicar aqui também

      host: 'hub-cloud.browserstack.com',
      port: 443, // Porta padrão HTTPS do BrowserStack
      user: process.env.BROWSERSTACK_USER,
      key: process.env.BROWSERSTACK_KEY,
      restart: false,
      keepBrowserState: true,
      keepCookies: true,
      waitForTimeout: 15000, // Tempo de espera para elementos em milissegundos

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