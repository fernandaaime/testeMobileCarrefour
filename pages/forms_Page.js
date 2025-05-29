const { I } = inject();
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
    I.waitForVisible(this.fields.nome, 15);
    I.fillField(this.fields.nome, nome);
  },
  async tocarBotaoAtivo() {
    I.waitForVisible(this.buttons.activeButton, 15);
    I.tap(this.buttons.activeButton);
  },
  async verificarMensagemAtivo() {
    I.waitForVisible(this.alerts.activeMessage, 15);
    I.see('This button is active', this.alerts.activeMessage);
  },
  async confirmarAlerta() {
    I.waitForVisible(this.buttons.alertOkButton, 10);
    I.tap(this.buttons.alertOkButton);
  }
};
