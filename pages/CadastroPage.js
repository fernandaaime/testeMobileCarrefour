/*module.exports = {
  fields: {
    email: '//android.widget.EditText[@content-desc="input-email"]',
    password: '//android.widget.EditText[@content-desc="input-password"]',
    repeatPassword: '//android.widget.EditText[@content-desc="input-repeat-password"]',
  },

  buttons: {
    signUp: '//android.widget.TextView[@text="SIGN UP"]',
    confirm: '//android.widget.Button[@resource-id="android:id/button1"]',
  },

  alerts: {
    successTitle: '//android.widget.TextView[@resource-id="android:id/alertTitle"]',
  },

  async preencherFormulario(email, senha) {
    const { I } = inject();
    await I.tap('//android.widget.TextView[@text="Login"]');
    await I.tap('//android.widget.TextView[@text="Sign up"]');
    await I.waitForElement(this.fields.email, 15);
    await I.fillField(this.fields.email, email);
    await I.fillField(this.fields.password, senha);
    await I.fillField(this.fields.repeatPassword, senha);
  },

  async enviarCadastro() {
    const { I } = inject();
    await I.tap(this.buttons.signUp);
  },

  async verificarCadastroComSucesso() {
    const { I } = inject();
    await I.waitForElement(this.alerts.successTitle, 15);
    await I.wait(2);
    await I.see('Signed Up!', this.alerts.successTitle);
    await I.tap(this.buttons.confirm);
  },
};*/

module.exports = {
  fields: {
    email: '//android.widget.EditText[@content-desc="input-email"]',
    password: '//android.widget.EditText[@content-desc="input-password"]',
    repeatPassword: '//android.widget.EditText[@content-desc="input-repeat-password"]',
  },

  buttons: {
    signUp: '//android.widget.TextView[@text="SIGN UP"]',
    confirm: '//android.widget.Button[@resource-id="android:id/button1"]',
  },

  alerts: {
    successTitle: '//android.widget.TextView[@resource-id="android:id/alertTitle"]',
  },

  async preencherFormulario(email, senha) {
    const { I } = inject();

    await I.tap('//android.widget.TextView[@text="Login"]');
    await I.tap('//android.widget.TextView[@text="Sign up"]');

    await I.waitForElement(this.fields.email, 15);
    await I.fillField(this.fields.email, email);

    await I.waitForElement(this.fields.password, 15);
    await I.fillField(this.fields.password, senha);

    await I.wait(1); // estabiliza animações/entrada de dados
    await I.waitForElement(this.fields.repeatPassword, 15);
    await I.fillField(this.fields.repeatPassword, senha);
  },

  async enviarCadastro() {
    const { I } = inject();
    await I.hideDeviceKeyboard(); // garante visibilidade do botão
    await I.waitForElement(this.buttons.signUp, 10);
    await I.tap(this.buttons.signUp);
  },

  async verificarCadastroComSucesso() {
    const { I } = inject();
    await I.waitForElement(this.alerts.successTitle, 15);
    await I.see('Signed Up!', this.alerts.successTitle);
    await I.tap(this.buttons.confirm);
  },
};

