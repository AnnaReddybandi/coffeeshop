pipeline {
    agent any

    environment {
        DOCKER_IMAGE = "coffeeshop-site"
        CONTAINER_NAME = "coffeeshop"
        PORT = "8090"  // Use 8090 for your website
    }

    stages {
        stage('Checkout') {
            steps {
                git branch: 'shop', url: 'https://github.com/AnnaReddybandi/coffeeshop.git'
            }
        }

        stage('Build Docker Image') {
            steps {
                echo "Building Docker image ${DOCKER_IMAGE}"
                sh "docker build -t ${DOCKER_IMAGE} ."
            }
        }

        stage('Deploy Container') {
            steps {
                echo "Stopping existing container if exists"
                sh """
                    docker stop ${CONTAINER_NAME} || true
                    docker rm ${CONTAINER_NAME} || true
                """

                echo "Running container on port ${PORT}"
                sh "docker run -d -p ${PORT}:80 --name ${CONTAINER_NAME} ${DOCKER_IMAGE}"
            }
        }
    }

    post {
        success {
            echo "Pipeline completed successfully! Visit http://<EC2_PUBLIC_IP>:${PORT}"
        }
        failure {
            echo "Pipeline failed!"
        }
    }
}
