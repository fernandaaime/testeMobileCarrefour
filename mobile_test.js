/*Feature('Autenticação');

const { I } = inject();
const { container } = require('codeceptjs');

Scenario('Cadastro com dados válidos', async ({ I }) => {
  I.waitForElement('//android.widget.EditText[@content-desc="input-email"]', 15);
  I.fillField('//android.widget.EditText[@content-desc="input-email"]', 'fernanda.aime@gmail.com');
  I.fillField('//android.widget.EditText[@content-desc="input-password"]', '12345678');
  I.fillField('//android.widget.EditText[@content-desc="input-repeat-password"]', '12345678');
  I.tap('//android.widget.TextView[@text="SIGN UP"]');
  I.waitForElement('//android.widget.TextView[@resource-id="android:id/alertTitle"]', 15);
  I.see('Signed Up!', '//android.widget.TextView[@resource-id="android:id/alertTitle"]');
  I.tap('//android.widget.Button[@resource-id="android:id/button1"]');
});

Scenario('Login com sucesso', async ({ I }) => {
  I.waitForElement('//android.widget.TextView[@text="Login"]', 10);
  I.tap('//android.widget.TextView[@text="Login"]');
  I.waitForElement('//android.widget.EditText[@content-desc="input-email"]', 15);
  I.fillField('//android.widget.EditText[@content-desc="input-email"]', 'fernanda.aime@gmail.com');
  I.fillField('//android.widget.EditText[@content-desc="input-password"]', '12345678');
  I.tap('//android.widget.TextView[@text="LOGIN"]');
  I.waitForElement('//android.widget.TextView[@resource-id="android:id/alertTitle"]', 15);
  I.see('Success', '//android.widget.TextView[@resource-id="android:id/alertTitle"]');
  I.tap('//android.widget.Button[@resource-id="android:id/button1"]');
});

Scenario('Login com menos de 8 caracteres', async ({ I }) => {
  I.waitForElement('//android.widget.TextView[@text="Login"]', 15);
  I.tap('//android.widget.TextView[@text="Login"]');
  I.waitForElement('//android.widget.EditText[@content-desc="input-email"]', 15);
  I.fillField('//android.widget.EditText[@content-desc="input-email"]', 'fernanda.aime@gmail.com');
  I.fillField('//android.widget.EditText[@content-desc="input-password"]', '12345');
  I.tap('//android.widget.TextView[@text="LOGIN"]');
  I.waitForElement('//android.widget.TextView[contains(@text, "characters")]', 15);
  I.see('Please enter at least 8 characters', '//android.widget.TextView[contains(@text, "characters")]');
  I.waitForElement('//android.widget.TextView[@text="Forms"]', 15);
  I.tap('//android.widget.TextView[@text="Forms"]');
});

Scenario('Preenchimento de formulário', async ({ I }) => {
  I.waitForElement('//android.widget.EditText[@content-desc="text-input"]', 15);
  I.fillField('//android.widget.EditText[@content-desc="text-input"]', 'Fernanda');
  I.waitForElement('//android.widget.TextView[@text="Active"]', 15);
  I.tap('//android.widget.TextView[@text="Active"]');
  I.waitForElement('//android.widget.TextView[@resource-id="android:id/message"]', 15);
  I.see('This button is active', '//android.widget.TextView[@resource-id="android:id/message"]');
  I.waitForElement('//android.widget.Button[@resource-id="android:id/button1"]', 10);
  I.tap('//android.widget.Button[@resource-id="android:id/button1"]');
}); 

Scenario('Navegação entre abas', async ({ I }) => {
  I.waitForElement('//android.widget.TextView[@text="Swipe"]', 15);
  I.tap('//android.widget.TextView[@text="Swipe"]');
}); 

Scenario('Funcionalidade Scroll Horizontal', async () => {
  const appium = container.helpers('Appium');
  const driver = appium.browser;
  const { width, height } = await driver.getWindowSize();
  const startX = Math.floor(width * 0.8);
  const endX = Math.floor(width * 0.2);
  const y = Math.floor(height * 0.5);
  for (let i = 0; i < 5; i++) {
    await driver.performActions([
      {
        type: 'pointer',
        id: 'finger1',
        parameters: { pointerType: 'touch' },
        actions: [
          { type: 'pointerMove', duration: 0, x: startX, y: y },
          { type: 'pointerDown', button: 0 },
          { type: 'pause', duration: 300 },
          { type: 'pointerMove', duration: 500, x: endX, y: y },
          { type: 'pointerUp', button: 0 }
        ]
      }
    ]);
    await driver.pause(1000);
  }
});

Scenario('Acessibilidade de suporte', async ({ I }) => {
  I.tap('//android.widget.TextView[@text="Home"]');
  I.wait(2);
});

Scenario('Acessibilidade para aba Webview', async ({ I }) => {
  I.tap('//android.widget.TextView[@text="Webview"]');
  I.wait(2);

});

Scenario('Scroll vertical até Get Started e encerrar', async () => {
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

    if (await driver.$('//android.widget.TextView[@text="Get Started"]').isDisplayed()) {
      break;
    }
  }

  await driver.$('//android.widget.TextView[@text="Get Started"]').click();
});*/

