require('./hooks/clearAppCache');

exports.config = {
  tests: './tests/*_test.js',
  timeout: 10,
   output: './output',
  helpers: {
    Appium: {
      // --- Capacidades duplicadas para satisfazer o CodeceptJS ---
      platformName: 'Android',
      app: 'bs://293687243fde616dc5b2189c030d964bc89f71d2',
      // --- Fim da duplicação ---

      host: 'hub-cloud.browserstack.com',
      port: 443,
      keepCookies: true,
      waitForTimeout: 15000,


      desiredCapabilities: {
        // --- Capacidades padrão do Appium (para o servidor BrowserStack/Appium) ---
        platformName: 'Android',
        app: 'bs://293687243fde616dc5b2189c030d964bc89f71d2',
        automationName: 'UiAutomator2',
        appWaitActivity: '*',

        // --- Capacidades específicas do BrowserStack ---
        'bstack:options': {
          deviceName: 'Samsung Galaxy S22 Ultra',
          // Não coloque app, automationName, appWaitActivity aqui novamente.
          // Isso foi o erro anterior.
          // Coloque apenas capacidades como project, build, osVersion, etc.
          // Ex: project: "Carrefour Mobile Tests",
          // Ex: build: "Build 1.0", ddd
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