const { I } = inject();

module.exports = {
  // Seletor
  abaWebviewBtn: '//android.widget.TextView[@text="Webview"]',

  // Ação
  acessarAbaWebview() {
    I.tap(this.abaWebviewBtn);
    I.wait(2);
  }
};
