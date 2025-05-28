const { container } = require('codeceptjs');

module.exports = {
  async scrollAteGetStarted() {
    const { I } = inject();
    const appium = container.helpers('Appium');

    // Verificação da inicialização do Appium
    if (!appium) {
      throw new Error("O helper Appium não está disponível.");
    }

    const driver = appium.browser;
    if (!driver) {
      throw new Error("O navegador do Appium não foi inicializado corretamente.");
    }

    // Obtém dimensões da tela e ajusta coordenadas
    const { width, height } = await driver.getWindowSize();
    console.log(`Dimensões da tela -> width: ${width}, height: ${height}`);

    const startY = Math.floor(height * 0.75);
    const endY = Math.floor(height * 0.35);
    const x = Math.floor(width * 0.5);

    for (let i = 0; i < 7; i++) {
      try {
        await driver.touchPerform([
          { action: 'press', x, y: startY },
          { action: 'wait', ms: 300 },
          { action: 'moveTo', x, y: endY },
          { action: 'release' }
        ]);

        console.log(`Scroll realizado (${i + 1}/7)`);

        await driver.pause(1000);

        const getStarted = await driver.$('//android.widget.TextView[@text="Get Started"]');
        if (await getStarted.isDisplayed()) break;
      } catch (error) {
        console.error(`Erro ao realizar o scroll: ${error.message}`);
      }
    }

    const getStartedButton = await driver.$('//android.widget.TextView[@text="Get Started"]');
    if (await getStartedButton.isDisplayed()) {
      await getStartedButton.click();
      console.log("Botão 'Get Started' clicado com sucesso!");
    } else {
      throw new Error("Botão 'Get Started' não encontrado na tela.");
    }
  }
};