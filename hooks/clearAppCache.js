const { event, container } = require('codeceptjs');

event.dispatcher.on('test.beforeSuite', async () => {
  const appium = container.helpers('Appium');
  const driver = appium.browser;

  console.log('🧹 Limpando cache do app...');
  try {
    await driver.execute('mobile: shell', {
      command: 'pm',
      args: ['clear', 'com.wdiodemoapp'],
      includeStderr: true,
      timeout: 5000
    });
    console.log('✅ Cache limpo com sucesso.');
  } catch (err) {
    console.error('❌ Falha ao limpar cache do app:', err.message);
  }
});



