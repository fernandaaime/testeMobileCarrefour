require('./hooks/clearAppCache');

exports.config = {
  tests: './tests/*_test.js',
 
  timeout: 10,
  output: './output',
  helpers: {
    Appium: {
      host: 'hub-cloud.browserstack.com',
      port: 443, // Revertido para a porta padrão HTTPS do BrowserStack
      user: process.env.BROWSERSTACK_USER,
      key: process.env.BROWSERSTACK_KEY,
      restart: false, // Tenta NÃO reiniciar o navegador/aplicativo entre os cenários
      keepBrowserState: true, // Mantém o estado do navegador/aplicativo entre os cenários
      keepCookies: true, // Mantém cookies entre os cenários (se aplicável)
      waitForTimeout: 15000,
      desibstack:optionss: {
        platformName: 'Android',
        'bstack:options': {
          deviceName: 'Samsung Galaxy S22 Ultra', 
          app: 'bs://293687243fde616dc5b2189c030d964bc89f71d2',
          automationName: 'UiAutomator2',
          appWaitActivity: '*',
        },
      },

      webdriverio: {
        version: '8.18.2' // Versão do webdriverio que o CodeceptJS deve usar
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