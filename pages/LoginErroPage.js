
const { I } = inject();
module.exports = {
  buttons: {
    loginTab: '//android.widget.TextView[@text="Login"]',
    loginSubmit: '//android.widget.TextView[@text="LOGIN"]',
    formsTab: '//android.widget.TextView[@text="Forms"]',
  },
  fields: {
    email: '//android.widget.EditText[@content-desc="input-email"]',
    password: '//android.widget.EditText[@content-desc="input-password"]',
  },
  alerts: {
    shortPassword: '//android.widget.TextView[contains(@text, "characters")]',
  },
  async acessarTelaDeLogin() {
    I.waitForVisible(this.buttons.loginTab, 15);
    I.tap(this.buttons.loginTab);
  },
  async preencherFormulario(email, senha) {
    I.waitForVisible(this.fields.email, 15);
    I.fillField(this.fields.email, email);
    I.fillField(this.fields.password, senha);
  },
  async submeterLogin() {
    I.tap(this.buttons.loginSubmit);
  },
  async verificarErroSenhaCurta() {
    I.waitForVisible(this.alerts.shortPassword, 15);
    I.see('Please enter at least 8 characters', this.alerts.shortPassword);
  },
  async voltarParaForms() {
    I.waitForVisible(this.buttons.formsTab, 15);
    I.tap(this.buttons.formsTab);
  }
};
