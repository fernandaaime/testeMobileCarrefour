const { I } = inject();

module.exports = {
  emailField: '//android.widget.EditText[@resource-id="com.wdiodemoapp:id/email"]',
  passwordField: '//android.widget.EditText[@resource-id="com.wdiodemoapp:id/password"]',
  loginButton: '//android.widget.Button[@resource-id="com.wdiodemoapp:id/login"]',

  async realizarLogin(email, senha) {
    console.log(`Tentando login com email: "${email}" e senha: "${senha}"`);

    I.waitForElement(this.passwordField, 10); // Aguarda o campo de senha para garantir que a tela carregou
    if (email) {
      I.waitForElement(this.emailField, 10);
      I.fillField(this.emailField, email);
    }
    I.fillField(this.passwordField, senha);
    I.tap(this.loginButton);
  }
};