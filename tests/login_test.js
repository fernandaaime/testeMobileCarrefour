Feature('Testes Mobile');

const { abrirAplicativo } = require('../pages/appActions');
const CadastroPage = require('../pages/CadastroPage');
const LoginPage = require('../pages/LoginPage');
const LoginErroPage = require('../pages/LoginErroPage');
const FormPage = require('../pages/FormsPage');
const NavegacaoPage = require('../pages/NavegacaoPage');
const SuportePage = require('../pages/SuportePage');
const AbaWebViewPage = require('../pages/AbaWebViewPage');
const PesquisaPage = require('../pages/PesquisaPage');
const PesquisaPage = require('../pages/CancelarPesquisaPage');

Scenario('Abrir o aplicativo', async ({ I }) => {
  await abrirAplicativo(I); 
});

Scenario('Cadastro com dados válidos', { timeout: 60 }, async () => {
    await CadastroPage.preencherFormulario('fernanda.aime@gmail.com', '12345678');
    await CadastroPage.enviarCadastro();
    await CadastroPage.verificarCadastroComSucesso();
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

Scenario('Validando campo de pesquisa Webview', async () => {
  await AbaWebViewPage.acessarAbaWebview();

});


Scenario('Acessar aba Webview e clicar na pesquisa', async ({ I }) => {
  PesquisaPage.acessarAbaWebview();
  I.waitForVisible(PesquisaPage.pesquisa, 15);
});

Scenario('Acessar aba Webview, clicar na pesquisa e depois cancelar', ({ I }) => {
  PesquisaPage.acessarAbaWebview();
  I.waitForVisible(PesquisaPage.cancelar, 15);
});