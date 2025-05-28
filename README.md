Testes Automatizados Mobile com CodeceptJS + Appium + WebdriverIO

Este projeto realiza testes automatizados mobile utilizando CodeceptJS, Appium, WebdriverIO e Android Studio (emulador). A execução dos testes ocorre localmente e também na pipeline do GitHub Actions, utilizando BrowserStack como ambiente de execução.

Além disso, implementei a abordagem de Page Objects, garantindo uma estrutura mais organizada e reutilizável para os testes automatizados.

Tecnologias Utilizadas

CodeceptJS
Appium
WebdriverIO
Android Studio
Appium Doctor
GitHub Actions
BrowserStack
Appium Inspector


Pré-requisitos

Certifique-se de ter os seguintes requisitos antes de executar os testes:
Node.js LTS instalado
Android Studio com SDK e AVD configurados
Java instalado (11+)
Appium 2.x instalado


Plugins Appium necessários:

Appium driver uiautomator2


Verificações
Utilizei Appium Doctor para verificar se o ambiente está corretamente configurado:


Inspeção de Elementos com Appium Inspector
Para facilitar a inspeção dos elementos utilizei Appium Inspector. Essa ferramenta permite visualizar e interagir com os elementos da tela, facilitando a criação e manutenção dos testes automatizados.


Execução dos Testes
Ambiente Local (Emulador Android Studio)
Os testes podem ser executados localmente com o emulador do Android Studio já configurado e rodando.


Pipeline (GitHub Actions + BrowserStack)
O projeto está configurado para rodar a cada commit na pipeline do GitHub Actions utilizando BrowserStack. 

O workflow .github/workflows/ci.yml já está configurado com os comandos necessários para:

Instalar dependências
Executar os testes no BrowserStack
Validar os relatórios de execução


Abordagem Page Objects
Para garantir uma estrutura mais modular e organizada, adotei a abordagem de Page Objects, facilitando a manutenção e reutilização de componentes de UI. Cada página ou funcionalidade tem sua própria classe representando os elementos e ações disponíveis, reduzindo a duplicação de código e melhorando a escalabilidade dos testes.


Relatórios com Allure
Os testes geram relatórios automáticos detalhados com screenshots em caso de falha, garantindo maior visibilidade dos resultados.