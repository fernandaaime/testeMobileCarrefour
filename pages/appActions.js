const { execSync } = require('child_process');

async function abrirAplicativo(I) {
  // Fecha o aplicativo antes de iniciar novamente
  execSync('adb shell am force-stop com.wdiodemoapp');

  // Aguarda um curto período para garantir o encerramento completo
  I.wait(5);

  // Inicia o aplicativo novamente
  execSync('adb shell am start -n com.wdiodemoapp/com.wdiodemoapp.MainActivity');
}

module.exports = { abrirAplicativo };
