const { I } = inject();

module.exports = {
 
  cancelar: '//android.widget.Button[@text="Close"]',

  acessarAbaWebview() {
    I.tap(this.cancelar);
  }
};