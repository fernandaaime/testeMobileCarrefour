const { container } = require('codeceptjs');

module.exports = {
  async realizarScrollHorizontal(vezes = 5) {
    const I = inject(); // garante acesso ao actor atual
    const appium = container.helpers('Appium');
    const driver = appium.browser;

    const { width, height } = await driver.getWindowSize();
    const startX = Math.floor(width * 0.8);
    const endX = Math.floor(width * 0.2);
    const y = Math.floor(height * 0.5);

    for (let i = 0; i < vezes; i++) {
      await driver.performActions([
        {
          type: 'pointer',
          id: 'finger1',
          parameters: { pointerType: 'touch' },
          actions: [
            { type: 'pointerMove', duration: 0, x: startX, y },
            { type: 'pointerDown', button: 0 },
            { type: 'pause', duration: 300 },
            { type: 'pointerMove', duration: 500, x: endX, y },
            { type: 'pointerUp', button: 0 }
          ]
        }
      ]);

      await driver.releaseActions(); // libera ações pendentes para evitar falhas
      await driver.pause(1000); // espera entre os scrolls
    }
  }
};
