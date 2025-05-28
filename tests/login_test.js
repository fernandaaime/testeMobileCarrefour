Feature('Testes Mobile');

const { abrirAplicativo } = require('../pages/appActions');
const CadastroPage = require('../pages/CadastroPage');
const TentativaLoginPage = require('../TentativaLoginPage');
const LoginPage = require('../pages/LoginPage');
const LoginErroPage = require('../pages/LoginErroPage');
const FormPage = require('../pages/FormsPage');
const NavegacaoPage = require('../pages/NavegacaoPage');
const ScrollPage = require('../pages/ScrollPage');
const SuportePage = require('../pages/SuportePage');
const AbaWebViewPage = require('../pages/AbaWebViewPage');
const NavegacaoSubmenu = require('../pages/NavegacaoSubmenu');

Scenario('Abrir o aplicativo', async ({ I }) => {
  await abrirAplicativo(I); 
});

Scenario('Cadastro com dados válidos', { timeout: 60 }, async () => {
    await CadastroPage.preencherFormulario('fernanda.aime@gmail.com', '12345678');
    await CadastroPage.enviarCadastro();
    await CadastroPage.verificarCadastroComSucesso();
});

Scenario('Tentativa de login sem email', async ({ I }) => {
  await TentativaLoginPage.realizarLogin('', '12345678'); // Só senha, sem email
  I.waitForElement(TentativaLoginPage.LoginLocators.errorMessage, 15);
  I.see('Please enter a valid email address', TentativaLoginPage.LoginLocators.errorMessage);
});

Scenario('Login com sucesso', async ({ I }) => {
  await LoginPage.realizarLogin('usuario@email.com', '12345678');
  I.waitForElement('//android.widget.TextView[@resource-id="android:id/alertTitle"]', 15);
  I.see('Success', '//android.widget.TextView[@resource-id="android:id/alertTitle"]');
  I.tap('//android.widget.Button[@resource-id="android:id/button1"]');
});

Scenario('Login com menos de 8 caracteres', async () => {
  await LoginErroPage.acessarTelaDeLogin();
  await LoginErroPage.preencherFormulario('fernanda.aime@gmail.com', '12345');
  await LoginErroPage.submeterLogin();
  await LoginErroPage.verificarErroSenhaCurta();
  await LoginErroPage.voltarParaForms();
});

Scenario('Preenchimento de formulário', async () => {
  await FormPage.preencherNome('Fernanda');
  await FormPage.tocarBotaoAtivo();
  await FormPage.verificarMensagemAtivo();
  await FormPage.confirmarAlerta();
});

Scenario('Navegação entre abas', async () => {
  await NavegacaoPage.acessarAbaSwipe();
});

Scenario('Acessibilidade de suporte', async () => {
  await SuportePage.acessarHome();
});

Scenario('Acessibilidade para aba Webview', async () => {
  await AbaWebViewPage.acessarAbaWebview();
});

Scenario('Funcionamento do scroll vertical e navegação no Submenu', async ({ I }) => {
  await NavegacaoSubmenu.scrollAteGetStarted(I);
});
