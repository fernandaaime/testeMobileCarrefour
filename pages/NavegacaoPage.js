module.exports = {
  elements: {
    abaSwipe: '//android.widget.TextView[@text="Swipe"]',
  },

  async acessarAbaSwipe() {
    const { I } = inject();
    I.waitForElement(this.elements.abaSwipe, 15);
    I.tap(this.elements.abaSwipe);
  }
};