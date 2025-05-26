const { execSync } = require('child_process');

async function abrirAplicativo(I) {
  // Fecha o aplicativo antes de iniciar novamente
 

  // Aguarda um curto período para garantir o encerramento completo
  I.wait(5);

  // Inicia o aplicativo novamente
 
}

module.exports = { abrirAplicativo };
