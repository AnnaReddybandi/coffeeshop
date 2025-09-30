stage('Docker Build') {
    steps {
        sh 'docker build -t coffeeshop-app .'
    }
}

stage('Docker Run') {
    steps {
        sh 'docker rm -f coffeeshop-container || true'
        sh 'docker run -d -p 80:80 --name coffeeshop-container coffeeshop-app'
    }
}

