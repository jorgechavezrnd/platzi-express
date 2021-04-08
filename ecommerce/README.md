# Ecommerce

## References(URLs)
- Bulma: https://bulma.io/
- Fontawesome: https://fontawesome.com/

## Command for create mongodb container with docker
- `docker run -d -p 27017:27017 --name mongodb_platzi_express -e MONGO_INITDB_ROOT_USERNAME=admin -e MONGO_INITDB_ROOT_PASSWORD=p1a7z1 mongo`
- After that, with Robo 3T (or other tool), create "platziexpress" database

## Commands for install dependencies
- `npm i -S express`
- `npm i -D nodemon`
- `npm i -S pug`
- `npm i -S dotenv`
- `npm i -S mongodb`
- `npm i -S @hapi/joi`
- `npm i -S @hapi/boom`
