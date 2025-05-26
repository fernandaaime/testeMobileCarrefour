require('./hooks/clearAppCache');

exports.config = {
  tests: './*_test.js',
  output: './output',
  helpers: {
    Appium: {
      host: 'localhost',
      port: 4723,
      path: '/',
      protocol: 'http',
      platform: 'Android',
      chromedriverExecutableDir: './drivers',
      chromedriverExecutable: './drivers/chromedriver.exe',
      chromedriverMappingFile: './chromedriver-mapping.json',
      'appium:chromedriverExecutable': 'C:\\caminho\\para\\chromedriver.exe',
      'appium:chromedriverAutodownload': true,
      desiredCapabilities: {
        platformName: 'Android',
        automationName: 'UiAutomator2',
        deviceName: 'emulator-5554', // atualizado para o nome lógico do device
        "appium:udid": "emulator-5554",
        platformVersion: '12',
        app: "C:\\Users\\aime_\\Downloads\\android.wdio.native.app.v1.0.8.apk",
        appPackage: 'com.wdiodemoapp',
        appActivity: 'com.wdiodemoapp.MainActivity',
        noReset: true
      }
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
