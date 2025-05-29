const { I } = inject();
module.exports = {
  abaWebviewBtn: '//android.widget.TextView[@text="Webview"]',
  pesquisa: '//android.webkit.WebView',
  acessarAbaWebview() {
    I.tap(this.abaWebviewBtn);
    I.wait(2);
    I.tap(this.pesquisa);
  }
};