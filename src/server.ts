import App from './app'
import CardsControler from './modules/Cards/CardsControler'
import bodyParser = require('body-parser')

const app = new App({
  port: 1234,
  controllers: [new CardsControler()],
  middleware: [bodyParser.json(), bodyParser.urlencoded({ extended: true })],
})
app.listen()
