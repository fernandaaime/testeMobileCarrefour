module.exports = {
  // Seletor
  abaWebviewBtn: '//android.widget.TextView[@text="Webview"]',

  // Ação
  acessarAbaWebview() {
    const { I } = inject();
    I.tap(this.abaWebviewBtn);
    I.wait(2);
  }
};