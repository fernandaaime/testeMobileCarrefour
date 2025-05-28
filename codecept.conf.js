require('./hooks/clearAppCache');

exports.config = {
  tests: './tests/*_test.js',
  timeout: 10,
  output: './output',
  helpers: {
    Appium: {
      
      platformName: 'Android',
      app: 'bs://293687243fde616dc5b2189c030d964bc89f71d2',
     

      host: 'hub-cloud.browserstack.com',
      port: 443,
      protocol: 'https',
      path: '/wd/hub/', 
      user: process.env.BROWSERSTACK_USERNAME,
      key: process.env.BROWSERSTACK_ACCESS_KEY,
      restart: false,
      keepBrowserState: true,
      keepCookies: true,
      waitForTimeout: 15000,

      desiredCapabilities: {
        
        platformName: 'Android',
        app: 'bs://293687243fde616dc5b2189c030d964bc89f71d2',
        automationName: 'UiAutomator2',
        appWaitActivity: '*',

        'bstack:options': {
          deviceName: 'Samsung Galaxy S22 Ultra',
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