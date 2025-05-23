const { actor } = require('codeceptjs');
const I = actor();

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

    I.tap('//android.widget.TextView[@text="Login"]');
    I.tap('//android.widget.TextView[@text="Sign up"]');
    I.waitForElement(this.fields.email, 15);
    I.fillField(this.fields.email, email);
    I.fillField(this.fields.password, senha);
    I.fillField(this.fields.repeatPassword, senha);
  },

  async enviarCadastro() {
    I.tap(this.buttons.signUp);
  },

  async verificarCadastroComSucesso() {
    I.waitForElement(this.alerts.successTitle, 15);
    I.wait(2); // Garante que o alerta está visível antes da verificação
    I.see('Signed Up!', this.alerts.successTitle);
    I.tap(this.buttons.confirm);
  },
};
