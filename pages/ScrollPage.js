const { container } = require('codeceptjs');

module.exports = {
  async realizarScrollHorizontal(I, vezes = 5) {
    const appium = container.helpers('Appium');
    if (!appium) {
      throw new Error("Appium não foi inicializado corretamente.");
    }

    const driver = appium.browser;
    if (!driver) {
      throw new Error("O navegador do Appium não está disponível.");
    }

    // Obtém as dimensões da tela
    const { width, height } = await driver.getWindowSize();
    console.log(`Dimensões -> width: ${width}, height: ${height}`);

    const startX = Math.floor(width * 0.8);
    const endX = Math.floor(width * 0.2);
    const y = Math.floor(height * 0.5);

    for (let i = 0; i < vezes; i++) {
      await driver.touchPerform([
        { action: 'press', x: startX, y },
        { action: 'wait', ms: 300 },
        { action: 'moveTo', x: endX, y },
        { action: 'release' }
      ]);

      console.log(`Scroll horizontal realizado (${i + 1}/${vezes})`);
      await driver.pause(1000);
    }
  }
};