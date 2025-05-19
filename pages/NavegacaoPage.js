module.exports = {
  elements: {
    abaSwipe: '//android.widget.TextView[@text="Swipe"]',
  },

  async acessarAbaSwipe() {
    const I = actor();
    I.waitForElement(this.elements.abaSwipe, 15);
    I.tap(this.elements.abaSwipe);
  }
};