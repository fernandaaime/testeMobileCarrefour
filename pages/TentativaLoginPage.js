const { I } = inject();

const LoginLocators = {
  emailField: '//android.widget.EditText[@resource-id="com.wdiodemoapp:id/email"]',
  passwordField: '//android.widget.EditText[@resource-id="com.wdiodemoapp:id/password"]',
  loginButton: '//android.widget.Button[@resource-id="com.wdiodemoapp:id/login"]',
  errorMessage: '//android.widget.TextView[@text="Please enter a valid email address"]'
};

module.exports = {
  LoginLocators,

  async realizarLogin(email, senha) {
    console.log(`Tentando login com email: "${email}" e senha: "${senha}"`);
    
    I.waitForElement(LoginLocators.passwordField, 15); 
    if (email) {
      I.waitForElement(LoginLocators.emailField, 15);
      I.fillField(LoginLocators.emailField, email);
    }
    I.fillField(LoginLocators.passwordField, senha);
    I.tap(LoginLocators.loginButton);
  }
};