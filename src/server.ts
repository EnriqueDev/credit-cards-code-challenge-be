import App from './app'
import ClubControler from './modules/Cards/CardsController'
import bodyParser = require('body-parser')

const app = new App({
  port: 1234,
  controllers: [new ClubControler()],
  middleware: [bodyParser.json(), bodyParser.urlencoded({ extended: true })],
})
app.listen()
