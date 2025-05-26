module.exports = {
  // Seletor
  btnHome: '//android.widget.TextView[@text="Home"]',

  // Ação
  acessarHome() {
    const { I } = inject();
    I.tap(this.btnHome);
    I.wait(2);
  }
};