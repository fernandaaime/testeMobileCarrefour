require('./hooks/clearAppCache');

exports.config = {
  helpers: {
    Appium: {
      app: "bs://293687243fde616dc5b2189c030d964bc89f71d2",
      host: "hub-cloud.browserstack.com",
      port: 4444,
      platform: "Android",
      user: process.env.BROWSERSTACK_USER,
      key: process.env.BROWSERSTACK_KEY,
      device: "Samsung Galaxy S22 Ultra",
    }
  },
  include: {
    I: './steps_file.js',
    LoginTest: './tests/*_test.js'
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
