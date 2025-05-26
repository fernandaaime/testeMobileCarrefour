module.exports = {
  // Seletor
  btnHome: '//android.widget.TextView[@text="Home"]',

  // Ação
  async acessarHome() {
    const { I } = inject();
    await I.waitForElement(this.btnHome, 10);
    await I.tap(this.btnHome);
    await I.wait(2);
  }
};
