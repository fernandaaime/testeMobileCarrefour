module.exports = {
  fields: {
    nome: '//android.widget.EditText[@content-desc="text-input"]',
  },

  buttons: {
    activeButton: '//android.widget.TextView[@text="Active"]',
    alertOkButton: '//android.widget.Button[@resource-id="android:id/button1"]',
  },

  alerts: {
    activeMessage: '//android.widget.TextView[@resource-id="android:id/message"]',
  },

  async preencherNome(nome) {
    const { I } = inject();
    I.waitForElement(this.fields.nome, 15);
    I.fillField(this.fields.nome, nome);
  },

  async tocarBotaoAtivo() {
    const { I } = inject();
    I.waitForElement(this.buttons.activeButton, 15);
    I.tap(this.buttons.activeButton);
  },

  async verificarMensagemAtivo() {
    const { I } = inject();
    I.waitForElement(this.alerts.activeMessage, 15);
    I.see('This button is active', this.alerts.activeMessage);
  },

  async confirmarAlerta() {
    const { I } = inject();
    I.waitForElement(this.buttons.alertOkButton, 10);
    I.tap(this.buttons.alertOkButton);
  }
};
