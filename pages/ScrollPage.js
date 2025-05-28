const { container } = require('codeceptjs');

module.exports = {
  async realizarScrollHorizontal(vezes = 5) {
    const { I } = inject();
    const appium = container.helpers('Appium');

    // Verifica se o Appium está inicializado corretamente
    if (!appium) {
      throw new Error('O helper Appium não está disponível.');
    }

    const driver = appium.browser;
    if (!driver) {
      throw new Error('O navegador do Appium não foi inicializado corretamente.');
    }

    // Obtém as dimensões da tela e ajusta coordenadas
    const { width, height } = await driver.getWindowSize();
    console.log(`Dimensões da tela -> width: ${width}, height: ${height}`);

    const startX = Math.floor(width * 0.8);
    const endX = Math.floor(width * 0.2);
    const y = Math.floor(height * 0.5);

    for (let i = 0; i < vezes; i++) {
      try {
        await driver.touchPerform([
          { action: 'press', x: startX, y },
          { action: 'wait', ms: 300 },
          { action: 'moveTo', x: endX, y },
          { action: 'release' }
        ]);

        console.log(`Scroll horizontal realizado (${i + 1}/${vezes})`);
        await driver.pause(1000); // Aguarda entre os scrolls para maior estabilidade
      } catch (error) {
        console.error(`Erro ao realizar o scroll horizontal: ${error.message}`);
      }
    }
  }
};