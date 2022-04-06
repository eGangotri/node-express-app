# node-express-app
node-express-app

docker build . -t egangotri/node-express-app
docker run -p 8080:8080 -d egangotri/node-express-app
docker login
docker push egangotri/node-express-app
