const { I } = inject();

module.exports = {
  elements: {
    abaSwipe: '//android.widget.TextView[@text="Swipe"]',
  },

  async acessarAbaSwipe() {
    I.waitForVisible(this.elements.abaSwipe, 15);
    I.tap(this.elements.abaSwipe);
  }
};
