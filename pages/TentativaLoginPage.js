const { I } = inject();

module.exports = {
  // Elementos (locators)
  loginTab: '//android.widget.TextView[@text="Login"]',
  passwordField: '//android.widget.EditText[@content-desc="input-password"]',
  loginButton: '//android.widget.TextView[@text="LOGIN"]',
  errorMessage: '//android.widget.TextView[@text="Please enter a valid email address"]',

  // Métodos
  acessarAbaLogin() {
    I.waitForVisible(this.loginTab, 10);
    I.tap(this.loginTab);
  },

  preencherSenha(senha) {
    I.waitForVisible(this.passwordField, 15);
    I.fillField(this.passwordField, senha);
  },

  tocarEmLogin() {
    I.tap(this.loginButton);
  },

  tentarLoginSemEmail(senha) {
    this.acessarAbaLogin();
    this.preencherSenha(senha);
    this.tocarEmLogin();
    I.waitForVisible(this.errorMessage, 15);
    I.see('Please enter a valid email address', this.errorMessage);
  }
};
