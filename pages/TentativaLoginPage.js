async realizarLogin(email, senha) {
  I.waitForElement(this.loginButton, 15); // Aguarda a tela carregar completamente
  console.log(`Tentando login com email: "${email}" e senha: "${senha}"`);

  if (email) {
    I.waitForElement(this.emailField, 10);
    I.fillField(this.emailField, email);
  }
  
  I.waitForElement(this.passwordField, 10);
  I.fillField(this.passwordField, senha);
  I.tap(this.loginButton);
}