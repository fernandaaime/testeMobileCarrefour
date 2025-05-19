const { container } = require('codeceptjs');

module.exports = {
  async scrollAteGetStarted() {
    const appium = container.helpers('Appium');
    const driver = appium.browser;
    const { width, height } = await driver.getWindowSize();

    const startY = height * 0.75;
    const endY = height * 0.35;
    const x = width * 0.5;

    for (let i = 0; i < 7; i++) {
      await driver.performActions([
        {
          type: 'pointer',
          id: 'finger1',
          parameters: { pointerType: 'touch' },
          actions: [
            { type: 'pointerMove', duration: 0, x: x, y: startY },
            { type: 'pointerDown', button: 0 },
            { type: 'pause', duration: 300 },
            { type: 'pointerMove', duration: 500, x: x, y: endY },
            { type: 'pointerUp', button: 0 }
          ]
        }
      ]);
      await driver.pause(1000);

      const getStarted = await driver.$('//android.widget.TextView[@text="Get Started"]');
      if (await getStarted.isDisplayed()) break;
    }

    await driver.$('//android.widget.TextView[@text="Get Started"]').click();
  }
};
