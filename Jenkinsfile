pipeline {
    agent any
    stages {
        stage('Checkout') {
            steps {
                git 'https://gitlab.com/FernandaAime25/carrefour-mobile'
            }
        }
        stage('Build') {
            steps {
                sh 'mvn clean package'  // Ou outro comando de build
            }
        }
        stage('Test') {
            steps {
                sh 'mvn test'  // Ou comandos para rodar testes automatizados
            }
        }
        stage('Deploy') {
            steps {
                sh './deploy.sh'  // Script de implantação, se necessário
            }
        }
    }
}
