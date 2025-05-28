const { I } = inject();

module.exports = {
  emailField: '//android.widget.EditText[@resource-id="com.wdiodemoapp:id/email"]',
  passwordField: '//android.widget.EditText[@resource-id="com.wdiodemoapp:id/password"]',
  loginButton: '//android.widget.Button[@resource-id="com.wdiodemoapp:id/login"]',

  async realizarLogin(email, senha) {
    if (email) {
      I.fillField(this.emailField, email);
    }
    I.fillField(this.passwordField, senha);
    I.tap(this.loginButton);
  }
};