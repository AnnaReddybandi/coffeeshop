pipeline {
    agent any

    stages {
        stage('Checkout') {
            steps {
                git branch: 'shop', url: 'https://github.com/AnnaReddybandi/coffeeshop.git'
            }
        }

        stage('Build') {
            steps {
                echo 'Build step: nothing to compile for HTML/CSS project'
            }
        }

        stage('Archive') {
            steps {
                archiveArtifacts artifacts: '**/*', fingerprint: true
            }
        }

        stage('Deploy') {
            steps {
                echo 'Deploy step: add deployment commands here later'
            }
        }
    }

    post {
        success {
            echo 'Pipeline completed successfully!'
        }
        failure {
            echo 'Pipeline failed!'
        }
    }
}

