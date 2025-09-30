pipeline {
    agent any

    environment {
        DOCKER_IMAGE = "coffeeshop-site"
        CONTAINER_NAME = "coffeeshop"
        PORT = "8090"
    }

    stages {
        stage('Checkout') {
            steps {
                git branch: 'shop', url: 'https://github.com/AnnaReddybandi/coffeeshop.git'
            }
        }

        stage('Build Docker Image') {
            steps {
                script {
                    echo "Building Docker image ${DOCKER_IMAGE}"
                    sh "docker build -t ${DOCKER_IMAGE} ."
                }
            }
        }

        stage('Deploy Container') {
            steps {
                script {
                    echo "Stopping existing container if exists"
                    sh "docker stop ${CONTAINER_NAME} || true"
                    sh "docker rm ${CONTAINER_NAME} || true"

                    echo "Running container on port ${PORT}"
                    sh "docker run -d -p ${PORT}:80 --name ${CONTAINER_NAME} ${DOCKER_IMAGE}"
                }
            }
        }
    }

    post {
        success {
            echo "Pipeline completed successfully!"
        }
        failure {
            echo "Pipeline failed!"
        }
    }
}
