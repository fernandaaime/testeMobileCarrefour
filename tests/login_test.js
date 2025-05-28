Feature('Testes Mobile');

const { abrirAplicativo } = require('../pages/appActions');
const CadastroPage = require('../pages/CadastroPage');
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

/*Scenario('Cadastro com dados válidos', async ({ I }) => { // Já está correto
  await CadastroPage.preencherFormulario(I, 'fernanda.aime@gmail.com', '12345678'); // Passando 'I'
  await CadastroPage.enviarCadastro(I); // Passando 'I'
  await CadastroPage.verificarCadastroComSucesso(I); // Passando 'I'
});*/

Scenario('Cadastro com dados válidos', async () => {
  await CadastroPage.preencherFormulario('fernanda.aime@gmail.com', 'senhaSegura123');
  await CadastroPage.enviarCadastro();
  await CadastroPage.verificarCadastroComSucesso();
}).timeout(30000);

Scenario('Login com sucesso', async ({ I }) => { // Adicionado { I }
  await LoginPage.realizarLogin(I, 'usuario@email.com', '12345678'); // Passando 'I'

  I.waitForElement('//android.widget.TextView[@resource-id="android:id/alertTitle"]', 15);
  I.see('Success', '//android.widget.TextView[@resource-id="android:id/alertTitle"]');
  I.tap('//android.widget.Button[@resource-id="android:id/button1"]');
});

Scenario('Login com menos de 8 caracteres', async ({ I }) => { // Adicionado { I }
  await LoginErroPage.acessarTelaDeLogin(I); // Passando 'I'
  await LoginErroPage.preencherFormulario(I, 'fernanda.aime@gmail.com', '12345'); // Passando 'I'
  await LoginErroPage.submeterLogin(I); // Passando 'I'
  await LoginErroPage.verificarErroSenhaCurta(I); // Passando 'I'
  await LoginErroPage.voltarParaForms(I); // Passando 'I'
});

Scenario('Preenchimento de formulário', async ({ I }) => { // Adicionado { I }
  await FormPage.preencherNome(I, 'Fernanda'); // Passando 'I'
  await FormPage.tocarBotaoAtivo(I); // Passando 'I'
  await FormPage.verificarMensagemAtivo(I); // Passando 'I'
  await FormPage.confirmarAlerta(I); // Passando 'I'
});

Scenario('Navegação entre abas', async ({ I }) => { // Adicionado { I }
  await NavegacaoPage.acessarAbaSwipe(I); // Passando 'I'
});

Scenario('Funcionalidade Scroll Horizontal', async ({ I }) => { // Adicionado { I }
  await ScrollPage.realizarScrollHorizontal(I, 5); // Passando 'I'
});

Scenario('Acessibilidade de suporte', async ({ I }) => { // Adicionado { I }
  await SuportePage.acessarHome(I); // Passando 'I'
});

Scenario('Acessibilidade para aba Webview', async ({ I }) => { // Adicionado { I }
  await AbaWebViewPage.acessarAbaWebview(I); // Passando 'I'
});

Scenario('Funcionamento do scroll vertical e navegação no Submenu', async ({ I }) => { // Adicionado { I }
  await NavegacaoSubmenu.scrollAteGetStarted(I); // Passando 'I' '
});
