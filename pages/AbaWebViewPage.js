const { I } = inject();
module.exports = {
  abaWebviewBtn: '//android.widget.TextView[@text="Webview"]',
  acessarAbaWebview() {
    I.tap(this.abaWebviewBtn);
    I.wait(2);
  }
};
