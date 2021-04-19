# Ecommerce

## References(URLs)
- Bulma: https://bulma.io/
- Fontawesome: https://fontawesome.com/
- Test coverage with nyc: https://github.com/istanbuljs/nyc
- Helmet github repository: https://github.com/helmetjs/helmet
- Helmet website: https://helmetjs.github.io/
- snyk: https://app.snyk.io/login

## Command for create mongodb container with docker
- `docker run -d -p 27017:27017 --name mongodb_platzi_express -e MONGO_INITDB_ROOT_USERNAME=admin -e MONGO_INITDB_ROOT_PASSWORD=p1a7z1 mongo`
- After that, with Robo 3T (or other tool), create "platziexpress" database

## Command for generate AUTH JWT SCRET
- `node -e "console.log(require('crypto').randomBytes(256).toString('base64'));"`

## Command for create admin user with seed-admin.js script in scripts/mongo directory
- `node scripts/mongo/seed-admin.js`

## Command for run tests
- `npm t`
- For run only a group of tests, use 'describe.only' instead of 'describe' in the test, but don't push the code with 'describe.only'
- For run test with coverage: `npm run test:cover`

## For debug showing debug messages
- `npm run dev:debug`

## For inspect and debug
- `npm run dev:inspect`
- Go to chrome http://localhost:8000/products on chrome
- Open dev tools and click the Node.js icon

## For build
- `npm run build` (This command generates main.min.css in public/assets)

## Detect vulnerabilities
- `npm audit`

## Commands for install dependencies
- `npm i -S express`
- `npm i -D nodemon`
- `npm i -S pug`
- `npm i -S dotenv`
- `npm i -S mongodb`
- `npm i -S @hapi/joi`
- `npm i -S @hapi/boom`
- `npm i -S passport passport-http passport-jwt jsonwebtoken bcrypt`
- `npm i -D chalk`
- `npm i -D supertest mocha sinon proxyquire`
- `npm i -D nyc`
- `npm i -D clean-css-cli`
- `npm install -g win-node-env` (For NODE_ENV variable in package.json, on windows)
- `npm i -S helmet`
