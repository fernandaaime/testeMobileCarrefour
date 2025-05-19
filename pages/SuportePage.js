module.exports = {
  // Seletor
  btnHome: '//android.widget.TextView[@text="Home"]',

  // Ação
  acessarHome() {
    const I = actor();
    I.tap(this.btnHome);
    I.wait(2);
  }
};