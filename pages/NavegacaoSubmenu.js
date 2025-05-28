const { container } = require('codeceptjs');

module.exports = {
  async scrollAteGetStarted(I) {
    const appium = container.helpers('Appium');
    if (!appium) {
      throw new Error("Appium não foi inicializado corretamente.");
    }

    const driver = appium.browser;
    if (!driver) {
      throw new Error("O navegador do Appium não está disponível.");
    }

    // Obtém dimensões da tela
    const { width, height } = await driver.getWindowSize();
    console.log(`Dimensões -> width: ${width}, height: ${height}`);

    const startY = Math.floor(height * 0.75);
    const endY = Math.floor(height * 0.35);
    const x = Math.floor(width * 0.5);

    for (let i = 0; i < 7; i++) {
      await driver.touchPerform([
        { action: 'press', x, y: startY },
        { action: 'wait', ms: 300 },
        { action: 'moveTo', x, y: endY },
        { action: 'release' }
      ]);

      console.log(`Scroll vertical realizado (${i + 1}/7)`);
      await driver.pause(1000);

      const getStartedButton = await driver.$('//android.widget.TextView[@text="Get Started"]');
      if (await getStartedButton.isDisplayed()) {
        await getStartedButton.click();
        console.log("Botão 'Get Started' clicado!");
        break;
      }
    }
  }
};