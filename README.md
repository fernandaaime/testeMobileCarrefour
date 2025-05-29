# 📱 Testes Automatizados Mobile com CodeceptJS + Appium + WebdriverIO

Este projeto realiza testes automatizados para aplicações mobile Android utilizando CodeceptJS, Appium, WebdriverIO e Android Studio (com emulador).  
A execução pode ser feita localmente ou via GitHub Actions, com BrowserStack como ambiente remoto.

Além disso, adota-se a abordagem de Page Objects, garantindo uma estrutura escalável, organizada e de fácil manutenção.

---

Tecnologias Utilizadas

- CodeceptJS
- Appium 2.x
- WebdriverIO
- Android Studio
- Appium Doctor
- Appium Inspector
- BrowserStack
- GitHub Actions

---

Pré-requisitos

Antes de executar os testes, é necessário instalar e configurar os seguintes componentes corretamente: 

- Node.js (LTS)
- Java JDK 11+
- Android Studio com SDK e AVD (Android Virtual Device) configurados
- Appium 2.x instalado globalmente
Plugin necessário do Appium:
- uiautomator2

---

Verificações do Ambiente
Utilize o Appium Doctor para garantir que todos os requisitos do ambiente estão corretos:

---

Inspeção de Elementos
Para facilitar a criação e manutenção dos testes, utilize o Appium Inspector, que permite inspecionar visualmente os elementos da tela e interagir com a interface da aplicação.

---
Execução dos Testes
Ambiente Local (Emulador Android Studio)
Pipeline CI (GitHub Actions + BrowserStack)
O projeto está configurado para executar automaticamente os testes a cada push utilizando GitHub Actions

O arquivo .github/workflows/ci.yml contempla:

- Instalação de dependências
- Execução dos testes no BrowserStack
- Geração de relatórios com Allure

Estrutura com Page Objects
A arquitetura do projeto segue o padrão Page Object, separando a lógica dos testes dos elementos de UI.
Cada página da aplicação possui uma classe própria, com métodos reutilizáveis e específicos, facilitando:

- Reaproveitamento de código
- Manutenção centralizada
- Escalabilidade da suíte de testes

Relatórios com Allure
Os testes geram relatórios detalhados utilizando o Allure Reports.