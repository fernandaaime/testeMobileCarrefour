const { I } = inject();

module.exports = {
  // Elementos (locators)
  loginTab: '//android.widget.TextView[@text="Login"]',
  passwordField: '//android.widget.EditText[@content-desc="input-password"]',
  loginButton: '//android.widget.TextView[@text="LOGIN"]',
  errorMessage: '//android.widget.TextView[@text="Please enter a valid email address"]',

  // Métodos
  acessarAbaLogin() {
    I.waitForVisible(this.loginTab, 20); // Aumentado para maior tolerância
    I.tap(this.loginTab);
  },

  preencherSenha(senha) {
    I.waitForVisible(this.passwordField, 25); // Aumentado para apps mais lentos
    I.fillField(this.passwordField, senha);
  },

  tocarEmLogin() {
    I.waitForEnabled(this.loginButton, 20); // Aumentado para garantir clique seguro
    I.tap(this.loginButton);
  },

  tentarLoginSemEmail(senha) {
    this.acessarAbaLogin();
    this.preencherSenha(senha);
    this.tocarEmLogin();

    I.waitForVisible(this.errorMessage, 30); // Tempo ampliado para mensagens tardias
    I.see('Please enter a valid email address', this.errorMessage);
  }
};
