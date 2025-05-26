const { I } = inject();

module.exports = {
  // Elementos (locators)
  loginTab: '//android.widget.TextView[@text="Login"]',
  emailField: '//android.widget.EditText[@content-desc="input-email"]',
  passwordField: '//android.widget.EditText[@content-desc="input-password"]',
  loginButton: '//android.widget.TextView[@text="LOGIN"]',

  // Métodos
  acessarAbaLogin() {
    I.waitForVisible(this.loginTab, 10);
    I.tap(this.loginTab);
  },

  preencherEmail(email) {
    I.waitForVisible(this.emailField, 15);
    I.fillField(this.emailField, email);
  },

  preencherSenha(senha) {
    I.fillField(this.passwordField, senha);
  },

  tocarEmLogin() {
    I.tap(this.loginButton);
  },

  realizarLogin(email, senha) {
    this.acessarAbaLogin();
    this.preencherEmail(email);
    this.preencherSenha(senha);
    this.tocarEmLogin();
  }
};
