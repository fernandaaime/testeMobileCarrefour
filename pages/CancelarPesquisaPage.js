const { I } = inject();

module.exports = {
  // Seletor
  cancelar: '//android.widget.Button[@text="Close"]',

  // Ação
  acessarAbaWebview() {
    I.tap(this.cancelar);
  }
};