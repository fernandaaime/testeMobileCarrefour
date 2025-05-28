const { container } = require('codeceptjs');

Feature('Scroll Horizontal');

Scenario('Realizar scroll horizontal na tela', async ({ I }) => {
  const appium = container.helpers('Appium');
  if (!appium) {
    throw new Error("Appium não foi inicializado corretamente.");
  }

  const driver = appium.browser;
  if (!driver) {
    throw new Error("O navegador do Appium não está disponível.");
  }

  // Obtém as dimensões da tela
  const { width, height } = await driver.getWindowSize();
  console.log(`Dimensões -> width: ${width}, height: ${height}`);

  const startX = Math.floor(width * 0.8);
  const endX = Math.floor(width * 0.2);
  const y = Math.floor(height * 0.5);

  // Define número de repetições do scroll
  const vezes = 5;
  for (let i = 0; i < vezes; i++) {
    await driver.touchPerform([
      { action: 'press', x: startX, y },
      { action: 'wait', ms: 300 },
      { action: 'moveTo', x: endX, y },
      { action: 'release' }
    ]);

    console.log(`Scroll horizontal realizado (${i + 1}/${vezes})`);
    await driver.pause(1000);
  }

  // Validação para a pipeline
  const elementoEsperado = await I.grabNumberOfVisibleElements('seu-seletor-aqui');
  if (elementoEsperado === 0) {
    throw new Error("O scroll não revelou o elemento esperado.");
  } else {
    console.log("Teste de scroll bem-sucedido!");
  }
});