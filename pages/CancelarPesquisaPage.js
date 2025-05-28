const { I } = inject();

module.exports = {
  // Seletor
  abaWebviewBtn: '//android.widget.TextView[@text="Webview"]',
  pesquisa: '//android.webkit.WebView',
  cancelar: '//android.widget.Button[@text="Close"]',

  // Ação
  acessarAbaWebview() {
    I.tap(this.abaWebviewBtn);
    I.wait(2);
    I.tap(this.pesquisa);
    I.tap(this.cancelar);
  }
};