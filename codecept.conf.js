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
        platformVersion: '11',
        deviceName: 'emulator-5554',
        automationName: 'UiAutomator2',
        app: 'C:/Users/aime_/Downloads/app-teste-mobile/android.wdio.native.app.v1.0.8.apk',
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

/*const isIOS = process.env.PLATFORM === 'ios';
exports.config = {
  helpers: {
    Appium: {
      host: 'localhost',
      port: 4723,
      path: '/',
      platform: isIOS ? 'iOS' : 'Android',
      desiredCapabilities: isIOS
        ? {
            platformName: 'iOS',
            platformVersion: '17.0',
            deviceName: 'iPhone 14',
            automationName: 'XCUITest',
            app: '/Users/seu-usuario/Apps/SeuApp.app',
            noReset: true
          }
        : {
            platformName: 'Android',
            deviceName: 'emulator-5554',
            automationName: 'UiAutomator2',
            app: 'C:/Users/aime_/Downloads/app.apk',
            appPackage: 'com.wdiodemoapp',
            appActivity: 'com.wdiodemoapp.MainActivity',
            noReset: true
          }
    }
  }
}*/
