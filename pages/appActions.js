const { execSync } = require('child_process');

async function abrirAplicativo(I) {
  I.wait(5);
}
module.exports = { abrirAplicativo };
