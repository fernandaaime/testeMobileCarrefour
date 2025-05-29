module.exports = {
  btnHome: '//android.widget.TextView[@text="Home"]',
  async acessarHome() {
    const { I } = inject();
    await I.waitForElement(this.btnHome, 10);
    await I.tap(this.btnHome);
    await I.wait(2);
  }
};
