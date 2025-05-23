pipeline {
    agent any
    triggers {
        gitlab(triggerOnPush: true, triggerOnMergeRequest: true) // Rodar automaticamente ao fazer push ou merge
    }
    stages {
        stage('Install Dependencies') {
            steps {
                sh 'npm install' // Instala todas as dependências do projeto
            }
        }
        stage('Run Tests') {
            steps {
                sh 'npx codeceptjs run --steps' // Executa os testes com CodeceptJS
            }
        }
    }
}
