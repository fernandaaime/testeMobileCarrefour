# Use uma imagem base que já tenha Node.js e Java, se possível, para simplificar.
# Se a imagem node:18 + openjdk-17-jdk funcionou bem no seu setup, use ela.
# FROM node:18-bullseye-slim # bullseye-slim é uma boa base para reduzir o tamanho.
FROM node:18 # Usando sua imagem base para compatibilidade

# Instalação de dependências do sistema
RUN apt-get update && apt-get install -y \
    curl \
    unzip \
    openjdk-17-jdk \
    libgbm1 \
    adb \
    && rm -rf /var/lib/apt/lists/*

# Configuração do Android SDK
ENV ANDROID_HOME="/opt/android-sdk"
ENV PATH="$PATH:$ANDROID_HOME/cmdline-tools/latest/bin:$ANDROID_HOME/platform-tools"

RUN mkdir -p $ANDROID_HOME/cmdline-tools \
    && wget -q https://dl.google.com/android/repository/commandlinetools-linux-9477386_latest.zip -O android-sdk-tools.zip \
    && unzip android-sdk-tools.zip -d $ANDROID_HOME/cmdline-tools \
    && rm android-sdk-tools.zip \
    && mv $ANDROID_HOME/cmdline-tools/cmdline-tools $ANDROID_HOME/cmdline-tools/latest \
    && yes | sdkmanager --licenses \
    && sdkmanager "platforms;android-30" "system-images;android-30;google_apis;x86" "build-tools;30.0.3"

# Instalação do Appium globalmente (para que o comando 'appium' esteja no PATH)
RUN npm install -g appium --unsafe-perm=true --allow-root

# Cria um AVD (Android Virtual Device)
# 'echo no' é para aceitar o prompt de criação do AVD
RUN echo "no" | avdmanager create avd --name test_emulator --package "system-images;android-30;google_apis;x86" --tag "google_apis" --abi "x86"

# Define o diretório de trabalho padrão dentro do contêiner
WORKDIR /app

# Copia os arquivos de configuração e dependências do seu projeto
COPY package.json package-lock.json ./
RUN npm install # Instala as dependências do seu projeto localmente no contêiner

# Copia o restante do seu código fonte do projeto
COPY . .

# Comando que será executado por padrão se o contêiner for executado diretamente
# ENTRYPOINT ["/bin/bash"] # Ou, para depuração, use ENTRYPOINT ["/bin/bash"] e depois docker exec -it container_id bash