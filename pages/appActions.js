const { I } = inject();
const { execSync } = require('child_process');

function abrirAplicativo() {
  I.wait(5);
}

module.exports = { abrirAplicativo };
