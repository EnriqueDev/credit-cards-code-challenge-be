import App from './app'
import CardsControler from './modules/Cards/CardsControler'
import bodyParser = require('body-parser')
import cors from 'cors'

const app = new App({
  port: 4321,
  controllers: [new CardsControler()],
  middleware: [
    bodyParser.json(),
    bodyParser.urlencoded({ extended: true }),
    // Note: a generic cors was used here, in a real-world app should be client-restricted
    cors(),
  ],
})
app.listen()
